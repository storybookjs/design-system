import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { jiggle } from './shared/animation';
import Icon from './Icon';

// prettier-ignore
const Label = styled.span`
  font-weight: ${props => props.appearance !== 'code' && typography.weight.extrabold};
  font-family: ${props => props.appearance === 'code' && typography.type.code };
  font-size: ${props => props.appearance === 'code' ? typography.size.s1 : typography.size.s2 }px;
`;

// prettier-ignore
const LabelWrapper = styled.div`
  margin-bottom: 0.33em;
`;

// prettier-ignore
const InputText = styled.input.attrs({ type: 'text' })`
  ::placeholder {
    color: ${color.mediumdark};
    font-weight: ${typography.weight.bold};
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

// prettier-ignore
const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${InputText} {
    background: ${color.lightest};
    border-radius: 0;
    color: ${color.darkest};
    font-family: ${props => props.appearance === 'code' && typography.type.code };
    font-size: ${props => props.appearance === 'code' ? typography.size.s1 : typography.size.s2 }px;
    line-height: 20px;
    padding: .715em 1em; //40

    &:focus { box-shadow: ${color.primary} 0 0 0 1px inset; }

    ${props => props.appearance === 'secondary' && css`
      box-shadow: ${color.mediumlight} 0 0 0 1px inset;

      &:focus { box-shadow: ${color.secondary} 0 0 0 1px inset; }
    `}

    ${props => props.appearance === 'tertiary' && css`
      padding: 0;
      border: none;
      box-shadow: none;
      background: none;

      &:focus { box-shadow: none !important; }
    `}

    ${props => props.appearance === 'pill' && css`
      font-size: ${typography.size.s1}px;
      line-height: 16px;
      padding: .5em 1em; //28
      border-radius: 3em;
      background: transparent;

      box-shadow: ${color.medium} 0 0 0 1px inset;

      &:focus { box-shadow: ${color.primary} 0 0 0 1px inset; }
    `}

    ${props => props.appearance === 'code' && css`
      font-size: ${typography.size.s2 -1 }px;
      line-height: 16px;
      font-family: ${typography.type.code};
      border-radius: 2px;
      background: rgba(0,0,0,.05);
      padding: 3px 6px;
    `}
  }

  &:before {
    position: absolute;
    top: 50%;
    right: 1px;
    margin-left: 1px;
    transform: translate3d(100%, -50%, 0);
    transition: all 200ms ease-out;
    font-family: ${props => props.appearance === 'code' ? typography.type.code : typography.type.primary } ;
    font-size: ${typography.size.s1}px;
    content: attr(data-error);
    line-height: 1em;
    opacity: 0;
    padding: .25em 1.25em .25em .5em;
    pointer-events: none;
    z-index: 1;

    background: ${props =>
      props.appearance !== 'tertiary' &&
       'rgba(255,255,255,.9)' };
    color: ${color.negative};

    ${props => props.appearance === 'tertiary' && css` right: 0; `}
    ${props => props.appearance === 'code' && css`
      top: -4px;
      right: auto;
      left: 0;
      border-radius: 4px;
      padding: 6px;
    `}
  }

  ${props => props.icon && css`
    > svg {
      transition: all 150ms ease-out;
      position: absolute;
      top: 50%;
      height: 1em;
      width: 1em;
  		font-size: ${props.appearance === 'pill' ? 0.75 : 1 }em;
  		margin-top: -.5em;
  		z-index: 1;

      background: transparent;

      path {
        transition: all 150ms ease-out;
        fill: ${color.mediumdark};
      }
    }

    ${InputText}:focus + svg path {
      fill: ${color.darker};
    }

    ${InputText} {
      padding-left: 2.75em;

      ${props.appearance === 'pill' && css` padding-left: 2.4em; `};
      ${props.appearance === 'tertiary' && css` padding-left: 1.75em; `};
    }
    > svg { left: ${props.appearance === 'tertiary' ? 0 : 0.8 }em; }

  `}

  ${props => props.error && css`
    &:before {
      color: ${color.negative};
      transform: translate3d(0%, -50%, 0);
      opacity: 1;
    }

    &:hover:before {
      opacity: 0;
      transform: translate3d(100%, -50%, 0);
    }

    ${props.focused && css`
      &:before {
        opacity: 0;
        transform: translate3d(100%, -50%, 0);
      }
    `}

    ${props.appearance === 'code' && css`
      &:before {
        opacity: 0;
      }
      &:hover:before {
        transform: translate3d(0%, -100%, 0);
        opacity: 1;
      }
    `}

    ${props.appearance !== 'tertiary' && css`
      ${InputText} {
          box-shadow: ${color.negative} 0 0 0 1px inset;
          &:focus { box-shadow: ${color.negative} 0 0 0 1px inset !important;  }
      }
    `};

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

function Input({
  value,
  label,
  orientation,
  icon,
  error,
  appearance,
  className,
  focused,
  lastErrorValue,
  ...props
}) {
  let errorMessage = error;
  if (lastErrorValue) {
    if (value !== lastErrorValue) {
      errorMessage = null;
    }
  }
  return (
    <InputContainer orientation={orientation} className={className}>
      {label && (
        <LabelWrapper>
          <Label appearance={appearance}>{label}</Label>
        </LabelWrapper>
      )}
      <InputWrapper
        error={errorMessage}
        data-error={error}
        icon={icon}
        appearance={appearance}
        focused={focused}
      >
        <InputText value={value} {...props} />
        {icon && <Icon icon={icon} />}
      </InputWrapper>
    </InputContainer>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  appearance: PropTypes.oneOf(['default', 'secondary', 'tertiary', 'pill', 'code']),
  label: PropTypes.string,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  icon: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  focused: PropTypes.bool,
  lastErrorValue: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  appearance: 'default',
  label: null,
  orientation: 'vertical',
  icon: null,
  error: null,
  className: null,
  focused: false,
  lastErrorValue: null,
};

export default Input;
