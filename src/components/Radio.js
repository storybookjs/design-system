import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { color, typography } from './shared/styles';

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  position: relative;
  height: 1em;
  display: flex;
  align-items: center;
`;

const OptionalText = styled.span`
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
  height: 1em;
  display: flex;
  align-items: center;
`;

const LabelText = styled.span``;

const Description = styled.div`
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};
  margin-top: 4px;
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'radio' })`
  margin: 0 0.6em 0 0;
  opacity: 0;

  & + ${LabelText} {
    &:before,
    &:after {
      transition: all 150ms ease-out;
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
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

export function Radio({ id, label, description, error, hideLabel, value, className, ...props }) {
  let errorId;
  let descriptionId;
  let ariaDescribedBy;

  if (error) {
    errorId = `${id}-error`;
    ariaDescribedBy = errorId;
  }
  if (description) {
    descriptionId = `${id}-description`;
    ariaDescribedBy = `${ariaDescribedBy} ${descriptionId}`;
  }

  return (
    <RadioWrapper>
      <Label className={className}>
        <Input
          {...props}
          id={id}
          aria-describedby={ariaDescribedBy}
          aria-invalid={!!error}
          type="radio"
          value={value}
        />
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      {error && <Error id={errorId}>{error}</Error>}
      {description && <Description id={descriptionId}>{description}</Description>}
    </RadioWrapper>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  description: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  value: '',
  label: null,
  hideLabel: false,
  description: null,
  error: null,
  className: null,
};
