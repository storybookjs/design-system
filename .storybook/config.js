import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { fontUrl } from '../src/components/shared/global';
import 'storybook-chromatic';

import { GlobalStyle } from '../src/components/shared/global';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);

// Load the font and avoid re-loading it when components change
const fontLinkId = 'font-link';

if (!document.getElementById(fontLinkId)) {
  const fontLink = document.createElement('link');

  fontLink.id = fontLinkId;
  fontLink.href = fontUrl;
  fontLink.rel = 'stylesheet';

  document.head.appendChild(fontLink);
}
