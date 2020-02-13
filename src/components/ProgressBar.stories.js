import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'New component/ProgressBar',
  parameters: {
    component: ProgressBar,
    assets: [
      'https://cl.ly/8fd39de9cb72/download/Screen%252520Shot%2525202020-02-10%252520at%2525203.29.29%252520PM.png',
    ],
  },
  decorators: [storyFn => <div style={{ margin: '3rem' }}>{storyFn()}</div>],
};

export const Inprogress25 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 25, status: 'testing' }]} denominator={100} />
);

Inprogress25.story = {
  name: 'inprogress 25',
};

export const Inprogress50 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 50, status: 'testing' }]} denominator={100} />
);

Inprogress50.story = {
  name: 'inprogress 50',
};

export const Inprogress75 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 75, status: 'testing' }]} denominator={100} />
);

Inprogress75.story = {
  name: 'inprogress 75',
};
