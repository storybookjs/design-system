// Our wrapper around react-popper that does common stuff.

import React, { ComponentProps, FC } from 'react';
import { styled, css } from '@storybook/theming';
import { TooltipArg } from 'react-popper-tooltip';
import { typography, spacing, zIndex as sharedZIndex } from '../shared/styles';

const ifPlacementEquals = (
  props: Pick<ArrowProps, 'data-placement'>,
  placement: string,
  value: number | string,
  fallback: number | string = 0
) => (props['data-placement'].split('-')[0] === placement ? value : fallback);

const ArrowSpacing = 8;

type Placement = TooltipArg['placement'];

interface ArrowProps {
  'data-placement': Placement;
  isVisible: boolean;
}

interface WrapperProps {
  'data-placement': Placement;
  zIndex: number;
  hasChrome: boolean;
  hidden: boolean;
}

const Arrow = styled.div<ArrowProps>`
  position: absolute;
  border-style: solid;
  /**
   * Rather than choosing whether or not to render this component in the
   * render function, the visibility is controlled here. The tooltip library
   * positions this strangely in some cases if we let the render function
   * handle this logic.
   */
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  ${(props) => css`
    margin-bottom: ${ifPlacementEquals(props, 'top', 0, ArrowSpacing)}px;
    margin-top: ${ifPlacementEquals(props, 'bottom', 0, ArrowSpacing)}px;
    margin-right: ${ifPlacementEquals(props, 'left', 0, ArrowSpacing)}px;
    margin-left: ${ifPlacementEquals(props, 'right', 0, ArrowSpacing)}px;

    bottom: ${ifPlacementEquals(props, 'top', ArrowSpacing * -1, 'auto')}px;
    top: ${ifPlacementEquals(props, 'bottom', ArrowSpacing * -1, 'auto')}px;
    right: ${ifPlacementEquals(props, 'left', ArrowSpacing * -1, 'auto')}px;
    left: ${ifPlacementEquals(props, 'right', ArrowSpacing * -1, 'auto')}px;

    border-bottom-width: ${ifPlacementEquals(props, 'top', 0, ArrowSpacing)}px;
    border-top-width: ${ifPlacementEquals(props, 'bottom', 0, ArrowSpacing)}px;
    border-right-width: ${ifPlacementEquals(props, 'left', 0, ArrowSpacing)}px;
    border-left-width: ${ifPlacementEquals(props, 'right', 0, ArrowSpacing)}px;

    border-top-color: ${ifPlacementEquals(props, 'top', 'white', 'transparent')};
    border-bottom-color: ${ifPlacementEquals(props, 'bottom', 'white', 'transparent')};
    border-left-color: ${ifPlacementEquals(props, 'left', 'white', 'transparent')};
    border-right-color: ${ifPlacementEquals(props, 'right', 'white', 'transparent')};
  `}
`;

const TooltipWrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    !props.hasChrome &&
    `
      margin-bottom: ${ifPlacementEquals(props, 'top', 8)}px;
      margin-bottom: ${ifPlacementEquals(props, 'top-start', 8)}px;
      margin-top: ${ifPlacementEquals(props, 'bottom', 8)}px;
      margin-top: ${ifPlacementEquals(props, 'bottom-start', 8)}px;
      margin-left: ${ifPlacementEquals(props, 'right', 8)}px;
      margin-right: ${ifPlacementEquals(props, 'left', 8)}px;
    `};

  ${(props) =>
    props.hasChrome &&
    `
      margin-bottom: ${ifPlacementEquals(props, 'top', ArrowSpacing + 2)}px;
      margin-top: ${ifPlacementEquals(props, 'bottom', ArrowSpacing + 2)}px;
      margin-left: ${ifPlacementEquals(props, 'right', ArrowSpacing + 2)}px;
      margin-right: ${ifPlacementEquals(props, 'left', ArrowSpacing + 2)}px;

      background: rgba(255, 255, 255, 0.97);

      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.05)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));
      border-radius: ${spacing.borderRadius.small}px;
      font-size: ${typography.size.s1}px;
    `};
`;

export const Tooltip: FC<
  Props &
    Omit<ComponentProps<typeof TooltipWrapper>, keyof Props | 'data-placement' | 'ref' | 'zIndex'>
> = ({
  placement = 'top',
  hasChrome = true,
  children,
  arrowProps,
  tooltipRef,
  arrowRef,
  zIndex = sharedZIndex.tooltip,
  ...props
}) => {
  return (
    <TooltipWrapper
      hasChrome={hasChrome}
      data-placement={placement}
      ref={tooltipRef}
      zIndex={zIndex}
      {...props}
    >
      <Arrow isVisible={hasChrome} data-placement={placement} ref={arrowRef} {...arrowProps} />
      {children}
    </TooltipWrapper>
  );
};

interface Props {
  hasChrome?: boolean;
  arrowProps?: ComponentProps<typeof Arrow>;
  placement?: Placement;
  arrowRef?: any;
  tooltipRef?: any;
  zIndex?: number;
}
