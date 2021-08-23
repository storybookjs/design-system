import React from 'react';
import { action } from '@storybook/addon-actions';
import WithTooltip from './WithTooltip';

import { TooltipLinkList } from './TooltipLinkList';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export const links = [
  { title: 'Link', href: 'https://learnstorybook.com' },
  { title: 'Link', href: 'https://learnstorybook.com' },
  { title: 'callback', onClick: action('onClick') },
];

export default {
  title: 'tooltip/TooltipLinkList',
  component: TooltipLinkList,
  decorators: [
    (storyFn) => (
      <div style={{ height: '300px' }}>
        <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
          <div>Tooltip</div>
        </WithTooltip>
      </div>
    ),
  ],
  excludeStories: ['links'],
};

export const Links = () => <TooltipLinkList links={links.slice(0, 2)} LinkWrapper={null} />;

export const LinksAndCallback = () => (
  <TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />
);
