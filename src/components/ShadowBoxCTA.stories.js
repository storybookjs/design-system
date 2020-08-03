import React from 'react';
import { Button } from './Button';
import ShadowBoxCTA from './ShadowBoxCTA';

const ctaAction = <Button appearance="secondary">Continue</Button>;

export default {
  component: ShadowBoxCTA,
  title: 'Design System/ShadowBoxCTA',
};

const Story = (args) => <ShadowBoxCTA {...args} />;
export const Default = Story.bind({});
Default.args = {
  action: ctaAction,
  headingText: 'Composite component',
  messageText: 'Assemble a composite component out of simpler components',
};
