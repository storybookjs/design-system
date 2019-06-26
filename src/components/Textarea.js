import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';

const Label = styled.label`
  ${props =>
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
  margin-bottom: ${props => (props.appearance === 'code' ? 0.5 : 0.33)}em;
  font-weight: ${props => props.appearance !== 'code' && typography.weight.bold};
  font-family: ${props => props.appearance === 'code' && typography.type.code};
  font-size: ${props => (props.appearance === 'code' ? typography.size.s1 : typography.size.s2)}px;

  ${props =>
    props.hideLabel &&
    !props.error &&
    css`
      height: 0;
      margin: 0;
    `}

  ${props =>
    !props.hideLabel &&
    css`
      ${ErrorMessage} {
        margin-left: 0.5em;
      }
    `}
`;

const Subtext = styled.div``;

const TextareaText = styled.textarea`
  ::placeholder: ${color.medium};
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
  font-family: ${props => props.appearance === 'code' && typography.type.code};
  font-size: ${props => (props.appearance === 'code' ? typography.size.s1 : typography.size.s2)}px;
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
    padding: .7111em 1em; //40

    &:focus { box-shadow: ${color.primary} 0 0 0 1px inset; }

    ${props =>
      props.appearance === 'secondary' &&
      css`
        box-shadow: ${color.mediumlight} 0 0 0 1px inset;

        &:focus {
          box-shadow: ${color.secondary} 0 0 0 1px inset;
        }
      `}

    ${props =>
      props.appearance === 'tertiary' &&
      css`
        padding: 0;
        border: none;
        box-shadow: none;
        background: none;

        &:focus {
          box-shadow: none !important;
        }
      `}

    ${props =>
      props.appearance === 'code' &&
      css`
        font-size: ${typography.size.s1}px;
        line-height: 16px;
        font-family: ${typography.type.code};
        border-radius: 2px;
        background: ${color.border};
        padding: 6px 6px;
      `}
  }

  ${props =>
    props.error &&
    css`
      ${props.appearance !== 'tertiary' &&
        css`
          ${TextareaText} {
            box-shadow: ${color.negative} 0 0 0 1px inset;
            &:focus {
              box-shadow: ${color.negative} 0 0 0 1px inset !important;
            }
          }
        `};
    `}

`;

const TextareaContainer = styled.div`
  ${props =>
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

export function Textarea({
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
  ...other
}) {
  const errorId = `${id}-error`;
  const subtextId = `${id}-subtext`;

  const ariaDescribedBy = `${error ? errorId : ''} ${subtext ? subtextId : ''}`;

  return (
    <TextareaContainer orientation={orientation} className={className}>
      <LabelWrapper appearance={appearance} hideLabel={hideLabel} error={error}>
        <Label htmlFor={id} hideLabel={hideLabel}>
          {label}
        </Label>
        {error && (
          <ErrorMessage id={errorId} aria-hidden>
            {error}
          </ErrorMessage>
        )}
      </LabelWrapper>
      <TextareaWrapper error={error} appearance={appearance}>
        <TextareaText
          id={id}
          value={value}
          rows="7"
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          {...other}
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

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf(['default', 'secondary', 'tertiary', 'code']),
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  error: PropTypes.string,
  subtext: PropTypes.string,
  subtextSentiment: PropTypes.oneOf(['default', 'negative', 'warning']),
  className: PropTypes.string,
};

Textarea.defaultProps = {
  appearance: 'default',
  hideLabel: false,
  orientation: 'vertical',
  error: null,
  subtext: null,
  subtextSentiment: 'default',
  className: null,
};
