import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { color, typography } from './shared/styles';

const Label = styled.label`
  cursor: pointer;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  position: relative;
  display: inline-block;
  height: 1em;
`;

const OptionalText = styled.span`
  display: inline-block;
  line-height: 1em;
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

const Error = styled.span`
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  color: ${color.negative};
  margin-left: 6px;
  vertical-align: text-top;
  height: 1em;
  display: inline-block;

  ${props =>
    !props.error &&
    css`
      margin: 0;
    `}
`;

const LabelText = styled.span``;

const SubLabelText = styled.div`
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};
`;

const Input = styled.input.attrs({ type: 'radio' })`
  margin: 0 0.6em 0 0;
  opacity: 0;
  vertical-align: text-top;

  & + ${LabelText} {
    display: inline-block;
    vertical-align: text-top;
    line-height: 1.2;

    &:before,
    &:after {
      transition: all 150ms ease-out;
      position: absolute;
      top: 0;
      left: 0;
      height: 14px;
      width: 14px;
      content: '';
      display: block;
      border-radius: 3em;
    }
  }

  & + ${LabelText}:before {
    box-shadow: ${color.mediumdark} 0 0 0 1px inset;
  }

  &:focus + ${LabelText}:before {
    box-shadow: ${color.primary} 0 0 0 1px inset;
  }

  &:checked + ${LabelText}:before {
    box-shadow: ${color.primary} 0 0 0 1px inset;
  }

  &:checked:focus + ${LabelText}:before {
    box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(color.primary, 0.3)} 0 0 5px 2px;
  }

  & + ${LabelText}:after {
    transform: scale3d(0, 0, 1);

    height: 10px;
    margin-left: 2px;
    margin-top: 2px;
    width: 10px;

    opacity: 0;
  }

  &:checked + ${LabelText}:after {
    transform: scale3d(1, 1, 1);
    background: ${color.primary};
    opacity: 1;
  }
`;

export function Radio({ id, label, subLabel, error, hideLabel, value, className, ...props }) {
  const errorId = `${id}-error`;
  const subLabelId = `${id}-subLabel`;
  return (
    <div>
      <Label className={className}>
        <Input
          {...props}
          id={id}
          aria-describedby={errorId}
          aria-invalid={!!error}
          type="radio"
          value={value}
        />
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      <Error id={errorId} error={error}>
        {error}
      </Error>
      <SubLabelText id={subLabelId}>{subLabel}</SubLabelText>
    </div>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  subLabel: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  value: '',
  label: null,
  hideLabel: false,
  subLabel: null,
  error: null,
  className: null,
};
