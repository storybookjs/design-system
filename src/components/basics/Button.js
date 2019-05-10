import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { color, typography } from './shared/styles';
import { easing } from './shared/animation';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

// prettier-ignore
const ButtonWrapper = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${props => props.small ? '8px 16px' : '13px 20px'};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;


  font-size: ${props => props.small ? typography.size.s1 : typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  line-height: 1;

  ${props => !props.loading && css`
    &:hover {
      transform: translate3d(0,-2px,0);
      box-shadow: rgba(0,0,0,.2) 0 2px 6px 0;
    }

    &:active {
      transform: translate3d(0,0,0);
    }

    &:focus {
      box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
    }

    &:focus:hover {
      box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
    }
  `}

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${props => props.small ? '14' : '16'}px;
    width: ${props => props.small ? '14' : '16'}px;
    vertical-align: top;
    margin-right: ${props => props.small ? '4' : '6'}px;
    margin-top: ${props => props.small ? '-1' : '-2'}px;
    margin-bottom: ${props => props.small ? '-1' : '-2'}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${props => props.disabled && css`
    cursor: not-allowed !important;
		opacity: .5;
    &:hover {
      transform: none;
    }
	`}

  ${props => props.unclickable && css`
    cursor: default !important;
		pointer-events: none;
    &:hover {
      transform: none;
    }
	`}

  ${props => props.loading && css`
    cursor: progress !important;
    opacity: .7;

    ${Loading} {
      transition: transform 700ms ${easing.rubber};
      transform: translate3d(0, -50%,0);
      opacity: 1;
    }

    ${Text} {
      transform: scale3d(0,0,1) translate3d(0,-100%,0);
      opacity: 0;
    }

    &:hover {
      transform: none;
    }
	`}

  ${props => props.containsIcon && css`
    svg {
      display: block;
      margin: 0;
    }
    ${props.small && css`
  		padding: 7px;
  	`}

    ${!props.small && css`
  		padding: 12px;
  	`}
  `}

  ${props => props.primary && css`
    background: ${color.primary};
    color: ${color.lightest};
    svg path { fill: ${color.lightest}; }

    ${!props.loading && css`
      &:hover { background: ${darken(0.05, color.primary)};}
      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }
      &:focus { box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;}
    `}
	`}

  ${props => props.primary && props.active && css`
    background: transparent;
    box-shadow: ${color.primary} 0 0 0 1px inset;
    color: ${color.primary};
    svg path { fill: ${color.primary}; }

    ${!props.loading && css`
      &:hover {
        background: transparent;
        box-shadow: ${color.primary} 0 0 0 1px inset;
      }
      &:active {
        box-shadow: ${color.primary} 0 0 0 3em inset;
        color: ${color.lightest};
      }
      &:focus { box-shadow: ${color.primary} 0 0 0 3em inset, ${rgba(color.primary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.primary} 0 0 0 3em inset, ${rgba(color.primary, 0.2)} 0 8px 18px 0px;}
    `}

	`}

  ${props => props.secondary && css`
    background: ${color.secondary};
    color: ${color.lightest};
    svg path { fill: ${color.lightest}; }

    ${!props.loading && css`
      &:hover { background: ${darken(0.05, color.secondary)}; }
      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }
      &:focus { box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;}
    `}
	`}

  ${props => props.secondary && props.active && css`
    background: transparent;
    box-shadow: ${color.secondary} 0 0 0 1px inset;
    color: ${color.secondary};
    svg path { fill: ${color.secondary}; }

    ${!props.loading && css`
      &:hover {
        background: transparent;
        box-shadow: ${color.secondary} 0 0 0 1px inset;
      }
      &:active {
        box-shadow: ${color.secondary} 0 0 0 3em inset;
        color: ${color.lightest};
      }
      &:focus { box-shadow: ${color.secondary} 0 0 0 3em inset, ${rgba(color.secondary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.secondary} 0 0 0 3em inset, ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;}
    `}
	`}

  ${props => props.tertiary && css`
    background: ${color.tertiary};
    color: ${color.darkest};
    svg path { fill: ${color.darkest}; }

    ${!props.loading && css`
      &:hover { background: ${darken(0.05, color.secondary)}; }
      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }
      &:focus { box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;}
    `}
	`}

  ${props => props.tertiary && props.active && css`
    background: transparent;
    box-shadow: ${color.medium} 0 0 0 1px inset;
    color: ${color.darkest};
    svg path { fill: ${color.tertiary}; }

    ${!props.loading && css`
      &:hover {
        background: transparent;
        box-shadow: ${color.medium} 0 0 0 1px inset;
      }
      &:focus { box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.tertiary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.tertiary, 0.2)} 0 8px 18px 0px;}
    `}

	`}

  ${props => props.outline && css`
    box-shadow: ${color.medium} 0 0 0 1px inset;
		color: ${color.dark};
    background: transparent;

    svg path { fill: ${color.dark}; }

    ${!props.loading && css`
      &:hover { box-shadow: ${color.mediumdark} 0 0 0 1px inset; }

      &:active {
        background: ${color.medium};
        box-shadow: ${color.medium} 0 0 0 1px inset;
        color: ${color.darkest};
      }
      &:focus { box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.primary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.primary, 0.2)} 0 8px 18px 0px;}
    `};

    ${props.primary && css`
      box-shadow: ${color.primary} 0 0 0 1px inset;
  		color: ${color.primary};

      svg path { fill: ${color.primary}; }

      &:hover {
        box-shadow: ${color.primary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.primary};
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.lightest};
        svg path { fill: ${color.lightest}; }
      }
      &:focus { box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(color.primary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(color.primary, 0.2)} 0 8px 18px 0px;}
    `};

    ${props.secondary && css`
      box-shadow: ${color.secondary} 0 0 0 1px inset;
  		color: ${color.secondary};

      svg path { fill: ${color.secondary}; }

      &:hover {
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.secondary};
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.lightest};
        svg path { fill: ${color.lightest}; }
      }
      &:focus { box-shadow: ${color.secondary} 0 0 0 1px inset, ${rgba(color.secondary, 0.4)} 0 1px 9px 2px; }
      &:focus:hover { box-shadow: ${color.secondary} 0 0 0 1px inset, ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;}
    `};
	`}

  ${props => props.outline && props.active && css`
    background: ${color.medium};
    box-shadow: ${color.medium} 0 0 0 1px inset;
    color: ${color.darkest};

    svg path { fill: ${color.darkest}; }
	`}


`;

const ButtonLink = ButtonWrapper.withComponent('a');

function Button({ loading, loadingText, isLink, children, ...props }) {
  if (isLink) {
    return (
      <ButtonLink loading={loading} {...props}>
        <Text>{children}</Text>
        {loading && <Loading>{loadingText || 'Loading...'}</Loading>}
      </ButtonLink>
    );
  }
  return (
    <ButtonWrapper loading={loading} {...props}>
      <Text>{children}</Text>
      {loading && <Loading>{loadingText || 'Loading...'}</Loading>}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.node,
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  loading: false,
  loadingText: null,
  isLink: false,
};

export default Button;
