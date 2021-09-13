// Our wrapper around react-popper that does common stuff.

import React, { ComponentProps, FC } from 'react';
import { styled, css } from '@storybook/theming';
import { TooltipArg } from 'react-popper-tooltip';
import { typography, spacing, zIndex as sharedZIndex } from '../shared/styles';

const ifPlacementEquals =
  (placement: string, value: number | string, fallback: number | string = 0) =>
  (props: Pick<ArrowProps, 'data-placement'>) =>
    props['data-placement'].split('-')[0] === placement ? value : fallback;

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

  margin-bottom: ${ifPlacementEquals('top', 0, ArrowSpacing)}px;
  margin-top: ${ifPlacementEquals('bottom', 0, ArrowSpacing)}px;
  margin-right: ${ifPlacementEquals('left', 0, ArrowSpacing)}px;
  margin-left: ${ifPlacementEquals('right', 0, ArrowSpacing)}px;

  bottom: ${ifPlacementEquals('top', ArrowSpacing * -1, 'auto')}px;
  top: ${ifPlacementEquals('bottom', ArrowSpacing * -1, 'auto')}px;
  right: ${ifPlacementEquals('left', ArrowSpacing * -1, 'auto')}px;
  left: ${ifPlacementEquals('right', ArrowSpacing * -1, 'auto')}px;

  border-bottom-width: ${ifPlacementEquals('top', 0, ArrowSpacing)}px;
  border-top-width: ${ifPlacementEquals('bottom', 0, ArrowSpacing)}px;
  border-right-width: ${ifPlacementEquals('left', 0, ArrowSpacing)}px;
  border-left-width: ${ifPlacementEquals('right', 0, ArrowSpacing)}px;

  border-top-color: ${ifPlacementEquals('top', 'white', 'transparent')};
  border-bottom-color: ${ifPlacementEquals('bottom', 'white', 'transparent')};
  border-left-color: ${ifPlacementEquals('left', 'white', 'transparent')};
  border-right-color: ${ifPlacementEquals('right', 'white', 'transparent')};
`;

const TooltipWrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    !props.hasChrome &&
    `
      margin-bottom: ${ifPlacementEquals('top', 8)}px;
      margin-bottom: ${ifPlacementEquals('top-start', 8)}px;
      margin-top: ${ifPlacementEquals('bottom', 8)}px;
      margin-top: ${ifPlacementEquals('bottom-start', 8)}px;
      margin-left: ${ifPlacementEquals('right', 8)}px;
      margin-right: ${ifPlacementEquals('left', 8)}px;
    `};

  ${(props) =>
    props.hasChrome &&
    `
      margin-bottom: ${ifPlacementEquals('top', ArrowSpacing + 2)}px;
      margin-top: ${ifPlacementEquals('bottom', ArrowSpacing + 2)}px;
      margin-left: ${ifPlacementEquals('right', ArrowSpacing + 2)}px;
      margin-right: ${ifPlacementEquals('left', ArrowSpacing + 2)}px;

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
