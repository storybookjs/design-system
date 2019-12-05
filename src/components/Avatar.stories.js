import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',

  parameters: {
    component: Avatar,
  },
};

export const large = () => (
  <div>
    <Avatar isLoading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

export const medium = () => (
  <div>
    <Avatar isLoading />
    <Avatar username="Tom Coleman" />
    <Avatar username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);

export const small = () => (
  <div>
    <Avatar isLoading size="small" />
    <Avatar size="small" username="Dominic Nguyen" />
    <Avatar
      size="small"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);

export const tiny = () => (
  <div>
    <Avatar isLoading size="tiny" />
    <Avatar size="tiny" username="Dominic Nguyen" />
    <Avatar
      size="tiny"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);
