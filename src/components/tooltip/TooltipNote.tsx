import React, { ComponentProps, FC } from 'react';
import { styled } from '@storybook/theming';

import { color, typography, spacing } from '../shared/styles';

const Note = styled.div`
  padding: 2px 6px;
  line-height: 16px;
  font-size: 10px;
  font-weight: ${typography.weight.bold};
  color: ${color.lightest};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: ${spacing.borderRadius.small}px;
  white-space: nowrap;
  pointer-events: none;
  z-index: -1;
  background: rgba(0, 0, 0, 0.6);
  margin: 6px;
`;

export const TooltipNote = ({
  note,
  ...rest
}: Props & Omit<ComponentProps<typeof Note>, 'children'> & { children?: never }) => {
  return <Note {...rest}>{note}</Note>;
};

interface Props {
  note: string;
}
