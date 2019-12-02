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
  title: 'Design System/AvatarList',
  component: AvatarList,
  parameters: {
    subcomponents: { Avatar },
  },
  excludeStories: ['users'],
};

export const short = () => <AvatarList users={users.slice(0, 2)} />;
export const ellipsized = () => <AvatarList users={users} />;
export const bigUserCount = () => <AvatarList users={users} userCount={100} />;

bigUserCount.story = {
  name: 'big userCount',
};

export const smallSize = () => <AvatarList users={users} userCount={100} size="small" />;

smallSize.story = {
  name: 'small size',
};

export const loading = () => <AvatarList isLoading />;
export const empty = () => <AvatarList users={[]} />;
