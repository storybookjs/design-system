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

const Description = styled.div`
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};
  margin-top: 4px;
  margin-left: calc(${typography.size.s2}px + 0.4em);
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'radio' })`
  margin: 0 0.4em 0 0;
  font-size: initial;
  opacity: 0;

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
      border-radius: 3em;
    }
  }

  & + ${LabelText}:before {
    box-shadow: ${color.mediumdark} 0 0 0 1px inset;
  }

  &:focus + ${LabelText}:before {
    box-shadow: ${props => props.radioColor} 0 0 0 1px inset;
  }

  &:checked + ${LabelText}:before {
    box-shadow: ${props => props.radioColor} 0 0 0 1px inset;
  }

  &:checked:focus + ${LabelText}:before {
    box-shadow: ${props => props.radioColor} 0 0 0 1px inset,
      ${props => rgba(props.radioColor, 0.3)} 0 0 5px 2px;
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
    background: ${props => props.radioColor};
    opacity: 1;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export function Radio({
  appearance,
  id,
  label,
  description,
  error,
  hideLabel,
  value,
  className,
  ...props
}) {
  const radioColor = color[appearance];
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
          radioColor={radioColor}
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
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  description: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

Radio.defaultProps = {
  appearance: 'primary',
  value: '',
  label: null,
  hideLabel: false,
  description: null,
  error: null,
  className: null,
};
