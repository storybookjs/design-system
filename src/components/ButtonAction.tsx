import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';
import { typography, color } from './shared/styles';
import { Icon, IconType } from './Icon';
import { Spinner } from './Spinner';

interface ButtonActionProps {
  icon: IconType;
  children?: string;
  isActive?: boolean;
  isLoading?: boolean;
  loadingText?: string | null;
}

interface ButtonStylingProps {
  isActive?: boolean;
  isLoading?: boolean;
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
  line-height: 14px;
  font-weight: ${typography.weight.regular};
  color: ${color.mediumdark};

  ${(props) =>
    (props.isActive || props.isLoading) &&
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
  loadingText = null,
  ...rest
}) => {
  return (
    <StyledButton isActive={isActive} isLoading={isLoading} {...rest}>
      {icon && !isLoading && <Icon icon={icon} />}
      {isLoading && (
        <div style={{ position: 'relative', width: 14, height: 14 }}>
          <Spinner inForm />
        </div>
      )}
      {children && !isLoading && children}
      {isLoading && loadingText}
    </StyledButton>
  );
};

ButtonAction.displayName = 'ButtonAction';
