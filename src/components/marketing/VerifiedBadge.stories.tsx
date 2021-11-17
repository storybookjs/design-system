import React from 'react';
import { VerifiedBadge, VerifiedBadgeProps } from './VerifiedBadge';

export default {
  title: 'Marketing/VerifiedBadge',
  component: VerifiedBadge,
};

const Template = (args: VerifiedBadgeProps) => <VerifiedBadge {...args} />;

export const Official = Template.bind({});
Official.args = {
  appearance: 'official',
  creator: 'Storybook',
};

export const Integrator = Template.bind({});
Integrator.args = {
  appearance: 'integrators',
  creator: 'InVision',
};

export const ClickTrigger = Template.bind({});
ClickTrigger.args = {
  appearance: 'official',
  trigger: 'click',
};
