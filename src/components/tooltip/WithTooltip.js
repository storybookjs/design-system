import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TooltipTrigger from 'react-popper-tooltip';

import { Tooltip } from './Tooltip';

// A target that doesn't speak popper
const TargetContainer = styled.div`
  display: inline-block;
  cursor: ${props => (props.mode === 'hover' ? 'default' : 'pointer')};
`;

const TargetSvgContainer = styled.g`
  cursor: ${props => (props.mode === 'hover' ? 'default' : 'pointer')};
`;

const isDescendantOfAction = element => {
  const { parentElement } = element;

  if (parentElement.tagName === 'BODY') {
    return false;
  }

  if (parentElement.tagName === 'A' || parentElement.tagName === 'BUTTON') {
    return true;
  }

  return isDescendantOfAction(parentElement);
};

function WithTooltip({
  svg,
  trigger,
  closeOnClick,
  placement,
  modifiers,
  hasChrome,
  tooltip,
  children,
  startOpen,
  ...props
}) {
  const Container = svg ? TargetSvgContainer : TargetContainer;
  const [isTooltipShown, setTooltipShown] = useState(startOpen);
  const toggleTooltipShown = () => setTooltipShown(!isTooltipShown);
  const closeTooltipOnClick = event => {
    if (!closeOnClick || !isDescendantOfAction(event.target)) {
      return;
    }

    setTooltipShown(false);
  };

  return (
    <TooltipTrigger
      placement={placement}
      trigger={trigger}
      tooltipShown={isTooltipShown}
      onVisibilityChange={toggleTooltipShown}
      modifiers={modifiers}
      tooltip={({
        getTooltipProps,
        getArrowProps,
        tooltipRef,
        arrowRef,
        placement: tooltipPlacement,
      }) => (
        <Tooltip
          hasChrome={hasChrome}
          placement={tooltipPlacement}
          tooltipRef={tooltipRef}
          arrowRef={arrowRef}
          arrowProps={getArrowProps()}
          onClick={closeTooltipOnClick}
          {...getTooltipProps()}
        >
          {typeof tooltip === 'function'
            ? tooltip({ onHide: () => setTooltipShown(false) })
            : tooltip}
        </Tooltip>
      )}
    >
      {({ getTriggerProps, triggerRef }) => (
        <Container ref={triggerRef} {...getTriggerProps()} {...props} onClick={toggleTooltipShown}>
          {children}
        </Container>
      )}
    </TooltipTrigger>
  );
}

WithTooltip.propTypes = {
  svg: PropTypes.bool,
  trigger: PropTypes.string,
  closeOnClick: PropTypes.bool,
  placement: PropTypes.string,
  modifiers: PropTypes.shape({}),
  hasChrome: PropTypes.bool,
  tooltip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
  startOpen: PropTypes.bool,
};

WithTooltip.defaultProps = {
  svg: false,
  trigger: 'hover',
  closeOnClick: false,
  placement: 'top',
  modifiers: {},
  hasChrome: true,
  startOpen: false,
};

export default WithTooltip;
