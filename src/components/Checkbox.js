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

const Input = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 0.4em 0 0;
  font-size: initial;
  opacity: 0;
  vertical-align: text-top;

  & + ${LabelText} {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      content: '';
      display: block;
    }

    &:before {
      border-radius: 4px;
    }

    &:after {
      border-radius: 3px;
    }
  }

  & + ${LabelText}:before {
    box-shadow: ${color.mediumdark} 0 0 0 1px inset;
  }

  &:focus + ${LabelText}:before {
    box-shadow: ${props => props.checkboxColor} 0 0 0 1px inset;
  }

  &:checked + ${LabelText}:before {
    box-shadow: ${props => props.checkboxColor} 0 0 0 1px inset;
  }

  &:checked:focus + ${LabelText}:before {
    box-shadow: ${props => props.checkboxColor} 0 0 0 1px inset,
      ${props => rgba(props.checkboxColor, 0.3)} 0 0 5px 2px;
  }

  & + ${LabelText}:after {
    transition: all 150ms ease-out;
    transform: scale3d(0, 0, 1);

    height: 10px;
    margin-left: 2px;
    margin-top: 2px;
    width: 10px;

    opacity: 0;
  }

  &:checked + ${LabelText}:after {
    transform: scale3d(1, 1, 1);
    background: ${props => props.checkboxColor};
    opacity: 1;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export function Checkbox({ appearance, id, label, error, hideLabel, ...props }) {
  const errorId = `${id}-error`;
  const checkboxColor = color[appearance];
  return (
    <CheckboxWrapper>
      <Label>
        <Input
          {...props}
          id={id}
          aria-describedby={errorId}
          aria-invalid={!!error}
          checkboxColor={checkboxColor}
          type="checkbox"
        />
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      <Error id={errorId} error={error}>
        {error}
      </Error>
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  appearance: 'primary',
  hideLabel: false,
  error: null,
};
