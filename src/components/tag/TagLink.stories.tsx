import React from 'react';
import { TagLink } from './TagLink';
// @ts-ignore
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  component: TagLink,
  title: 'Design System/Tag/TagLink',
};

export const Default = () => <TagLink href="https://chromatic.com">⚛️ React</TagLink>;

export const WithLinkWrapper = () => (
  <TagLink to="https://chromatic.com" LinkWrapper={StoryLinkWrapper as React.FC<{ to: string }>}>
    ⚛️ React
  </TagLink>
);

export const Loading = () => <TagLink isLoading />;
