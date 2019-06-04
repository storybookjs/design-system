import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Icon } from './Icon';
import { color } from './shared/styles';

const linkStyles = css`
  display: inline-block;
  transition: all 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translate3d(0, -1px, 0);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translate3d(0, 0, 0);
    color: ${darken(0.1, color.secondary)};
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

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${props =>
    props.tertiary &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
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

      &:hover {
        color: ${color.lighter};
      }

      &:active {
        color: ${color.light};
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

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.button`
  ${linkStyles};
`;

export function Link({ isButton, withArrow, containsIcon, LinkWrapper, children, ...props }) {
  const content = (
    <Fragment>
      <LinkInner withArrow={withArrow} containsIcon={containsIcon}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </Fragment>
  );

  if (LinkWrapper) {
    const StyledLinkWrapper = LinkA.withComponent(LinkWrapper);
    return <StyledLinkWrapper {...props}>{content}</StyledLinkWrapper>;
  }
  if (isButton) {
    return <LinkButton {...props}>{content}</LinkButton>;
  }
  return <LinkA {...props}>{content}</LinkA>;
}

Link.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  containsIcon: PropTypes.bool,
  LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inverse: PropTypes.bool,
  nochrome: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false,
};
