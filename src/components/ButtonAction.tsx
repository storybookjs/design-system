import React from 'react';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';
import { typography, color } from './shared/styles';
import { Icon, IconType } from './Icon';
import { TooltipNote } from './tooltip/TooltipNote';
import WithTooltip from './tooltip/WithTooltip';

interface ButtonActionProps {
  icon: IconType;
  children?: string;
  isActive?: boolean;
  isSelect?: boolean;
  tooltip?: string;
}

interface ButtonStylingProps {
  isActive?: boolean;
  isSelect?: boolean;
}

const StyledButton = styled.button<ButtonStylingProps>`
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  overflow: hidden;
  padding: 7px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background-color: transparent;
  font-size: ${typography.size.s2}px;
  line-height: 14px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};

  ${(props) =>
    props.isActive &&
    `
      background-color: ${transparentize(0.93, color.secondary)};
      color: ${color.secondary};
    `}

  &:hover {
    color: ${color.secondary};
    background-color: ${transparentize(0.86, color.secondary)};
  }
`;

const Chevron = (
  <svg viewBox="0 0 8 8" width="8px" height="8px">
    <path
      fill="#73828C"
      d="M.85 1.9a.5.5 0 1 0-.7.7l3.5 3.5c.2.2.5.2.7 0l3.5-3.5a.5.5 0 1 0-.7-.7L4 5.04.85 1.9Z"
    />
  </svg>
);

export const ButtonAction = ({
  children,
  icon,
  isActive = false,
  isSelect = false,
  tooltip,
  ...rest
}: ButtonActionProps) => {
  if (tooltip)
    return (
      <WithTooltip
        tooltip={<TooltipNote note={tooltip} />}
        hasChrome={false}
        delayShow={600}
        {...rest}
      >
        <StyledButton isActive={isActive} isSelect={isSelect} as="div">
          {icon && <Icon icon={icon} />}
          {children}
        </StyledButton>
      </WithTooltip>
    );
  return (
    <StyledButton isActive={isActive} isSelect={isSelect} {...rest}>
      {icon && <Icon icon={icon} />}
      {children}
      {isSelect ? Chevron : null}
    </StyledButton>
  );
};
