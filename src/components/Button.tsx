import React, { ComponentProps, forwardRef, ReactElement } from 'react';
import styled from 'styled-components';
import { darken, opacify } from 'polished';
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

enum APPEARANCES {
  PRIMARY = 'primary',
  PRIMARY_OUTLINE = 'primaryOutline',
  SECONDARY = 'secondary',
  SECONDARY_OUTLINE = 'secondaryOutline',
  TERTIARY = 'tertiary',
  OUTLINE = 'outline',
  INVERSE_PRIMARY = 'inversePrimary',
  INVERSE_SECONDARY = 'inverseSecondary',
  INVERSE_OUTLINE = 'inverseOutline',
}

enum SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
}

interface StylingProps {
  size: SIZES;
  isLoading: boolean;
  isUnclickable: boolean;
  containsIcon: boolean;
  appearance: APPEARANCES;
}

export const StyledButton = styled.button<StylingProps & { children: ReactElement }>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-size: ${(props) => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  ${(props) =>
    !props.isLoading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
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
    height: ${(props) => (props.size === SIZES.SMALL ? '14' : '16')}px;
    width: ${(props) => (props.size === SIZES.SMALL ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${(props) => (props.size === SIZES.SMALL ? '4' : '6')}px;
    margin-top: ${(props) => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    margin-bottom: ${(props) => (props.size === SIZES.SMALL ? '-1' : '-2')}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
    `}

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.primary};
      color: ${color.lightest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
      background: ${color.secondary};
      color: ${color.lightest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.TERTIARY &&
    `
      background: ${color.tertiary};
      color: ${color.darkest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.OUTLINE &&
    `
      box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;

      ${
        !props.isLoading &&
        `
          &:hover {
            box-shadow: ${opacify(0.3, color.border)} 0 0 0 1px inset;
          }

          &:active {
            background: ${opacify(0.05, color.border)};
            box-shadow: transparent 0 0 0 1px inset;
            color: ${color.darkest};
          }

          &:active:focus:hover {
            ${/* This prevents the semi-transparent border from appearing atop the background */ ''}
            background: ${opacify(0.05, color.border)};
            box-shadow: transparent 0 0 0 1px inset;
          }
        `
      };
    `};

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    `
      box-shadow: ${color.primary} 0 0 0 1px inset;
      color: ${color.primary};

      &:hover {
        box-shadow: ${color.primary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.primary};
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.lightest};
      }
    `};

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
    `
      box-shadow: ${color.secondary} 0 0 0 1px inset;
      color: ${color.secondary};

      &:hover {
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.secondary};
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.lightest};
      }
    `};

    ${(props) =>
      props.appearance === APPEARANCES.INVERSE_PRIMARY &&
      `
        background: ${color.lightest};
        color: ${color.primary};

        ${
          !props.isLoading &&
          `
            &:hover {
              background: ${color.lightest};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
        `
        }
    `}

    ${(props) =>
      props.appearance === APPEARANCES.INVERSE_SECONDARY &&
      `
        background: ${color.lightest};
        color: ${color.secondary};

        ${
          !props.isLoading &&
          `
            &:hover {
              background: ${color.lightest};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
        `
        }
    `}

    ${(props) =>
      props.appearance === APPEARANCES.INVERSE_OUTLINE &&
      `
        box-shadow: ${color.lightest} 0 0 0 1px inset;
        color: ${color.lightest};

        &:hover {
          box-shadow: ${color.lightest} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.lightest};
          box-shadow: ${color.lightest} 0 0 0 1px inset;
          color: ${color.darkest};
        }
    `};
`;

const UnstyledButton = styled.button``;
const ButtonLink = styled.a``;

// The main purpose of this component is to strip certain props that get passed
// down to the styled component, so that we don't end up passing them to a
// tag which would throw warnings for non-standard props.
const ButtonComponentPicker = forwardRef<
  ReactElement<HTMLButtonElement | HTMLAnchorElement>,
  ConfigProps & StylingProps
>(
  (
    {
      appearance,
      ButtonWrapper = null,
      containsIcon,
      isLink = false,
      isLoading,
      isUnclickable,
      size,
      ...rest
    },
    ref
  ) => {
    // Use the UnstyledButton here to avoid duplicating styles and creating
    // specificity conflicts by first rendering the StyledLink higher up the chain
    // and then re-rendering it through the 'as' prop.
    if (isLink) {
      return <ButtonLink {...rest} />;
    }
    if (ButtonWrapper) {
      return <ButtonWrapper {...rest} />;
    }
    return <UnstyledButton {...rest} />;
  }
);

interface ConfigProps {
  isLink: boolean;
  ButtonWrapper: ComponentProps<typeof StyledButton>['as'];
  isDisabled: boolean;
  isLoading: boolean;
  loadingText: ReactElement;
}

export const Button = forwardRef<
  ReactElement<HTMLButtonElement | HTMLAnchorElement>,
  ConfigProps & StylingProps
>(({ children, isDisabled = false, isLoading, loadingText = null, ...rest }, ref) => {
  return (
    <StyledButton
      as={ButtonComponentPicker}
      // @ts-ignore
      disabled={isDisabled}
      isLoading={isLoading}
      {...rest}
      ref={ref}
    >
      <>
        <Text>{children}</Text>
        {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
      </>
    </StyledButton>
  );
});
