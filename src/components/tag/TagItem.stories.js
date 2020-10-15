import React from 'react';
import { TagItem } from './TagItem';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  component: TagItem,
  title: 'Design System/Tag/TagItem',
};

export const Default = () => <TagItem>⚛️ React</TagItem>;

export const WithLinkWrapper = () => <TagItem LinkWrapper={StoryLinkWrapper}>⚛️ React</TagItem>;
