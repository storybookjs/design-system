/* eslint-disable react/prop-types */
import React from 'react';
import { SyntaxHighlighter } from '@storybook/components';
import { ThemeProvider, themes, convert } from '@storybook/theming';

export const Highlight = ({ children, ...rest }) => (
  <ThemeProvider theme={convert(themes.light)}>
    <SyntaxHighlighter {...rest}>{children}</SyntaxHighlighter>
  </ThemeProvider>
);
