import React from 'react';
import { load, addDecorator } from '@storybook/react';
import 'storybook-chromatic';

import { GlobalStyle } from '../src/components/basics/shared/global';
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
load(require.context('../src', true, /\.stories\.js$/), module);
load(require.context('../src', true, /\.stories\.mdx$/), module);
