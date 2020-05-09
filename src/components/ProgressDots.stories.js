import { argsStory } from '@storybook/react';

import { ProgressDots } from './ProgressDots';

export default {
  title: 'Design System/ProgressDots',
  component: ProgressDots,
  argTypes: { steps: { control: { type: 'range', max: 10 } } },
};

export const Basic = argsStory({});
export const Loading = argsStory({ isLoading: true });
export const Starting = argsStory({ steps: 4, progress: 1 });
export const Halfway = argsStory({ steps: 4, progress: 2 });
export const Complete = argsStory({ steps: 4, progress: 4 });
export const LargeComplete = argsStory({ steps: 4, progress: 4, size: 'large' });
