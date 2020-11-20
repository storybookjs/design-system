import React from 'react';
import { AvatarList } from './AvatarList';
import { Avatar } from './Avatar';

export const users = [
  {
    id: '1',
    name: 'Dominic Nguyen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
  {
    id: '2',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
  },
  {
    id: '3',
    name: 'Zoltan Olah',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
  },
  {
    id: '4',
    name: 'Tim Hingston',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
  },
];

export default {
  title: 'AvatarList',
  component: AvatarList,
  parameters: {
    subcomponents: { Avatar },
  },
  excludeStories: ['users'],
};

export const Basic = (args) => <AvatarList {...args} />;
Basic.args = { users };

export const Short = Basic.bind();
Short.args = { users: users.slice(0, 2) };

export const Ellipsized = Basic.bind();
Ellipsized.args = { users };

export const BigUserCount = Basic.bind();
BigUserCount.args = { users, userCount: 100 };

export const SmallSize = Basic.bind();
SmallSize.args = { users, userCount: 100, size: 'small' };

export const Loading = Basic.bind();
Loading.args = { users: undefined, isLoading: true };

export const Empty = Basic.bind();
Empty.args = { users: [] };
