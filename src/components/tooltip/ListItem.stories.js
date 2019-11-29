import React from 'react';

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

export const all = () => (
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

export const loading = () => <ListItem isLoading />;
export const defaultStory = () => <ListItem title="Default" />;

defaultStory.story = {
  name: 'default',
};

export const longTitle = () => <ListItem title="lorem ipsum dolor sit amet consectatur" />;

longTitle.story = {
  name: 'long title',
};

export const defaultIcon = () => <ListItem title="Default icon" right={<Icon icon="eye" />} />;

defaultIcon.story = {
  name: 'default icon',
};

export const activeIcon = () => <ListItem active title="active icon" right={<Icon icon="eye" />} />;

activeIcon.story = {
  name: 'active icon',
};

export const wPositions = () => (
  <ListItem left="left" title="title" center="center" right="right" />
);

wPositions.story = {
  name: 'w/positions',
};

export const wPositionsActive = () => (
  <ListItem active left="left" title="active" center="center" right="right" />
);

wPositionsActive.story = {
  name: 'w/positions active',
};

export const wPositionsActiveLongTitle = () => (
  <ListItem
    active
    left="✅"
    title="lorem ipsum dolor sit amet consectatur"
    center="center"
    right={<Icon icon="eye" />}
  />
);

wPositionsActiveLongTitle.story = {
  name: 'w/positions active long title',
};

export const disabled = () => (
  <ListItem disabled left="left" title="disabled" center="center" right="right" />
);

export const withLinkWrapper = () => (
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

withLinkWrapper.story = {
  name: 'with LinkWrapper',
};
