import React, { ComponentProps, FunctionComponent } from 'react';

import { Avatar, AvatarType } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
};

const Base: FunctionComponent<ComponentProps<typeof Avatar>> = ({ src, ...props }) => (
  <div>
    <Avatar isLoading {...props} />
    <Avatar username="Tom Coleman" {...props} />
    <Avatar
      username="Tom Coleman"
      src={src || 'https://avatars2.githubusercontent.com/u/132554'}
      {...props}
    />
  </div>
);

export const Large = () => <Base size="large" />;

export const Medium = () => <Base />;

export const Small = () => <Base size="small" />;

export const Tiny = () => <Base size="tiny" />;

export const Organization = () => (
  <Base type={AvatarType.ORGANIZATION} username="Chromatic" src="/chromatic-logo-square.png" />
);
