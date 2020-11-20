import React from 'react';
// @ts-ignore
import seedrandom from 'seedrandom';
import { TagList } from './TagList';
import { TagItem } from './TagItem';
import { TagLink } from './TagLink';

seedrandom('chromatic testing', { global: true });

export default {
  component: TagList,
  excludeStories: /.*Data$/,
  title: 'Tag/TagList',
};

export const mockTagsData = [
  {
    link: '/ui',
    name: '📲 UI',
  },
  {
    link: '/react',
    name: '⚛️ React',
  },
  {
    link: '/components',
    name: '🧩 Components',
  },
  {
    link: '/front-end-development',
    name: '👩🏽‍💻 Front-end development',
  },
  {
    link: '/graphql',
    name: '🕸 GraphQL',
  },
  {
    link: '/storybook',
    name: '📕 Storybook',
  },
  {
    link: '/component-libraries',
    name: '🏗 Component libraries',
  },
  {
    link: '/design',
    name: '🎨 Design',
  },
  {
    link: '/open-source',
    name: 'Open-source',
  },
  {
    link: '/startup',
    name: 'Startup',
  },
  {
    link: '/ux',
    name: 'UX',
  },
  {
    link: '/design-system',
    name: '🗃 Design systems',
  },
  {
    link: '/api',
    name: 'API',
  },
  {
    link: '/entrepreneurship',
    name: 'Entrepreneurship',
  },
  {
    link: '/testing',
    name: '✅ Testing',
  },
  {
    link: '/remote-work',
    name: 'Remote work',
  },
  {
    link: '/venture-capital',
    name: 'Venture capital',
  },
  {
    link: '/company-culture',
    name: 'Company culture',
  },
  {
    link: '/dev-tools',
    name: 'Dev tools',
  },
  {
    link: '/mongodb',
    name: 'MongoDB',
  },
  {
    link: '/animation',
    name: '📽 Animation',
  },
];

const Template = (args: { tags: any[]; limit: number; isLoading: boolean }) => (
  <TagList
    isLoading={args.isLoading}
    limit={args.limit}
    tags={args.tags.map((tag: any) => (
      <TagItem key={tag.link}>{tag.name}</TagItem>
    ))}
  />
);

export const Default = Template.bind({});
Default.args = { tags: mockTagsData.slice(0, 4) };

export const WithMoreTags = Template.bind({});
WithMoreTags.args = { tags: mockTagsData };

export const WithCustomLimit = Template.bind({});
WithCustomLimit.args = { tags: mockTagsData, limit: 6 };

export const Loading = Template.bind({});
Loading.args = { tags: [], isLoading: true };

export const AsLinks = () => (
  <TagList
    tags={mockTagsData.map((tag: any) => (
      <TagLink key={tag.link} href={tag.link}>
        {tag.name}
      </TagLink>
    ))}
  />
);
