import React from 'react';
import { loadFontsForStorybook } from '../src/utils/index';
import { GlobalStyle } from '../src/components/shared/global';

import type { Preview } from '@storybook/react';

loadFontsForStorybook();

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

const preview: Preview = {
  parameters: {
    // automatically create action args for all props that start with "on"
    actions: { argTypesRegex: '^on.*' },
    dependencies: {
      // display only dependencies/dependents that have a story in storybook
      // by default this is false
      withStoriesOnly: true,

      // completely hide a dependency/dependents block if it has no elements
      // by default this is false
      hideEmpty: true,
    },
  },
  decorators: [withGlobalStyle],
}

export default preview;
