import React, { ComponentProps, FC, ReactNode } from 'react';
import { styled } from '@storybook/theming';

import { breakpoint, color, spacing, typography } from './shared/styles';

const OutlineCTAWrapper = styled.div`
  border-radius: ${spacing.borderRadius.small}px;
  box-shadow: ${color.border} 0 0 0 1px inset;
  padding: ${spacing.padding.small}px ${spacing.padding.small}px;

  font-size: ${typography.size.s2}px;
  line-height: 20px;

  @media (min-width: ${breakpoint}px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  }
`;

const MessageText = styled.span`
  margin-left: 2px;
  margin-right: 2px;
`;

const ActionWrapper = styled.span`
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
    {badge} <MessageText>{children}</MessageText> <ActionWrapper>{action}</ActionWrapper>
  </OutlineCTAWrapper>
);

OutlineCTA.defaultProps = {
  badge: null,
};
