import React, { useEffect, useState } from 'react';

interface Field {
  id: string;
  validationError: (value: string) => string | void;
  Component: (props: any) => JSX.Element;
}

export interface FormProps {
  fields: [Field?];
}

export interface PureFormProps extends FormProps {
  children?: React.ReactChildren;
  primaryFieldId: string;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (id: string) => void;
  blurredFieldIds: Set<string | unknown>;
}

export const PureForm = ({
  children,
  fields = [],
  onMouseEnter,
  onMouseLeave,
  onBlur,
  onFocus,
  primaryFieldId,
  blurredFieldIds,
  ...rest
}: PureFormProps) => {
  return (
    <form {...rest}>
      {fields.map(({ id, validationError, Component }: Field) => (
        <Component
          key={id}
          id={id}
          onMouseEnter={() => onMouseEnter(id)}
          onMouseLeave={() => onMouseLeave(id)}
          onFocus={() => onFocus(id)}
          onBlur={() => onBlur(id)}
          error={(value: string) => blurredFieldIds.has(id) && validationError(value)}
          suppressErrorMessage={!primaryFieldId || primaryFieldId !== id}
        />
      ))}
      {children}
    </form>
  );
};

export const Form = (props: FormProps) => {
  const [focusedFieldId, setFocusedFieldId] = useState(undefined);
  const [hoveredFieldId, setHoveredFieldId] = useState(undefined);
  // The primary field is the field that's visual cues take precedence over any
  // others given the entire form's focused & hover states.
  // Use this to control things like error messaging priority.
  const [primaryFieldId, setPrimaryFieldId] = useState(undefined);
  const [blurredFieldIds, setBlurredFieldIds] = useState(new Set());

  useEffect(() => {
    if (hoveredFieldId) setPrimaryFieldId(hoveredFieldId);
    else if (focusedFieldId) setPrimaryFieldId(focusedFieldId);
    else setPrimaryFieldId(undefined);
  }, [focusedFieldId, hoveredFieldId, setPrimaryFieldId]);

  return (
    <PureForm
      {...props}
      {...{
        blurredFieldIds,
        onFocus: (id) => setFocusedFieldId(id),
        onBlur: (id) => {
          setBlurredFieldIds(blurredFieldIds.add(id));
          setFocusedFieldId(undefined);
        },
        onMouseEnter: (id) => {
          // We only care about the hover state of previously blurred fields.
          // We don't want to show error tooltips for fields that haven't been
          // visited yet.
          if (blurredFieldIds.has(id)) setHoveredFieldId(id);
        },
        onMouseLeave: (id) => {
          if (blurredFieldIds.has(id)) setHoveredFieldId(undefined);
        },
        primaryFieldId,
      }}
    />
  );
};
