import React from 'react';
import { load } from '@storybook/react';

// automatically import all files ending in *.stories.js
load(require.context('../src', true, /\.stories\.js$/), module);
load(require.context('../src', true, /\.stories\.mdx$/), module);
