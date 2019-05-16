import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography } from './shared/styles';

const Label = styled.label`
  cursor: pointer;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  min-height: 1em;
  position: relative;
  display: block;
`;

const Error = styled.span`
  font-weight: ${typography.weight.regular};
  color: ${color.negative};
  margin-left: 6px;
`;

const LabelText = styled.div``;
const SublabelText = styled.div`
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.regular};
  margin-top: 4px;
  color: ${color.mediumdark};
`;

const Input = styled.input.attrs({ type: 'radio' })`
  float: left;
  margin: 0 0.6em 0 0;
  visibility: hidden;

  & + ${LabelText} {
    display: block;
    line-height: 1;
    overflow: hidden;

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

  &:checked + ${LabelText}:before {
    box-shadow: ${color.primary} 0 0 0 1px inset;
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

export function Radio({ value, label, sublabel, error, className, ...props }) {
  return (
    <Label className={className}>
      <Input value={value} {...props} type="radio" />

      <LabelText>
        {label}
        {error && <Error>{error}</Error>}
        {sublabel && <SublabelText>{sublabel}</SublabelText>}
      </LabelText>
    </Label>
  );
}

Radio.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  value: '',
  label: null,
  sublabel: null,
  error: null,
  className: null,
};
