import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Icon } from './Icon';
import { color } from './shared/styles';

const LinkInner = styled.span`
  ${(props) =>
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
`;

const StyledLink = styled.a`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;
  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
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

  ${(props) =>
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

  ${(props) =>
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

  ${(props) =>
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

  ${(props) =>
    props.nochrome &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props) =>
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
`;

const UnstyledLink = styled.a``;

const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

// The main purpose of this component is to strip certain props that get passed
// down to the styled component, so that we don't end up passing them to an <a>
// tag which causes warnings to show up in the console.
function LinkComponentPicker({
  containsIcon,
  inverse,
  isButton,
  LinkWrapper,
  nochrome,
  secondary,
  tertiary,
  ...rest
}) {
  // Use the UnstyledLink here to avoid duplicating styles and creating
  // specificity conflicts by first rendering the StyledLink higher up the chain
  // and then re-rendering it through the 'as' prop.
  const LinkComponent = isButton ? LinkButton : LinkWrapper || UnstyledLink;
  return <LinkComponent {...rest} />;
}

const linkStyleProps = {
  containsIcon: PropTypes.bool,
  inverse: PropTypes.bool,
  isButton: PropTypes.bool,
  LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  nochrome: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

const linkStyleDefaultProps = {
  isButton: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false,
};

LinkComponentPicker.propTypes = {
  ...linkStyleProps,
};

LinkComponentPicker.defaultProps = {
  ...linkStyleDefaultProps,
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link({ children, withArrow, ...rest }) {
  const content = (
    <>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </>
  );

  return (
    <StyledLink as={LinkComponentPicker} {...rest}>
      {content}
    </StyledLink>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  ...linkStyleProps,
};

Link.defaultProps = {
  children: null,
  withArrow: false,
  ...linkStyleDefaultProps,
};
