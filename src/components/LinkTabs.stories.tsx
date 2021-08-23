import { action } from '@storybook/addon-actions';
import React from 'react';

import { LinkTabs } from './LinkTabs';

const items = [
  { key: '1', label: 'Activity', title: 'View activity', href: '/activity' },
  { key: '2', label: 'Components', title: 'View components', href: '/components', isActive: true },
  { key: '3', label: 'Changeset', title: 'View UI changes', href: '/changes' },
];

export default {
  title: 'LinkTabs',
};

export const Default = () => <LinkTabs items={items} onSelect={action('select')} />;
Default.storyName = 'default';
