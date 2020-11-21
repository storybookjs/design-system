// Our wrapper around react-popper that does common stuff.

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { typography, spacing } from '../shared/styles';

const ifPlacementEquals = (placement, value, fallback = 0) => (props) =>
  props['data-placement'].split('-')[0] === placement ? value : fallback;

const ArrowSpacing = 8;

const Arrow = styled.div`
  position: absolute;
  border-style: solid;
  /**
   * Rather than choosing whether or not to render this component in the
   * render function, the visibility is controlled here. The tooltip library
   * positions this strangely in some cases if we let the render function
   * handle this logic.
   */
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  margin-bottom: ${ifPlacementEquals('top', '0', ArrowSpacing)}px;
  margin-top: ${ifPlacementEquals('bottom', '0', ArrowSpacing)}px;
  margin-right: ${ifPlacementEquals('left', '0', ArrowSpacing)}px;
  margin-left: ${ifPlacementEquals('right', '0', ArrowSpacing)}px;

  bottom: ${ifPlacementEquals('top', ArrowSpacing * -1, 'auto')}px;
  top: ${ifPlacementEquals('bottom', ArrowSpacing * -1, 'auto')}px;
  right: ${ifPlacementEquals('left', ArrowSpacing * -1, 'auto')}px;
  left: ${ifPlacementEquals('right', ArrowSpacing * -1, 'auto')}px;

  border-bottom-width: ${ifPlacementEquals('top', '0', ArrowSpacing)}px;
  border-top-width: ${ifPlacementEquals('bottom', '0', ArrowSpacing)}px;
  border-right-width: ${ifPlacementEquals('left', '0', ArrowSpacing)}px;
  border-left-width: ${ifPlacementEquals('right', '0', ArrowSpacing)}px;

  border-top-color: ${ifPlacementEquals('top', 'white', 'transparent')};
  border-bottom-color: ${ifPlacementEquals('bottom', 'white', 'transparent')};
  border-left-color: ${ifPlacementEquals('left', 'white', 'transparent')};
  border-right-color: ${ifPlacementEquals('right', 'white', 'transparent')};
`;

const TooltipWrapper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  z-index: 2147483647;

  ${(props) =>
    !props.hasChrome &&
    css`
      margin-bottom: ${ifPlacementEquals('top', 8)}px;
      margin-bottom: ${ifPlacementEquals('top-start', 8)}px;
      margin-top: ${ifPlacementEquals('bottom', 8)}px;
      margin-top: ${ifPlacementEquals('bottom-start', 8)}px;
      margin-left: ${ifPlacementEquals('right', 8)}px;
      margin-right: ${ifPlacementEquals('left', 8)}px;
    `};

  ${(props) =>
    props.hasChrome &&
    css`
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

export function Tooltip({
  placement,
  hasChrome,
  children,
  arrowProps,
  tooltipRef,
  arrowRef,
  ...props
}) {
  return (
    <TooltipWrapper hasChrome={hasChrome} data-placement={placement} ref={tooltipRef} {...props}>
      <Arrow isVisible={hasChrome} data-placement={placement} ref={arrowRef} {...arrowProps} />
      {children}
    </TooltipWrapper>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  hasChrome: PropTypes.bool,
  /* eslint-disable-next-line */
  arrowProps: PropTypes.any,
  placement: PropTypes.string,
  arrowRef: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  tooltipRef: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};
Tooltip.defaultProps = {
  children: undefined,
  hasChrome: true,
  placement: 'top',
  arrowProps: null,
  arrowRef: undefined,
  tooltipRef: undefined,
};
