import React from 'react';

import { ProgressDots } from './ProgressDots';

export default {
  title: 'Design System/ProgressDots',
  component: ProgressDots,
};

export const loading = () => <ProgressDots isLoading />;
export const starting = () => <ProgressDots steps={4} progress={1} />;
export const halfway = () => <ProgressDots steps={4} progress={2} />;
export const complete = () => <ProgressDots steps={4} progress={4} />;
export const largeComplete = () => <ProgressDots steps={4} progress={4} size="large" />;

largeComplete.story = {
  name: 'large complete',
};
