/* eslint-disable no-unused-expressions */
import React, { useEffect, useCallback, useState } from 'react';

interface FormErrorFieldProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  error: (value: string) => string | void;
  suppressErrorMessage: boolean;
}

interface GetFormErrorFieldPropsArgs {
  id: string;
  validate: (value: string) => string | void;
}

export interface GetErrorArgs extends GetFormErrorFieldPropsArgs {
  value: string;
}

export interface FormErrorStateChildrenArgs {
  onSubmit: Function;
  getFormErrorFieldProps: (args: GetFormErrorFieldPropsArgs) => FormErrorFieldProps;
}

export interface FormErrorStateProps {
  onSubmit: Function;
  children: (args: FormErrorStateChildrenArgs) => JSX.Element;
}

export interface PureFormErrorStateProps extends FormErrorStateProps {
  primaryFieldId: string;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (id: string) => void;
  getError: (args: GetErrorArgs) => void;
}

export const PureFormErrorState = ({
  children,
  onSubmit,
  onMouseEnter,
  onMouseLeave,
  onBlur,
  onFocus,
  getError,
  primaryFieldId,
}: PureFormErrorStateProps) => {
  const getFormErrorFieldProps = ({ id, validate }: GetFormErrorFieldPropsArgs) => ({
    onMouseEnter: () => onMouseEnter(id),
    onMouseLeave: () => onMouseLeave(id),
    onFocus: () => onFocus(id),
    onBlur: () => onBlur(id),
    error: (value: string) => getError({ id, value, validate }),
    suppressErrorMessage: !primaryFieldId || primaryFieldId !== id,
  });

  return children({ getFormErrorFieldProps, onSubmit });
};

export const FormErrorState: React.FunctionComponent<FormErrorStateProps> = ({
  onSubmit,
  ...rest
}) => {
  const [focusedFieldId, setFocusedFieldId] = useState(undefined);
  // The lastInteractionFieldId is used to control error messaging for fields that
  // are not active, but had an error after a recent focus.
  const [lastInteractionFieldId, setLastInteractionFieldId] = useState(undefined);
  const [hoveredFieldId, setHoveredFieldId] = useState(undefined);
  // The primary field is the field that's visual cues take precedence over any
  // others given the entire form's focused & hover states.
  // Use this to control things like error messaging priority.
  const [primaryFieldId, setPrimaryFieldId] = useState(undefined);
  const [blurredFieldIds, setBlurredFieldIds] = useState(new Set());
  const [erroredFieldIds, setErroredFieldIds] = useState(new Set());
  const [didAttemptSubmission, setDidAttemptSubmission] = useState(false);

  useEffect(() => {
    if (hoveredFieldId) setPrimaryFieldId(hoveredFieldId);
    else if (focusedFieldId && erroredFieldIds.has(focusedFieldId))
      setPrimaryFieldId(focusedFieldId);
    else if (erroredFieldIds.size > 0) setPrimaryFieldId(lastInteractionFieldId);
    else if (focusedFieldId) setPrimaryFieldId(focusedFieldId);
    else setPrimaryFieldId(undefined);
  }, [focusedFieldId, hoveredFieldId, lastInteractionFieldId, erroredFieldIds]);

  // Wrap the submit handler to control form error state once it has been submitted
  const handleSubmit = useCallback(
    (...args: any[]) => {
      setDidAttemptSubmission(true);
      onSubmit(...args);
    },
    [onSubmit]
  );

  // There are a lot of pieces of state that can affect the callbacks. Rather
  // than list each one in every callback which could lead to one being left
  // out easily, just regenerate the callbacks when any of them change.
  const callbackRegenValues = [
    focusedFieldId,
    lastInteractionFieldId,
    hoveredFieldId,
    primaryFieldId,
    blurredFieldIds,
    erroredFieldIds,
    didAttemptSubmission,
  ];

  const trackErrorsAndValidate = useCallback(({ id, validate, value }) => {
    const error = validate(value);
    if (error) {
      !erroredFieldIds.has(id) && setErroredFieldIds(new Set(erroredFieldIds.add(id)));
    } else {
      erroredFieldIds.delete(id) && setErroredFieldIds(new Set(erroredFieldIds));
    }
    return error;
  }, callbackRegenValues);

  const wasFieldTouched = useCallback(
    (id: string) => blurredFieldIds.has(id) || didAttemptSubmission,
    callbackRegenValues
  );

  const isErrorVisible = useCallback(
    (id: string) => wasFieldTouched(id) && erroredFieldIds.has(id),
    callbackRegenValues
  );

  const onFocus = useCallback((id: string) => setFocusedFieldId(id), callbackRegenValues);

  const onBlur = useCallback((id: string) => {
    !blurredFieldIds.has(id) && setBlurredFieldIds(blurredFieldIds.add(id));
    setLastInteractionFieldId(focusedFieldId);
    setFocusedFieldId(undefined);
  }, callbackRegenValues);

  // We only care about the hover state of previously blurred fields.
  // We don't want to show error tooltips for fields that haven't been
  // visited yet. In the case that the form has already had an attempted
  // submission, all errors will be visible.
  const onMouseEnter = useCallback((id: string) => {
    if (isErrorVisible(id)) setHoveredFieldId(id);
  }, callbackRegenValues);

  const onMouseLeave = useCallback((id: string) => {
    if (isErrorVisible(id)) {
      setLastInteractionFieldId(hoveredFieldId);
      setHoveredFieldId(undefined);
    }
  }, callbackRegenValues);

  const getError = useCallback(({ id, value, validate }: GetErrorArgs) => {
    return wasFieldTouched(id) && trackErrorsAndValidate({ id, validate, value });
  }, callbackRegenValues);

  return (
    <PureFormErrorState
      {...rest}
      {...{
        primaryFieldId,
        onSubmit: handleSubmit,
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        getError,
      }}
    />
  );
};
