import React from 'react';

import { ProgressDots } from './ProgressDots';

export default {
  title: 'Design System/ProgressDots',
  component: ProgressDots,
  argTypes: { steps: { control: { type: 'range', max: 10 } } },
};

export const Basic = args => <ProgressDots {...args} />;
export const Loading = () => <ProgressDots isLoading />;
export const Starting = () => <ProgressDots steps={4} progress={1} />;
export const Halfway = () => <ProgressDots steps={4} progress={2} />;
export const Complete = () => <ProgressDots steps={4} progress={4} />;
export const LargeComplete = () => <ProgressDots steps={4} progress={4} size="large" />;
