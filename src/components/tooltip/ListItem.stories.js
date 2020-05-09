import React from 'react';
import { argsStory } from '@storybook/react';

import { ListItem } from './ListItem';
import { Icon } from '../Icon';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  title: 'Design System/tooltip/ListItem',

  decorators: [
    storyFn => (
      <div style={{ width: 200, border: '1px solid #ddd', margin: '3rem' }}>{storyFn()}</div>
    ),
  ],

  parameters: {
    component: ListItem,
  },
};

export const Basic = argsStory({});

export const All = () => (
  <div>
    <ListItem isLoading />
    <ListItem title="Default" />
    <ListItem title="lorem ipsum dolor sit amet consectatur" />
    <ListItem title="Default icon" right={<Icon icon="eye" />} />
    <ListItem left="left" title="title" center="center" right="right" />
    <ListItem active left="left" title="active" center="center" right="right" />
    <ListItem
      appearance="secondary"
      active
      left="left"
      title="secondary active"
      center="center"
      right={<Icon icon="eye" />}
    />
    <ListItem active left="left" title="active icon" center="center" right={<Icon icon="eye" />} />
    <ListItem
      active
      left="✅"
      title="lorem ipsum dolor sit amet consectatur"
      center="center"
      right={<Icon icon="eye" />}
    />
    <ListItem disabled left="left" title="disabled" center="center" right="right" />
  </div>
);

export const Loading = argsStory({ isLoading: true });

export const Default = argsStory({ title: 'Default' });

export const LongTitle = argsStory({ title: 'lorem ipsum dolor sit amet consectatur' });

export const DefaultIcon = argsStory({ title: 'Default icon', right: <Icon icon="eye" /> });

export const ActiveIcon = argsStory({
  active: true,
  title: 'active icon',
  right: <Icon icon="eye" />,
});

export const WithPositions = argsStory({
  left: 'left',
  title: 'title',
  center: 'center',
  right: 'right',
});

export const WithPositionsActive = argsStory({
  active: true,
  left: 'left',
  title: 'active',
  center: 'center',
  right: 'right',
});

export const WithPositionsActiveLongTitle = argsStory({
  active: true,
  left: '✅',
  title: 'lorem ipsum dolor sit amet consectatur',
  center: 'center',
  right: <Icon icon="eye" />,
});

export const Disabled = argsStory({
  disabled: true,
  left: 'left',
  title: 'disabled',
  center: 'center',
  right: 'right',
});

export const WithLinkWrapper = () => (
  <>
    <ListItem LinkWrapper={StoryLinkWrapper} isLoading href="http://www.google.com" />
    <ListItem LinkWrapper={StoryLinkWrapper} title="Default" href="http://www.google.com" />
    <ListItem
      LinkWrapper={StoryLinkWrapper}
      title="lorem ipsum dolor sit amet consectatur"
      to="http://www.google.com"
    />
    <ListItem
      LinkWrapper={StoryLinkWrapper}
      title="Default icon"
      right={<Icon icon="eye" />}
      to="http://www.google.com"
    />
  </>
);
