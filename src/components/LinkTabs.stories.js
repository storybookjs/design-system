import { action } from '@storybook/addon-actions';
import React from 'react';

import { LinkTabs } from './LinkTabs';

const items = [
  { label: 'Activity', title: 'View activity', href: '/activity' },
  { label: 'Components', title: 'View components', href: '/components', isActive: true },
  { label: 'Changeset', title: 'View UI changes', href: '/changes' },
];

export default {
  title: 'LinkTabs',
};

export const Default = () => <LinkTabs items={items} onSelect={action('select')} />;
Default.storyName = 'default';
