import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';

export default {
  title: 'Badge',
  component: Badge,
};

export const Basic = (args) => <Badge {...args}>Badge</Badge>;

export const All = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
  </div>
);

export const WithIcon = () => (
  <Badge status="warning">
    <Icon icon="check" inline />
    with icon
  </Badge>
);
