import React from 'react';
import { fontUrl, GlobalStyle } from './shared/global';

export const ThemeWrapper = ({ children }) => (
  <section id="theme-wrapper">
    <link href={fontUrl} rel="stylesheet" />
    <GlobalStyle />
    {children}
  </section>
);
