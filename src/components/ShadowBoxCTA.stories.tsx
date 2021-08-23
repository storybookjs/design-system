import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { ShadowBoxCTA } from './ShadowBoxCTA';

// The wrapper allows you to see the shadow in Chromatic
const Wrapper = styled.div`
  padding: 20px;
`;

const ctaAction = <Button appearance="secondary">Continue</Button>;

export default {
  component: ShadowBoxCTA,
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
  title: 'ShadowBoxCTA',
};

const Story = (args) => <ShadowBoxCTA {...args} />;
export const Default = Story.bind({});
Default.args = {
  action: ctaAction,
  headingText: 'Composite component',
  messageText: 'Assemble a composite component out of simpler components',
};

export const WithoutMessageText = Story.bind({});
WithoutMessageText.args = {
  action: ctaAction,
  headingText: 'Composite component',
};
