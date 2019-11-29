import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { loadFontsForStorybook } from '../src/utils/index';
import 'storybook-chromatic';
import { DocsPage } from 'storybook-addon-deps/blocks';

import { GlobalStyle } from '../src/components/shared/global';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  options: { showRoots: false },
  docs: { page: DocsPage },
  dependencies: { 
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  }
});

loadFontsForStorybook();

