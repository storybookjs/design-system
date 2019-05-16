import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { jiggle } from './shared/animation';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

const Label = styled.span`
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s2}px;
`;

const LabelWrapper = styled.div`
  margin-bottom: 0.5em;
`;

const Selector = styled.select`
  appearance: none;
  border: 0;
  border-radius: 0;
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  padding: 10px 3em 10px 1em;
  position: relative;
  outline: none;
  width: 100%;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${props =>
    props.inProgress &&
    css`
      cursor: progress;
    `}
`;

const OptionWrapper = styled.option``;

const Arrow = styled(Icon).attrs({ icon: 'arrowdown' })``;

const SelectIcon = styled(Icon)``;

const SelectSpinner = styled(Spinner)`
  right: 16px;
  left: auto;
  z-index: 1;
`;

const SelectWrapper = styled.span`
  display: inline-block;
  height: 40px;
  line-height: normal;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;

  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);

  &:hover {
    transform: translate3d(0,-1px,0);
  }

  &:active {
    transform: translate3d(0,0,0);
  }

  &:before {
    content: "";
	  bottom: 1px;
		right: 1px;
		top: 1px;
		width: 2em;
    margin-left: 1px;
		position: absolute;
		z-index: 1;
		pointer-events: none;
    border-radius: 4px;
	}

  ${Arrow} {
    position: absolute;
		z-index: 1;
		pointer-events: none;
    height: 12px;
    margin-top: -6px;
		right: 12px;
		top: 50%;

    path {fill: ${color.mediumdark} }
  }

  ${Selector}:focus { box-shadow: ${color.primary} 0 0 0 1px inset; }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  &:before { background-color: rgba(255,255,255,.9); }
	${Selector} {
    background-color: ${color.lightest};
    color: ${color.darkest};
  }

  ${props =>
    props.appearance === 'secondary' &&
    css`
      ${Selector} {
        box-shadow: ${color.mediumlight} 0 0 0 1px inset;
      }
    `}

  ${props =>
    props.appearance === 'tertiary' &&
    css`
      width: auto;
      height: auto;

      ${Selector} {
        color: ${color.dark};
        background-color: transparent;
        font-weight: ${typography.weight.bold};
        padding: 0 1.5em 0 0;
        text-decoration: none;

        &:focus {
          box-shadow: none !important;
        }
      }
      &:before {
        content: none;
      }
      ${Arrow} {
        right: 0;
      }
    `}

  ${props =>
    props.icon &&
    css`
    ${Selector} { padding-left: 2.5em; }

    ${Selector} + ${SelectIcon} {
      transition: all 150ms ease-out ;
      position: absolute;
      top: 50%;
      left: .8em;
			height: 1em;
      width: 1em;
			margin-top: -.5em;
			z-index: 1;

	    path { fill: ${color.mediumdark}; }
    }
    ${Selector}:focus + ${SelectIcon} path {
      fill: ${color.darker};
	  }
  `}

  ${props =>
    props.error &&
    css`
    ${Selector} {
      box-shadow: ${color.negative} 0 0 0 1px inset;
      &:focus { box-shadow: ${color.negative} 0 0 0 1px inset !important;  }
    }

    ${Selector} + ${SelectIcon} {
      animation: ${jiggle} 700ms ease-out;
      path { fill: ${color.negative}; }
    }

    &:before {
      transition: all 300ms cubic-bezier(0.175, 0.885, 0.335, 1.05);
			font-size: ${typography.size.s1}px;
      font-family: ${typography.type.primary};

      color: ${color.negative};
      content: attr(data-error);
      line-height: 38px;
      padding-right: 2.75em;

      width: auto;
      min-width: 2em;
    }
  `}
`;

function Option({ label, value }) {
  return <OptionWrapper value={value}>{label}</OptionWrapper>;
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export function Select({
  options,
  value,
  appearance,
  label,
  error,
  icon,
  className,
  inProgress,
  disabled,
  ...other
}) {
  return (
    <div className={className}>
      {label && (
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
      )}
      <SelectWrapper
        appearance={appearance}
        icon={icon}
        error={error}
        data-error={error}
        disabled={disabled}
      >
        {!inProgress && <Arrow />}
        <Selector
          value={value}
          {...other}
          disabled={disabled || inProgress}
          inProgress={inProgress}
        >
          {options.map(option => (
            <Option {...option} key={option.value} />
          ))}
        </Selector>
        {icon && <SelectIcon icon={icon} />}
        {inProgress && <SelectSpinner inForm />}
      </SelectWrapper>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(Option.propTypes)),
  value: PropTypes.string,
  appearance: PropTypes.oneOf(['default', 'secondary', 'tertiary']),
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  inProgress: PropTypes.bool,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  value: 'loading',
  options: [{ title: 'Loading', value: 'loading' }],
  appearance: 'default',
  label: null,
  error: null,
  icon: null,
  className: null,
  inProgress: false,
  disabled: false,
};
