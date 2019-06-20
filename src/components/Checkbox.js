import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';

const Label = styled.label`
  cursor: pointer;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  min-height: 1em;
  position: relative;
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
  vertical-align: text-top;
  min-height: 1em;

  ${props =>
    !props.error &&
    css`
      margin: 0;
    `}
`;

const LabelText = styled.span``;

const Input = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 0.6em 0 0;
  opacity: 0;
  vertical-align: text-top;

  & + ${LabelText} {
    display: inline-block;
    vertical-align: text-top;
    line-height: 1.2;

    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 14px;
      width: 14px;
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

  &:checked + ${LabelText}:before {
    box-shadow: ${color.primary} 0 0 0 1px inset;
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
    background: ${color.primary};
    opacity: 1;
  }
`;

export function Checkbox({ id, label, error, hideLabel, ...props }) {
  const errorId = `${id}-error`;
  return (
    <React.Fragment>
      <Label>
        <Input
          {...props}
          id={id}
          aria-describedby={errorId}
          aria-invalid={!!error}
          type="checkbox"
        />
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      <Error id={errorId} error={error}>
        {error}
      </Error>
    </React.Fragment>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  hideLabel: false,
  error: null,
};
