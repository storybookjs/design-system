import React from 'react';
import { Button } from './Button';
import { ThemeWrapper } from './ThemeWrapper';

export default {
  title: 'Theme Wrapper',
  component: ThemeWrapper,
};

export const Default = () => (
  <ThemeWrapper>
    <Button appearance="primary">Primary</Button>
  </ThemeWrapper>
);
