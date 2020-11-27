import React from 'react';
import { BulletLink } from './BulletLink';

export default {
  title: 'TableOfContents/BulletLink',
  component: BulletLink,
  parameters: { chromatic: { disable: true } },
};

const currentPath = '/path-1';
// Bullet links should always be used in a series
export const Series = () => (
  <ul>
    <BulletLink currentPath={currentPath} item={{ path: '/path-1', title: 'Link 1' }} />
    <BulletLink currentPath={currentPath} item={{ path: '/path-2', title: 'Link 2' }} />
  </ul>
);
