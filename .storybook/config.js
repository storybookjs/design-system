import React from 'react';
import { load, addDecorator, addParameters } from '@storybook/react';
import { getPropDefs } from '@storybook/addon-docs/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import 'storybook-chromatic';

addParameters({
  options: {
    docs: {
      inlineStories: true,
      getPropDefs,
    },
  },
  docs: DocsPage,
});

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
