import React, { useState } from 'react';
import { TableOfContents } from './TableOfContents';
import { StoryLinkWrapper } from './StoryLinkWrapper';

export default {
  title: 'Design System/Table of Contents',
  component: TableOfContents,
};

const items = [
  {
    title: 'Get Started',
    type: 'menu',
    children: [
      {
        path: '/introduction',
        title: 'Introduction',
        type: 'bullet-link',
      },
      {
        path: '/setup',
        title: 'Setup',
        type: 'bullet-link',
      },
      {
        path: '/write-a-story',
        title: 'Write a story',
        type: 'bullet-link',
      },
    ],
  },
  {
    title: 'Customize',
    type: 'menu',
    children: [
      {
        title: 'User interface',
        type: 'menu',
        children: [
          {
            path: '/features-and-behavior',
            title: 'Features and behavior',
            type: 'link',
          },
          {
            path: '/theming',
            title: 'Theming',
            type: 'link',
          },
        ],
      },
      {
        title: 'Head tags',
        type: 'link',
        path: '/head-tags',
      },
      {
        title: 'Body tags',
        type: 'link',
        path: '/body-tags',
      },
    ],
  },
];

const findPaths = (pathItems) => pathItems.flatMap((item) => item.path || findPaths(item.children));
const paths = findPaths(items);

export const Basic = (args) => <TableOfContents {...args} />;
Basic.args = { currentPath: paths[0], items };

export const NestedActivePath = Basic.bind();
NestedActivePath.args = { currentPath: '/features-and-behavior', items };

const addLinkWrappers = (itemsToCompose) =>
  itemsToCompose.map((item) => {
    if (item.type === 'link' || item.type === 'bullet-link')
      return { ...item, LinkWrapper: StoryLinkWrapper };
    if (item.children) return { ...item, children: addLinkWrappers(item.children) };
    return item;
  });
const itemsWithLinkWrappers = addLinkWrappers(items);
export const LinkWrappers = Basic.bind();
LinkWrappers.args = { currentPath: paths[0], items: itemsWithLinkWrappers };

export const WithOpenControls = () => (
  <TableOfContents currentPath={paths[0]} items={items}>
    {({ menu, toggleAllOpen, toggleAllClosed }) => (
      <>
        <div style={{ marginBottom: '10px' }}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={toggleAllOpen}>Open all</button>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={toggleAllClosed}>Close all</button>
        </div>

        {menu}
      </>
    )}
  </TableOfContents>
);

export const WithPathSwitcher = () => {
  const [currentPath, setCurrentPath] = useState(paths[0]);
  const cyclePath = () => {
    const currentIndex = paths.indexOf(currentPath);
    setCurrentPath(paths[currentIndex + 1] || paths[0]);
  };

  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button style={{ marginBottom: '10px' }} onClick={cyclePath}>
        Change path
      </button>
      <TableOfContents currentPath={currentPath} items={items} />
    </>
  );
};
