import React from 'react';
import { AuthorList, AuthorListProps } from './AuthorList';

export const authors = [
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
  {
    id: '5',
    name: 'Amanda Martinez',
    avatarUrl:
      'https://user-images.githubusercontent.com/321738/102828147-3d00d000-43e4-11eb-8585-eceb9b454d8b.jpg',
  },
  {
    id: '6',
    name: 'Kyle Suss',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/3035355?s=96&v=4',
  },
];

export default {
  title: 'AuthorList',
  component: AuthorList,
  excludeStories: ['authors'],
};

export const Basic = (args: AuthorListProps) => <AuthorList {...args} />;
Basic.args = { authors: authors.slice(0, 5) };

export const Short = Basic.bind({});
Short.args = { authors: authors.slice(0, 2) };

export const ShowMore = Basic.bind({});
ShowMore.args = { authors };
