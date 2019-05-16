import React from 'react';
import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

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

storiesOf('Design System|AvatarList', module)
  .add('short', () => <AvatarList users={users.slice(0, 2)} />)
  .add('ellipsized', () => <AvatarList users={users} />)
  .add('big userCount', () => <AvatarList users={users} userCount={100} />)
  .add('small size', () => <AvatarList users={users} userCount={100} size="small" />)
  .add('loading', () => <AvatarList loading />)
  .add('empty', () => <AvatarList users={[]} />);
