import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';

storiesOf('basics/Avatar', module)
  .addParameters({ component: Avatar })
  .add('large', () => (
    <div>
      <Avatar loading size="large" />
      <Avatar size="large" username="Tom Coleman" />
      <Avatar
        size="large"
        username="Tom Coleman"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
    </div>
  ))

  .add('medium', () => (
    <div>
      <Avatar loading />
      <Avatar username="Tom Coleman" />
      <Avatar username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ))
  .add('small', () => (
    <div>
      <Avatar loading size="small" />
      <Avatar size="small" username="Dominic Nguyen" />
      <Avatar
        size="small"
        username="Dominic Nguyen"
        src="https://avatars2.githubusercontent.com/u/263385"
      />
    </div>
  ))
  .add('tiny', () => (
    <div>
      <Avatar loading size="tiny" />
      <Avatar size="tiny" username="Dominic Nguyen" />
      <Avatar
        size="tiny"
        username="Dominic Nguyen"
        src="https://avatars2.githubusercontent.com/u/263385"
      />
    </div>
  ));
