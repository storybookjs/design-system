import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from './ListItem';
import { Icon } from '../Icon';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

storiesOf('Design System|tooltip/ListItem', module)
  .addParameters({ component: ListItem })
  .addDecorator(storyFn => (
    <div style={{ width: 200, border: '1px solid #ddd', margin: '3rem' }}>{storyFn()}</div>
  ))
  .add('all', () => (
    <div>
      <ListItem loading />
      <ListItem title="Default" />
      <ListItem title="lorem ipsum dolor sit amet consectatur" />
      <ListItem title="Default icon" right={<Icon icon="eye" />} />
      <ListItem left="left" title="title" center="center" right="right" />
      <ListItem active left="left" title="active" center="center" right="right" />
      <ListItem
        active
        left="left"
        title="active icon"
        center="center"
        right={<Icon icon="eye" />}
      />
      <ListItem
        active
        left="✅"
        title="lorem ipsum dolor sit amet consectatur"
        center="center"
        right={<Icon icon="eye" />}
      />
      <ListItem disabled left="left" title="disabled" center="center" right="right" />
    </div>
  ))
  .add('loading', () => <ListItem loading />)
  .add('default', () => <ListItem title="Default" />)
  .add('long title', () => <ListItem title="lorem ipsum dolor sit amet consectatur" />)
  .add('default icon', () => <ListItem title="Default icon" right={<Icon icon="eye" />} />)
  .add('active icon', () => <ListItem active title="active icon" right={<Icon icon="eye" />} />)
  .add('w/positions', () => <ListItem left="left" title="title" center="center" right="right" />)
  .add('w/positions active', () => (
    <ListItem active left="left" title="active" center="center" right="right" />
  ))
  .add('w/positions active long title', () => (
    <ListItem
      active
      left="✅"
      title="lorem ipsum dolor sit amet consectatur"
      center="center"
      right={<Icon icon="eye" />}
    />
  ))
  .add('disabled', () => (
    <ListItem disabled left="left" title="disabled" center="center" right="right" />
  ))
  .add('with LinkWrapper', () => (
    <>
      <ListItem LinkWrapper={StoryLinkWrapper} loading href="http://www.google.com" />
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
  ));
