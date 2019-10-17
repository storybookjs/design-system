import React from 'react';

import { ProgressDots } from './ProgressDots';

export default {
  title: 'Design System|ProgressDots',
  component: ProgressDots,
};

export const loading = () => <ProgressDots loading />;

loading.story = {
  name: 'loading',
};

export const starting = () => <ProgressDots steps={4} progress={1} />;

starting.story = {
  name: 'starting',
};

export const halfway = () => <ProgressDots steps={4} progress={2} />;

halfway.story = {
  name: 'halfway',
};

export const complete = () => <ProgressDots steps={4} progress={4} />;

complete.story = {
  name: 'complete',
};

export const largeComplete = () => <ProgressDots steps={4} progress={4} size="large" />;

largeComplete.story = {
  name: 'large complete',
};
