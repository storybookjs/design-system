import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';

const Label = styled.label`
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

const LabelWrapper = styled.div`
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

const TextareaWrapper = styled.div`
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
        box-shadow: ${color.negative} 0 0 0 1px inset;
        &:focus {
          box-shadow: ${color.negative} 0 0 0 1px inset !important;
        }
      }
    `};
`;

const TextareaContainer = styled.div`
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

const getErrorMessage = ({ error, value }) => (typeof error === 'function' ? error(value) : error);

export const Textarea = forwardRef(
  (
    {
      id,
      value,
      label,
      hideLabel,
      error,
      subtext,
      subtextSentiment,
      appearance,
      orientation,
      className,
      startFocused,
      ...rest
    },
    ref
  ) => {
    // Outside refs take precedence
    const textareaRef = ref || useRef();
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
        <LabelWrapper appearance={appearance} hideLabel={hideLabel} error={errorMessage}>
          <Label htmlFor={id} hideLabel={hideLabel}>
            {label}
          </Label>
          {errorMessage && (
            <ErrorMessage id={errorId} aria-hidden>
              {errorMessage}
            </ErrorMessage>
          )}
        </LabelWrapper>
        <TextareaWrapper error={errorMessage} appearance={appearance}>
          <TextareaText
            id={id}
            value={value}
            rows="7"
            aria-invalid={!!error}
            aria-describedby={ariaDescribedBy}
            ref={textareaRef}
            {...rest}
          />
          {subtext && (
            <Subtext id={subtextId} sentiment={subtextSentiment}>
              {subtext}
            </Subtext>
          )}
        </TextareaWrapper>
      </TextareaContainer>
    );
  }
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf(['default']),
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  startFocused: PropTypes.bool,
  subtext: PropTypes.string,
  subtextSentiment: PropTypes.oneOf(['default', 'negative', 'warning']),
  className: PropTypes.string,
};

Textarea.defaultProps = {
  appearance: 'default',
  hideLabel: false,
  orientation: 'vertical',
  error: null,
  startFocused: false,
  subtext: null,
  subtextSentiment: 'default',
  className: null,
};
