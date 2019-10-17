import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
  },
};

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

large.story = {
  name: 'large',
};

export const medium = () => (
  <div>
    <Avatar loading />
    <Avatar username="Tom Coleman" />
    <Avatar username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);

medium.story = {
  name: 'medium',
};

export const small = () => (
  <div>
    <Avatar loading size="small" />
    <Avatar size="small" username="Dominic Nguyen" />
    <Avatar
      size="small"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);

small.story = {
  name: 'small',
};

export const tiny = () => (
  <div>
    <Avatar loading size="tiny" />
    <Avatar size="tiny" username="Dominic Nguyen" />
    <Avatar
      size="tiny"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);

tiny.story = {
  name: 'tiny',
};
