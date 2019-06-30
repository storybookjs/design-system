import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TooltipTrigger from 'react-popper-tooltip';
import uuid from 'uuid';

import { Tooltip } from './Tooltip';

// A target that doesn't speak popper
const ButtonContainer = styled.button`
  background: transparent;
  border: 0;
  cursor: ${props => (props.mode === 'hover' ? 'default' : 'pointer')};
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
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
  const id = React.useMemo(() => uuid.v4(), []);
  const [isTooltipShown, setTooltipShown] = useState(startOpen);
  const toggleTooltipShown = () => setTooltipShown(!isTooltipShown);
  const closeTooltip = () => setTooltipShown(false);
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
          id={id}
          role="tooltip"
        >
          {typeof tooltip === 'function' ? tooltip({ onHide: closeTooltip }) : tooltip}
        </Tooltip>
      )}
    >
      {({ getTriggerProps, triggerRef }) => (
        <ButtonContainer
          ref={triggerRef}
          {...getTriggerProps()}
          {...props}
          onClick={toggleTooltipShown}
          role="button"
          aria-controls={id}
          aria-describedby={isTooltipShown ? id : undefined}
        >
          {children}
        </ButtonContainer>
      )}
    </TooltipTrigger>
  );
}

WithTooltip.propTypes = {
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
  trigger: 'hover',
  closeOnClick: false,
  placement: 'top',
  modifiers: {},
  hasChrome: true,
  startOpen: false,
};

export default WithTooltip;
