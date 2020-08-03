import React from 'react';
import styled from 'styled-components';
import { Button, styles } from '@storybook/design-system';
import ShadowBoxCTA from './ShadowBoxCTA';

// The wrapper allows you to see the shadow in Chromatic
const Wrapper = styled.div`
  padding: 40px;
`;

const ctaAction = <Button appearance="secondary">Continue</Button>;

export default {
  component: ShadowBoxCTA,
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
  title: 'Composite/ShadowBoxCTA',
};

const Story = (args) => <ShadowBoxCTA {...args} />;
export const Default = Story.bind({});
Default.args = {
  action: ctaAction,
  headingText: 'Composite component',
  messageText: 'Assemble a composite component out of simpler components',
};
