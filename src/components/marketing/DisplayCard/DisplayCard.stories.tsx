import React from 'react';
import { styled } from '@storybook/theming';
import { DisplayCard, DisplayCardProps } from './DisplayCard';

// @ts-ignore
import ControlsSVG from '../../../images/marketing/addons/controls.svg';
// @ts-ignore
import ViewportsSVG from '../../../images/marketing/addons/viewports.svg';
// @ts-ignore
import ContrastPNG from '../../../images/marketing/addons/contrast.png';

export default {
  title: 'Marketing/DisplayCard',
  component: DisplayCard,
  chromatic: { viewports: [320, 900] },
};

const Wrapper = styled.div`
  padding: 16px;

  > h2 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 16px;
  }

  > h2:last-of-type {
    margin-top: 64px;
  }
`;

const authors = [
  {
    id: '1',
    name: 'Dominic Nguyen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
  {
    id: '2',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
  },
  {
    id: '3',
    name: 'Zoltan Olah',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
  },
  {
    id: '4',
    name: 'Tim Hingston',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
  },
];

const Template = (args: DisplayCardProps) => (
  <Wrapper>
    <h2>Horizontal</h2>
    <DisplayCard authors={authors} {...args} />
    <h2>Vertical</h2>
    <DisplayCard orientation="vertical" authors={authors} style={{ width: 300 }} {...args} />
  </Wrapper>
);

export const OfficialStorybook = Template.bind({});
OfficialStorybook.args = {
  appearance: 'official',
  image: ControlsSVG,
  displayName: 'Controls',
  description: 'Interact with component inputs dynamically in the Storybook UI',
  weeklyDownloads: 17143,
};

export const OfficialIntegrator = Template.bind({});
OfficialIntegrator.args = {
  appearance: 'integrators',
  image: ContrastPNG,
  displayName: 'Contrast',
  description: 'Embed Contrast handoff tool in a storybook panel',
  weeklyDownloads: 17143,
  verifiedCreator: 'Contrast',
};

export const Community = Template.bind({});
Community.args = {
  image: ViewportsSVG,
  appearance: 'community',
  displayName: 'Mobile UX Hints',
  description:
    'Suggestions on how to tweak the HTML and CSS of your components to be more mobile-friendly.',
  weeklyDownloads: 12253,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  displayName: 'Controls',
  description: 'Interact with component inputs dynamically in the Storybook UI',
  weeklyDownloads: 238,
};

export const WithoutDisplayName = Template.bind({});
WithoutDisplayName.args = {
  displayName: null,
  name: '@storybook/addon-controls',
  description: 'Interact with component inputs dynamically in the Storybook UI',
  weeklyDownloads: 238,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

const StatsWrapper = styled.div`
  > * {
    margin-bottom: 16px;
  }
`;

export const StatVariations = (args: DisplayCardProps) => (
  <StatsWrapper>
    <DisplayCard {...args} weeklyDownloads={104} />
    <DisplayCard {...args} weeklyDownloads={726} />
    <DisplayCard {...args} weeklyDownloads={5026} />
    <DisplayCard {...args} weeklyDownloads={17143} />
    <DisplayCard {...args} weeklyDownloads={171043} />
    <DisplayCard {...args} weeklyDownloads={3871043} />
  </StatsWrapper>
);
StatVariations.args = {
  orientation: 'horizontal',
  appearance: 'official',
  image: ControlsSVG,
  name: '@storybook/addon-controls',
  displayName: 'Controls',
  description: 'Interact with component inputs dynamically in the Storybook UI',
  authors,
};
