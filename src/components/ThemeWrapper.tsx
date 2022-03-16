import React from 'react';
import { fontUrl, GlobalStyle } from './shared/global';

export const ThemeWrapper = ({ children }) => (
  <>
    <link href={fontUrl} rel="stylesheet" />
    <GlobalStyle />
    <h1>TESTING YO</h1>
    {children}
  </>
);
