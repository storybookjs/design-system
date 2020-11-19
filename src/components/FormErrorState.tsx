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
  trackErrors: Function;
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
  trackErrors,
}: PureFormErrorStateProps) => {
  const getFormErrorFieldProps = ({ id, validate }: GetFormErrorFieldPropsArgs) => ({
    onMouseEnter: () => onMouseEnter(id),
    onMouseLeave: () => onMouseLeave(id),
    onFocus: () => onFocus(id),
    onBlur: () => onBlur(id),
    error: (value: string) => getError({ id, value, validate: trackErrors({ id, validate }) }),
    suppressErrorMessage: !primaryFieldId || primaryFieldId !== id,
  });

  return children({ getFormErrorFieldProps, onSubmit });
};

export const FormErrorState: React.FunctionComponent<FormErrorStateProps> = ({
  onSubmit,
  ...rest
}) => {
  const [focusedFieldId, setFocusedFieldId] = useState(undefined);
  // The lastFocusedFieldId is used to control error messaging for fields that
  // are not active, but had an error after a recent focus.
  const [lastFocusedFieldId, setLastFocusedFieldId] = useState(undefined);
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
    else if (erroredFieldIds.size > 0) setPrimaryFieldId(lastFocusedFieldId);
    else if (focusedFieldId) setPrimaryFieldId(focusedFieldId);
    else setPrimaryFieldId(undefined);
  }, [focusedFieldId, hoveredFieldId, setPrimaryFieldId]);

  // Wrap the submit handler to control form error state once it has been submitted
  const handleSubmit = useCallback(
    (...args: any[]) => {
      setDidAttemptSubmission(true);
      onSubmit(...args);
    },
    [onSubmit]
  );

  const trackErrors = useCallback(
    ({ id, validate }) => {
      return (value: string) => {
        const error = validate(value);
        if (error) {
          setErroredFieldIds(erroredFieldIds.add(id));
        } else {
          erroredFieldIds.delete(id);
          setErroredFieldIds(erroredFieldIds);
        }
        return error;
      };
    },
    [setErroredFieldIds]
  );

  const isErrorVisible = (id: string) => blurredFieldIds.has(id) || didAttemptSubmission;

  return (
    <PureFormErrorState
      {...rest}
      {...{
        primaryFieldId,
        trackErrors,
        onSubmit: handleSubmit,
        onFocus: (id) => setFocusedFieldId(id),
        onBlur: (id) => {
          setBlurredFieldIds(blurredFieldIds.add(id));
          setLastFocusedFieldId(focusedFieldId);
          setFocusedFieldId(undefined);
        },
        onMouseEnter: (id) => {
          // We only care about the hover state of previously blurred fields.
          // We don't want to show error tooltips for fields that haven't been
          // visited yet. In the case that the form has already had an attempted
          // submission, all errors will be visible.
          if (isErrorVisible(id)) setHoveredFieldId(id);
        },
        onMouseLeave: (id) => {
          if (isErrorVisible(id)) setHoveredFieldId(undefined);
        },
        getError: ({ id, value, validate }: GetErrorArgs) => isErrorVisible(id) && validate(value),
      }}
    />
  );
};
