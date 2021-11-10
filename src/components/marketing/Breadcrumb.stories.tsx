import React from 'react';
import { Breadcrumb } from './Breadcrumb';

import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  component: Breadcrumb,
  title: 'Marketing/Breadcrumb',
};

export const Default = () => (
  <div style={{ paddingTop: '2rem' }}>
    <Breadcrumb linkWrapper={StoryLinkWrapper}>View full catalog</Breadcrumb>
  </div>
);
