import React, { useState, useMemo, FC, ReactNode, ComponentProps } from 'react';
import { styled } from '@storybook/theming';
import TooltipTrigger from 'react-popper-tooltip';
import uuid from 'uuid';

import { Tooltip } from './Tooltip';

// A target that doesn't speak popper
const ButtonContainer = styled.button<Pick<Props, 'trigger'>>`
  background: transparent;
  border: 0;
  cursor: ${(props) => (props.trigger === 'hover' ? 'default' : 'pointer')};
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
`;

const StyledTooltip = styled(Tooltip)<
  ComponentProps<typeof Tooltip> & { hasTooltipContent?: boolean }
>`
  ${(props) => !props.hasTooltipContent && `display: none;`}
`;

const isDescendantOfAction = (element: HTMLElement): boolean => {
  const { parentElement } = element;

  if (parentElement.tagName === 'BODY') {
    return false;
  }

  if (parentElement.tagName === 'A' || parentElement.tagName === 'BUTTON') {
    return true;
  }

  return isDescendantOfAction(parentElement);
};

const AsComponent = React.forwardRef<unknown, Pick<Props, 'tagName'> & Record<string, any>>(
  ({ tabIndex, tagName, onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const Component = tagName || ButtonContainer;
    const asProps = {
      ref,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus: onMouseEnter,
      onBlur: onMouseLeave,
      role: 'button',
      ...props,
    } as any;

    const onKeyDown = useMemo(
      () => (event: any) => {
        if (!onClick) {
          return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(event);
        }
      },
      [onClick]
    );

    // for non button component, we need to simulate the same behavior as a button
    if (tagName) {
      asProps.tabIndex = tabIndex || 0;
      asProps.onKeyDown = onKeyDown;
    }
    return <Component {...asProps} />;
  }
);
AsComponent.displayName = 'AsComponent';

const WithTooltip: FC<Props & ComponentProps<typeof AsComponent>> = ({
  children,
  closeOnClick = false,
  delayHide = 100,
  hasChrome = true,
  modifiers = {},
  onVisibilityChange = () => {},
  placement = 'top',
  portalContainer = undefined,
  startOpen = false,
  tagName = undefined,
  tooltip = undefined,
  tooltipZIndex = undefined,
  trigger = 'hover',
  ...props
}) => {
  const id = React.useMemo(() => uuid.v4(), []);
  const [isTooltipShown, setTooltipShown] = useState(startOpen);
  const closeTooltip = useMemo(() => () => setTooltipShown(false), [setTooltipShown]);
  const closeTooltipOnClick = useMemo(
    () => (event: any) => {
      if (!closeOnClick || !isDescendantOfAction(event.target)) {
        return;
      }
      closeTooltip();
    },
    [closeOnClick, closeTooltip]
  );
  const handleVisibilityChange = (isVisible: boolean) => {
    onVisibilityChange(isVisible);
    setTooltipShown(isVisible);
  };

  /* eslint-env browser */
  const defaultPortalContainer =
    typeof window !== 'undefined'
      ? document.getElementById('storybook-root') ||
        document.getElementById('root') ||
        document.body
      : undefined;

  return (
    <TooltipTrigger
      delayHide={delayHide}
      placement={placement}
      trigger={trigger}
      tooltipShown={isTooltipShown}
      onVisibilityChange={handleVisibilityChange}
      modifiers={modifiers}
      portalContainer={portalContainer || defaultPortalContainer}
      tooltip={({
        getTooltipProps,
        getArrowProps,
        tooltipRef,
        arrowRef,
        placement: tooltipPlacement,
      }) => (
        <StyledTooltip
          hidden={undefined}
          hasChrome={hasChrome}
          placement={tooltipPlacement}
          tooltipRef={tooltipRef}
          arrowRef={arrowRef}
          arrowProps={getArrowProps() as any}
          onClick={closeTooltipOnClick}
          {...getTooltipProps()}
          id={id}
          role="tooltip"
          hasTooltipContent={!!tooltip}
          zIndex={tooltipZIndex}
        >
          {typeof tooltip === 'function' ? tooltip({ onHide: closeTooltip }) : tooltip}
        </StyledTooltip>
      )}
    >
      {({ getTriggerProps, triggerRef }) => (
        <AsComponent
          tagName={tagName}
          trigger={trigger}
          ref={triggerRef}
          {...getTriggerProps()}
          {...props}
          aria-controls={id}
          aria-describedby={isTooltipShown ? id : undefined}
        >
          {children}
        </AsComponent>
      )}
    </TooltipTrigger>
  );
};

interface Props {
  tagName?: keyof JSX.IntrinsicElements;
  trigger?: ComponentProps<typeof TooltipTrigger>['trigger'];
  closeOnClick?: boolean;
  placement?: ComponentProps<typeof TooltipTrigger>['placement'];
  modifiers?: any;
  hasChrome?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  tooltip?: ReactNode | Function;
  children: ReactNode;
  startOpen?: boolean;
  delayHide?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onVisibilityChange?: Function;
  portalContainer?: ComponentProps<typeof TooltipTrigger>['portalContainer'];
  tooltipZIndex?: number;
}

export default WithTooltip;
