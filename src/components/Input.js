import React, { useEffect, useCallback, useRef, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography, spacing } from './shared/styles';
import { jiggle } from './shared/animation';
import { Icon } from './Icon';
import { Link } from './Link';
import WithTooltip, { validPlacements as validTooltipPlacements } from './tooltip/WithTooltip';
import { TooltipMessage } from './tooltip/TooltipMessage';

// prettier-ignore
const Label = styled.label`
  font-weight: ${props => props.appearance !== 'code' && typography.weight.bold};
  font-family: ${props => props.appearance === 'code' && typography.type.code };
  font-size: ${props => props.appearance === 'code' ? typography.size.s1 - 1 : typography.size.s2 }px;
  line-height: ${props => props.appearance === 'code' ? 16 : 20 }px;
`;

// prettier-ignore
const LabelWrapper = styled.div`
  margin-bottom: 8px;
  
  ${props => props.hideLabel && css`
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

// prettier-ignore
const InputEl = styled.input`
  ::placeholder {
    color: ${color.mediumdark};
  }
  appearance: none;
  border:none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  margin: 0;

  &[disabled] {
    cursor: not-allowed;
    opacity: .5;
  }

  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ${color.lightest} inset; }
`;

const getStackLevelStyling = (props) => {
  const radius = 4;
  const stackLevelDefinedStyling = css`
    position: relative;
    ${props.error && `z-index: 1;`}

    &:focus {
      z-index: 2;
    }
  `;
  switch (props.stackLevel) {
    case 'top':
      return css`
        border-top-left-radius: ${radius}px;
        border-top-right-radius: ${radius}px;
        ${stackLevelDefinedStyling}
      `;
    case 'middle':
      return css`
        border-radius: 0px;
        margin-top: -1px;
        ${stackLevelDefinedStyling}
      `;
    case 'bottom':
      return css`
        border-bottom-left-radius: ${radius}px;
        border-bottom-right-radius: ${radius}px;
        margin-top: -1px;
        ${stackLevelDefinedStyling}
      `;
    default:
      return css`
        border-radius: ${radius}px;
      `;
  }
};

// prettier-ignore
const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${InputEl} {
    position: relative;
    ${props => getStackLevelStyling(props)}

    background: ${color.lightest};
    color: ${color.darkest};
    font-size: ${typography.size.s2}px;
    line-height: 20px;
    padding: 10px 15px; //40px tall
    box-shadow: ${color.border} 0 0 0 1px inset;
    &:focus { box-shadow: ${color.secondary} 0 0 0 1px inset; }


    ${props => props.appearance === 'pill' && css`
      font-size: ${typography.size.s1}px;
      line-height: 16px;
      padding: 6px 12px; //28px tall
      border-radius: 3em;
      background: transparent;
    `}

    ${props => props.appearance === 'code' && css`
      font-size: ${typography.size.s1 - 1}px;
      line-height: 16px;
      font-family: ${typography.type.code};
      border-radius: ${spacing.borderRadius.small}px;
      background: ${color.lightest};
      padding: 8px 10px;
    `}
  }

  ${props => props.startingType === 'password' && css`
    ${InputEl} {
      padding-right: 52px;
    }
  `}

  ${props => props.icon && css`
    > svg {
      transition: all 150ms ease-out;
      position: absolute;
      top: 50%;
      ${props.appearance === 'pill' || props.appearance === 'code' ? css`
        font-size: ${typography.size.s1}px;
      ` : css `
        font-size: ${typography.size.s2}px;
      `}
      height: 1em;
      width: 1em;
      margin-top: -.525em;
      z-index: 3;
      ${props.appearance === 'pill' || props.appearance === 'code' ? css`
        left: 10px;
      ` : css `
        left: ${props.appearance === 'tertiary' ? 0 : `15px` };
      `}

      background: transparent;

      path {
        transition: all 150ms ease-out;
        fill: ${color.mediumdark};
      }
    }

    ${InputEl}:focus + svg path {
      fill: ${color.darker};
    }

    ${InputEl} {
      padding-left: 40px;

      ${(props.appearance === 'pill' || props.appearance === 'code') && css` padding-left: 30px; `};      
    }
  `}

  ${props => props.error && css`
    ${InputEl} {
        box-shadow: ${color.negative} 0 0 0 1px inset;
        &:focus { box-shadow: ${color.negative} 0 0 0 1px inset !important;  }
    }

    svg {
      animation: ${jiggle} 700ms ease-out;
      path { fill: ${color.negative}; }
    }
  `}
`;
// prettier-ignore
const InputContainer = styled.div`
  ${props => props.orientation === 'horizontal' && css`
    display: table-row;

    ${LabelWrapper}, ${InputWrapper} {
      display: table-cell;
    }

    ${LabelWrapper} {
      width: 1px;
      padding-right: 20px;
      vertical-align: middle;
    }

    ${InputWrapper} {
      width: auto;
    }

  `}
`;

const ErrorTooltip = styled(WithTooltip)`
  width: 100%;
`;

const ErrorTooltipMessage = styled(TooltipMessage)`
  width: 170px;
`;

const Action = styled.div`
  position: absolute;
  right: 0;
  min-width: 45px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 11px;
  z-index: 2;
`;

const getErrorMessage = ({ error, value, lastErrorValue }) => {
  let errorMessage = typeof error === 'function' ? error(value) : error;
  if (lastErrorValue) {
    if (value !== lastErrorValue) {
      errorMessage = null;
    }
  }
  return errorMessage;
};

export const PureInput = forwardRef(
  (
    {
      id,
      value,
      label,
      hideLabel,
      orientation,
      icon,
      error,
      appearance,
      errorTooltipPlacement,
      className,
      lastErrorValue,
      startingType,
      type,
      onActionClick,
      stackLevel,
      suppressErrorMessage,
      ...props
    },
    ref
  ) => {
    const [errorMessage, setErrorMessage] = useState(
      getErrorMessage({ error, value, lastErrorValue })
    );
    const errorId = `${id}-error`;

    useEffect(() => {
      setErrorMessage(getErrorMessage({ error, value, lastErrorValue }));
    }, [value, error, lastErrorValue]);

    const inputEl = (
      <InputEl
        id={id}
        // Pass the ref to the actual input element so it can be controlled
        // externally.
        ref={ref}
        value={value}
        type={type}
        aria-describedby={errorId}
        aria-invalid={!!error}
        {...props}
      />
    );

    return (
      <InputContainer orientation={orientation} className={className}>
        <LabelWrapper hideLabel={hideLabel}>
          <Label htmlFor={id} appearance={appearance}>
            {label}
          </Label>
        </LabelWrapper>

        <InputWrapper
          error={errorMessage}
          data-error={errorMessage}
          icon={icon}
          appearance={appearance}
          stackLevel={stackLevel}
          startingType={startingType}
        >
          {icon && <Icon icon={icon} aria-hidden />}
          {/**
            The tooltip is rendered regardless of the presence of an error.
            This is done to preserve the focus state of the Input when it is
            used inside of a form that can choose when to show/hide error
            states based on various factors.
          */}
          <ErrorTooltip
            tabIndex={-1}
            placement={errorTooltipPlacement}
            trigger="none"
            startOpen
            tagName="div"
            hasChrome={!!errorMessage && !suppressErrorMessage}
            tooltip={
              errorMessage && !suppressErrorMessage && <ErrorTooltipMessage desc={errorMessage} />
            }
          >
            {inputEl}
          </ErrorTooltip>

          {startingType === 'password' && (
            <Action>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link isButton tertiary onClick={onActionClick} type="button">
                {type === 'password' ? 'Show' : 'Hide'}
              </Link>
            </Action>
          )}
        </InputWrapper>
      </InputContainer>
    );
  }
);

PureInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  appearance: PropTypes.oneOf(['default', 'pill', 'code']),
  errorTooltipPlacement: PropTypes.oneOf(validTooltipPlacements),
  stackLevel: PropTypes.oneOf(['top', 'middle', 'bottom']),
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  icon: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  suppressErrorMessage: PropTypes.bool,
  className: PropTypes.string,
  lastErrorValue: PropTypes.string,
  startingType: PropTypes.string,
  type: PropTypes.string,
  onActionClick: PropTypes.func,
};

PureInput.defaultProps = {
  value: '',
  appearance: 'default',
  errorTooltipPlacement: 'right',
  stackLevel: undefined,
  hideLabel: false,
  orientation: 'vertical',
  icon: null,
  error: null,
  suppressErrorMessage: false,
  className: null,
  lastErrorValue: null,
  startingType: 'text',
  type: 'text',
  onActionClick: null,
};

export const Input = forwardRef(({ type: startingType, startFocused, ...rest }, ref) => {
  const [type, setType] = useState(startingType);
  const togglePasswordType = useCallback(
    (event) => {
      // Make sure this does not submit a form
      event.preventDefault();
      event.stopPropagation();
      if (type === 'password') {
        setType('text');
        return;
      }
      setType('password');
    },
    [type, setType]
  );
  // Outside refs take precedence
  const inputRef = ref || useRef();
  const didFocusOnStart = useRef(false);
  useEffect(() => {
    if (inputRef && inputRef.current && startFocused && !didFocusOnStart.current) {
      inputRef.current.focus();
      didFocusOnStart.current = true;
    }
  }, [inputRef, inputRef.current, didFocusOnStart, didFocusOnStart.current]);

  return (
    <PureInput
      ref={inputRef}
      startingType={startingType}
      type={type}
      onActionClick={togglePasswordType}
      {...rest}
    />
  );
});

Input.propTypes = {
  startFocused: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  startFocused: false,
  type: 'text',
};
