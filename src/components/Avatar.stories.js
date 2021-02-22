import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
};

const Base = (args) => (
  <div>
    <Avatar isLoading {...args} />
    <Avatar username="Tom Coleman" {...args} />
    <Avatar
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
      {...args}
    />
  </div>
);

export const Large = Base.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Base.bind({});

export const Small = Base.bind({});
Small.args = {
  size: 'small',
};

export const Tiny = Base.bind({});
Tiny.args = {
  size: 'tiny',
};

export const Organization = Base.bind({});
Organization.args = {
  type: 'organization',
};
