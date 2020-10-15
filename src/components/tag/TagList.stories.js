import React from 'react';
import { TagList } from './TagList';
import { TagItem } from './TagItem';

export default {
  component: TagList,
  excludeStories: /.*Data$/,
  title: 'Design System/Tag/TagList',
};

export const Default = () => (
  <TagList
    tags={mockTagsData.slice(0, 4).map((tag) => (
      <TagItem key={tag.link} href={tag.link}>
        {tag.name}
      </TagItem>
    ))}
  />
);

export const WithMoreTags = () => (
  <TagList
    tags={mockTagsData.map((tag) => (
      <TagItem key={tag.link} href={tag.link}>
        {tag.name}
      </TagItem>
    ))}
  />
);

export const WithCustomLimit = () => (
  <TagList
    tags={mockTagsData.map((tag) => (
      <TagItem key={tag.link} href={tag.link}>
        {tag.name}
      </TagItem>
    ))}
    limit={6}
  />
);

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
