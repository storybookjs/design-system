import React from 'react';
import { ListItem } from './ListItem';
import { Icon } from '../Icon';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  title: 'tooltip/ListItem',
  decorators: [
    (storyFn) => (
      <div style={{ width: 200, border: '1px solid #ddd', margin: '3rem' }}>{storyFn()}</div>
    ),
  ],
  component: ListItem,
};

export const Default = (args) => <ListItem {...args} />;
Default.args = { title: 'Default' };

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

export const Loading = Default.bind();
Loading.args = { isLoading: true };

export const LongTitle = Default.bind();
LongTitle.args = { title: 'lorem ipsum dolor sit amet consectatur' };

export const DefaultIcon = Default.bind();
DefaultIcon.args = { title: 'Default icon', right: <Icon icon="eye" /> };

export const ActiveIcon = Default.bind();
ActiveIcon.args = {
  active: true,
  ...DefaultIcon.args,
};

export const WithPositions = Default.bind();
WithPositions.args = {
  left: 'left',
  title: 'title',
  center: 'center',
  right: 'right',
};

export const WithPositionsActive = Default.bind();
WithPositionsActive.args = {
  active: true,
  left: 'left',
  title: 'active',
  center: 'center',
  right: 'right',
};

export const WithPositionsActiveLongTitle = Default.bind();
WithPositionsActiveLongTitle.args = {
  active: true,
  left: '✅',
  title: 'lorem ipsum dolor sit amet consectatur',
  center: 'center',
  right: <Icon icon="eye" />,
};

export const Disabled = Default.bind();
Disabled.args = {
  disabled: true,
  left: 'left',
  title: 'disabled',
  center: 'center',
  right: 'right',
};

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
