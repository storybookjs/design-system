import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';
import { typography, color } from './shared/styles';
import { Icon, IconType } from './Icon';

interface ButtonActionProps {
  icon: IconType;
  children?: string;
  isActive?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

interface ButtonStylingProps {
  isActive?: boolean;
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
  transform: translate3d(0, 0, 0);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background-color: transparent;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};

  ${(props) =>
    props.isActive &&
    `
      background-color: ${transparentize(0.7, color.secondary)};
      color: ${color.secondary};
    `}

  &:hover {
    color: ${color.secondary};
    background-color: ${transparentize(0.54, color.secondary)};
  }
`;

export const ButtonAction: FC<ButtonActionProps> = ({
  children,
  icon,
  isActive = false,
  isLoading = false,
  loadingText = 'Loading',
  ...rest
}) => {
  return (
    <StyledButton isActive={isActive} {...rest}>
      {icon && <Icon icon={icon} />}
      {children && !isLoading && children}
      {isLoading && loadingText}
    </StyledButton>
  );
};

ButtonAction.displayName = 'ButtonAction';
