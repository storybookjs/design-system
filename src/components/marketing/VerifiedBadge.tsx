import React from 'react';

import { styled } from '@storybook/theming';

import { color, spacing } from '../shared/styles';
import { Icon } from '../Icon';
import { TooltipMessage } from '../tooltip/TooltipMessage';
import WithTooltip from '../tooltip/WithTooltip';

type VerifiedBadgeIconProps = {
  appearance: 'official' | 'integrators' | 'community';
};

const VerifiedBadgeIcon = styled(Icon)<VerifiedBadgeIconProps>`
  color: ${(props) => (props.appearance === 'official' ? color.secondary : color.green)};
  width: 14px;
  height: 14px;
  margin-bottom: 2px;
  z-index: 2;
  position: relative;
`;

const BadgeWrapper = styled(WithTooltip)`
  margin-left: ${spacing.padding.small}px;
`;

export const VerifiedBadge = ({
  trigger = 'hover',
  creator = '',
  appearance,
}: VerifiedBadgeProps) => (
  <BadgeWrapper
    placement="top"
    trigger={trigger}
    tooltip={
      <TooltipMessage
        desc={
          appearance === 'official'
            ? 'This addon is maintained and recommended by the Storybook team.'
            : `This addon is maintained by ${creator}.`
        }
      />
    }
  >
    <VerifiedBadgeIcon icon="verified" appearance={appearance} />
  </BadgeWrapper>
);

export interface VerifiedBadgeProps {
  appearance: 'official' | 'integrators' | 'community';
  trigger?: 'hover' | 'click';
  creator?: string;
}
