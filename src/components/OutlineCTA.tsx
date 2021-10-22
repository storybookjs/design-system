import React, { ComponentProps, FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';

import { breakpoint, color, spacing, typography } from './shared/styles';

const OutlineCTAWrapper = styled.div`
  border-radius: ${spacing.borderRadius.small}px;
  box-shadow: ${color.border} 0 0 0 1px inset;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  text-align: center;

  @media (min-width: ${breakpoint}px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    text-align: left;
  }
`;

const MessageText = styled.p`
  font-size: ${typography.size.s2}px;
  margin: 0;
`;

const ActionWrapper = styled.span`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  white-space: nowrap;
`;

interface Props {
  /** Displays after `children`; typically a [Link](/?path=/docs/link--basic) */
  action: ReactNode;
  /** Displays before `children`; should be a [Badge](/?path=/docs/badge--basic) */
  badge?: ReactNode;
  children: string;
}

export const OutlineCTA = ({ action, badge, children, ...rest }: Props) => (
  <OutlineCTAWrapper {...rest}>
    {badge}
    <MessageText>{children}</MessageText>
    <ActionWrapper>{action}</ActionWrapper>
  </OutlineCTAWrapper>
);

OutlineCTA.defaultProps = {
  badge: null,
};
