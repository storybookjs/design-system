import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import WithTooltip from './WithTooltip';

import { TooltipLinkList } from './TooltipLinkList';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export const links = [
  { title: 'Link', href: 'http://google.com' },
  { title: 'Link', href: 'http://google.com' },
  { title: 'callback', onClick: action('onClick') },
];

storiesOf('Design System|tooltip/TooltipLinkList', module)
  .addDecorator(storyFn => (
    <div style={{ height: '300px' }}>
      <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
        <div>Tooltip</div>
      </WithTooltip>
    </div>
  ))
  .add('links', () => <TooltipLinkList links={links.slice(0, 2)} LinkWrapper={null} />)
  .add('links and callback', () => (
    <TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />
  ));
