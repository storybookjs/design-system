import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemLink } from './ItemLink';

export default {
  title: 'Design System/TableOfContents/ItemLink',
  component: ItemLink,
  parameters: { chromatic: { disable: true } },
};

export const Base = () => (
  <ItemLink currentPath="/path-2" item={{ path: '/path-1', title: 'Link 1' }} />
);

export const Active = () => (
  <ItemLink currentPath="/path-1" item={{ path: '/path-1', title: 'Link 1' }} />
);
