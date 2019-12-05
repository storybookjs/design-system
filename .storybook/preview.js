import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, ThemeProvider, themes, createReset, convert } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { loadFontsForStorybook } from '../src/utils/index';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(storyFn => (
  <ThemeProvider theme={convert(themes.light)}>
    <Global styles={createReset} />
    {storyFn()}
  </ThemeProvider>
));

addDecorator(withA11y);

loadFontsForStorybook();
