import React, {
  ComponentProps,
  ComponentType,
  FC,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { styled, css } from '@storybook/theming';
import { color, typography } from './shared/styles';

const Label = styled.label<{ hideLabel: boolean }>`
  ${(props) =>
    props.hideLabel &&
    css`
      border: 0px !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(100%) !important;
      clip-path: inset(100%) !important;
      height: 1px !important;
      overflow: hidden !important;
      padding: 0px !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
    `}
`;

const ErrorMessage = styled.span`
  color: ${color.negative};
  font-weight: ${typography.weight.regular};
`;

const LabelWrapper = styled.div<{ hideLabel: boolean; error: ReactNode }>`
  margin-bottom: 0.33em;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2}px;

  ${(props) =>
    props.hideLabel &&
    !props.error &&
    css`
      height: 0;
      margin: 0;
    `}

  ${(props) =>
    !props.hideLabel &&
    css`
      ${ErrorMessage} {
        margin-left: 0.5em;
      }
    `}
`;

const Subtext = styled.div``;

const TextareaText = styled.textarea`
  ::placeholder {
    color: ${color.mediumdark};
  }
  appearance: none;
  border: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  word-wrap: break-word;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 3em ${color.lightest} inset;
  }
`;

const TextareaWrapper = styled.div<{ error: ReactNode }>`
  display: inline-block;
  font-size: ${typography.size.s2}px;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${TextareaText} {
    background: ${color.lightest};
    border-radius: 0;
    color: ${color.darkest};
    font-size: ${typography.size.s2}px;
    line-height: 20px;
    padding: 0.7111em 1em; //40

    box-shadow: ${color.border} 0 0 0 1px inset;
    &:focus {
      box-shadow: ${color.secondary} 0 0 0 1px inset;
    }
  }

  ${(props) =>
    props.error &&
    css`
      ${TextareaText} {
        box-shadow: ${color.red} 0 0 0 1px inset;
        &:focus {
          box-shadow: ${color.red} 0 0 0 1px inset !important;
        }
      }
    `};
`;

const TextareaContainer = styled.div<{ orientation: Props['orientation'] }>`
  ${(props) =>
    props.orientation === 'horizontal' &&
    css`
      display: table-row;

      ${LabelWrapper}, ${TextareaWrapper} {
        display: table-cell;
      }

      ${LabelWrapper} {
        width: 1px;
        padding-right: 20px;
      }

      ${TextareaWrapper} {
        width: auto;
      }
    `}
`;

const getErrorMessage = ({ error, value }: any): ReactNode =>
  typeof error === 'function' ? error(value) : error;

interface Props {
  id: string;
  value: string;
  label: string;
  appearance?: 'default';
  hideLabel?: boolean;
  orientation?: 'vertical' | 'horizontal';
  error?: ReactNode | ComponentType;
  startFocused?: boolean;
  subtext?: string;
  className?: string;
  subtextSentiment?: 'default' | 'negative' | 'warning';
}

export const Textarea: FC<Props & ComponentProps<typeof TextareaText>> = forwardRef(
  (
    {
      id,
      value,
      label,
      hideLabel = false,
      error = null,
      subtext,
      subtextSentiment,
      appearance = 'default',
      orientation = 'vertical',
      className,
      startFocused = false,
      ...rest
    },
    ref
  ) => {
    // Outside refs take precedence
    const selfRef = useRef();
    const textareaRef: MutableRefObject<HTMLTextAreaElement> =
      (ref as MutableRefObject<HTMLTextAreaElement>) || selfRef;
    const didFocusOnStart = useRef(false);

    useEffect(() => {
      if (textareaRef && textareaRef.current && startFocused && !didFocusOnStart.current) {
        textareaRef.current.focus();
        didFocusOnStart.current = true;
      }
    }, [textareaRef, textareaRef.current, didFocusOnStart, didFocusOnStart.current]);

    const [errorMessage, setErrorMessage] = useState(getErrorMessage({ error, value }));

    useEffect(() => {
      setErrorMessage(getErrorMessage({ error, value }));
    }, [value, error]);

    const errorId = `${id}-error`;
    const subtextId = `${id}-subtext`;
    const ariaDescribedBy = `${error ? errorId : ''} ${subtext ? subtextId : ''}`;

    return (
      <TextareaContainer orientation={orientation} className={className}>
        <LabelWrapper hideLabel={hideLabel} error={errorMessage}>
          <Label htmlFor={id} hideLabel={hideLabel}>
            {label}
          </Label>
          {errorMessage && (
            <ErrorMessage id={errorId} aria-hidden>
              {errorMessage}
            </ErrorMessage>
          )}
        </LabelWrapper>
        <TextareaWrapper error={errorMessage}>
          <TextareaText
            id={id}
            value={value}
            rows={7}
            aria-invalid={!!error}
            aria-describedby={ariaDescribedBy}
            ref={textareaRef}
            {...rest}
          />
          {subtext && <Subtext id={subtextId}>{subtext}</Subtext>}
        </TextareaWrapper>
      </TextareaContainer>
    );
  }
);
Textarea.displayName = 'Textarea';
