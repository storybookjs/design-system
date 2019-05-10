import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography } from './shared/styles';

// prettier-ignore
const Label = styled.label`
  cursor: pointer;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  min-height: 1em;
	position: relative;
`;

// prettier-ignore
const Error = styled.span`
  font-weight: ${typography.weight.regular};
  color: ${color.negative};
  margin-left: 6px;
`;

const LabelText = styled.span``;

// prettier-ignore
const Input = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 .6em 0 0;
  visibility: hidden;

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

  & + ${LabelText}:before { box-shadow: ${color.mediumdark} 0 0 0 1px inset; }

  &:checked + ${LabelText}:before { box-shadow: ${color.primary} 0 0 0 1px inset; }

	& + ${LabelText}:after {
    transition: all 150ms ease-out;
    transform: scale3d(0,0,1);

    height: 10px;
    margin-left: 2px;
    margin-top: 2px;
    width: 10px;

    opacity: 0;
  }

	&:checked + ${LabelText}:after {
    transform: scale3d(1,1,1);
    background: ${color.primary};
    opacity: 1;
  }
`;

function Checkbox({ label, error, ...props }) {
  return (
    <Label>
      <Input {...props} type="checkbox" />
      <LabelText>
        {label}
        {error && <Error>{error}</Error>}
      </LabelText>
    </Label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
  error: null,
};

export default Checkbox;
