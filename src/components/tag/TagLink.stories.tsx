import React from 'react';
// @ts-ignore
import seedrandom from 'seedrandom';
import { TagLink } from './TagLink';
// @ts-ignore
import { StoryLinkWrapper } from '../StoryLinkWrapper';

seedrandom('chromatic testing', { global: true });

export default {
  component: TagLink,
  title: 'Tag/TagLink',
};

export const Default = () => <TagLink href="https://chromatic.com">⚛️ React</TagLink>;

export const WithLinkWrapper = () => (
  <TagLink to="https://chromatic.com" LinkWrapper={StoryLinkWrapper as React.FC<{ to: string }>}>
    ⚛️ React
  </TagLink>
);

export const Loading = () => <TagLink isLoading />;
