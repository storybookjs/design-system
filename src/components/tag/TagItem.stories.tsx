import React from 'react';
import { TagItem } from './TagItem';

export default {
  component: TagItem,
  title: 'Design System/Tag/TagItem',
};

export const Default = () => <TagItem>⚛️ React</TagItem>;

export const WithLinkWrapper = () => <TagItem>⚛️ React</TagItem>;

export const Loading = () => <TagItem isLoading />;
