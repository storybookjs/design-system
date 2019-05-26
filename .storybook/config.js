import React from 'react';
import { load, addDecorator, addParameters } from '@storybook/react';
import { getPropDefs } from '@storybook/addon-docs/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import 'storybook-chromatic';

addParameters({
  docs: DocsPage,
});

import { GlobalStyle } from '../src/components/shared/global';
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
load(require.context('../src', true, /\.stories\.js$/), module);
load(require.context('../src', true, /\.stories\.mdx$/), module);
