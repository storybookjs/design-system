import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
// import { Link as GatsbyLink } from 'gatsby';

import { Icon } from './Icon';
import { color } from './shared/styles';

const linkStyles = css`
  display: inline-block;
  transition: all 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};
  svg path {
    fill: ${color.secondary};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translate3d(0, -1px, 0);
    color: ${darken(0.07, color.secondary)};
    svg path {
      fill: ${darken(0.07, color.secondary)};
    }
  }
  &:active {
    transform: translate3d(0, 0, 0);
    color: ${darken(0.1, color.secondary)};
    svg path {
      fill: ${darken(0.1, color.secondary)};
    }
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${props =>
    props.secondary &&
    css`
      color: ${color.mediumdark};
      svg path {
        fill: ${color.mediumdark};
      }

      &:hover {
        color: ${color.dark};
        svg path {
          fill: ${color.dark};
        }
      }

      &:active {
        color: ${color.darker};
        svg path {
          fill: ${color.darker};
        }
      }
    `};

  ${props =>
    props.tertiary &&
    css`
      color: ${color.dark};
      svg path {
        fill: ${color.dark};
      }

      &:hover {
        color: ${color.darkest};
        svg path {
          fill: ${color.darkest};
        }
      }

      &:active {
        color: ${color.mediumdark};
        svg path {
          fill: ${color.mediumdark};
        }
      }
    `};

  ${props =>
    props.nochrome &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${props =>
    props.inverse &&
    css`
      color: ${color.lightest};
      svg path {
        fill: ${color.lightest};
      }

      &:hover {
        color: ${color.lighter};
        svg path {
          fill: ${color.lighter};
        }
      }

      &:active {
        color: ${color.light};
        svg path {
          fill: ${color.light};
        }
      }
    `};

  ${props =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span`
  ${props =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};

  ${props =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};
`;

const LinkWrapper = styled.a`
  ${linkStyles};
`;

// const LinkGatsby = styled(GatsbyLink)`
//   ${linkStyles};
// `;
const LinkButton = styled.button`
  ${linkStyles};
`;

export function Link({ isGatsby, isButton, withArrow, containsIcon, children, ...props }) {
  const content = (
    <Fragment>
      <LinkInner withArrow={withArrow} containsIcon={containsIcon}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </Fragment>
  );

  // if (isGatsby) {
  //   return <LinkGatsby {...props}>{content}</LinkGatsby>;
  // }
  if (isButton) {
    return <LinkButton {...props}>{content}</LinkButton>;
  }
  return <LinkWrapper {...props}>{content}</LinkWrapper>;
}

Link.propTypes = {
  isButton: PropTypes.bool,
  isGatsby: PropTypes.bool,
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  containsIcon: PropTypes.bool,
};

Link.defaultProps = {
  isButton: false,
  isGatsby: false,
  children: null,
  withArrow: false,
  containsIcon: false,
};
