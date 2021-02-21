import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Icon } from './Icon';
import { color } from './shared/styles';

const LinkInner = styled.span<{ withArrow: boolean }>`
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

interface StyledLinkProps {
  containsIcon?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  nochrome?: boolean;
  inverse?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
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

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export type LinkProps = React.ComponentProps<typeof StyledLink> & {
  withArrow?: boolean;
  isButton?: boolean;
  LinkWrapper?: React.ComponentType<any>;
};

// The main purpose of this component is to strip certain props that get passed
// down to the styled component, so that we don't end up passing them to a
// tag which would throw warnings for non-standard props.
const LinkComponentPicker = forwardRef(
  (
    {
      containsIcon,
      inverse,
      isButton,
      LinkWrapper,
      nochrome,
      secondary,
      tertiary,
      ...rest
    }: LinkProps,
    ref
  ) => {
    // Use the UnstyledLink here to avoid duplicating styles and creating
    // specificity conflicts by first rendering the StyledLink higher up the chain
    // and then re-rendering it through the 'as' prop.
    /* eslint no-else-return: ["error", { allowElseIf: true }] */
    if (isButton) {
      return <LinkButton {...rest} ref={ref} />;
    } else if (LinkWrapper) {
      return <LinkWrapper {...rest} ref={ref} />;
    }

    return <UnstyledLink {...rest} ref={ref} />;
  }
);

export const Link = forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>(
  ({ children, withArrow, ...rest }, ref) => {
    const content = (
      <>
        <LinkInner withArrow={withArrow}>
          {children}
          {withArrow && <Icon icon="arrowright" />}
        </LinkInner>
      </>
    );

    return (
      <StyledLink as={LinkComponentPicker} ref={ref} {...rest}>
        {content}
      </StyledLink>
    );
  }
);

Link.defaultProps = {
  withArrow: false,
  isButton: false,
  containsIcon: false,
  secondary: false,
  tertiary: false,
  nochrome: false,
  inverse: false,
};
