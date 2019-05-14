import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from './ListItem';
import { Icon } from './Icon';

storiesOf('basics/ListItem', module)
  .add('all', () => (
    <div>
      <ListItem loading />
      <ListItem title="Default" />
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
      <ListItem disabled left="left" title="disabled" center="center" right="right" />
    </div>
  ))
  .add('loading', () => <ListItem loading />)
  .add('default', () => <ListItem title="Default" />)
  .add('default icon', () => <ListItem title="Default icon" right={<Icon icon="eye" />} />)
  .add('active icon', () => <ListItem active title="active icon" right={<Icon icon="eye" />} />)
  .add('w/positions', () => <ListItem left="left" title="title" center="center" right="right" />)
  .add('w/positions active', () => (
    <ListItem active left="left" title="active" center="center" right="right" />
  ))
  .add('disabled', () => (
    <ListItem disabled left="left" title="disabled" center="center" right="right" />
  ));
