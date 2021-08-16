import React from 'react';
import { ProgressDots } from './ProgressDots';

export default {
  title: 'ProgressDots',
  component: ProgressDots,
  argTypes: { steps: { control: { type: 'range', max: 10 } } },
};

export const Basic = (args) => <ProgressDots {...args} />;

export const Loading = Basic.bind();
Loading.args = { isLoading: true };

export const Starting = Basic.bind();
Starting.args = { steps: 4, progress: 1 };

export const Halfway = Basic.bind();
Halfway.args = { steps: 4, progress: 2 };

export const Complete = Basic.bind();
Complete.args = { steps: 4, progress: 4 };

export const LargeComplete = Basic.bind();
LargeComplete.args = { steps: 4, progress: 4, size: 'large' };
