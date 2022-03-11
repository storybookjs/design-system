import React from 'react';
import { styled } from '@storybook/theming';
import { Badge } from './Badge';
import { Button } from './Button';
import { Link } from './Link';
import { OutlineCTA } from './OutlineCTA';

// The wrapper allows you to see the shadow in Chromatic
const Wrapper = styled.div`
  padding: 20px;
`;

const InlineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default {
  component: OutlineCTA,
  title: 'OutlineCTA',
  argTypes: {
    action: { control: false },
    badge: { control: false },
  },
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
};

const Story = (args) => <OutlineCTA {...args} />;

export const Default = Story.bind({});
Default.args = {
  action: (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href="#" withArrow>
      Go to latest docs
    </Link>
  ),
  badge: <Badge status="positive">New</Badge>,
  children: 'These docs are for version 6.0. Newer docs are available for version 6.4.',
};
Default.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const NoBadge = Story.bind({});
NoBadge.args = {
  action: Default.args.action,
  children: Default.args.children,
};

export const Inline = Story.bind({});
Inline.args = {
  ...Default.args,
  action: (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href="#" withArrow>
      Read more
    </Link>
  ),
  badge: Default.args.badge,
  children: 'Learn how to automate UI tests with Github Actions.',
};
Inline.decorators = [(story) => <InlineWrapper>{story()}</InlineWrapper>];
