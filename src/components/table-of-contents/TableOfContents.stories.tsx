import React, { useState } from 'react';
import { TableOfContents, TableOfContentsProps } from './TableOfContents';
import { Item, ItemType } from './TableOfContentsItems';
// @ts-ignore
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  title: 'TableOfContents',
  component: TableOfContents,
  decorators: [
    (storyFn: any) => <div style={{ width: 240, outline: '1px dotted grey' }}>{storyFn()}</div>,
  ],
};

const items: Item[] = [
  {
    title: 'Get Started',
    type: ItemType.MENU,
    children: [
      {
        path: '/introduction',
        title: 'Introduction',
        type: ItemType.BULLET_LINK,
      },
      {
        path: '/setup',
        title: 'Setup',
        type: ItemType.BULLET_LINK,
      },
      {
        path: '/write-a-story',
        title: 'Write a story',
        type: ItemType.BULLET_LINK,
      },
    ],
  },
  {
    title: '😀 Customize',
    type: ItemType.MENU,
    children: [
      {
        title: 'User interface',
        type: ItemType.MENU,
        children: [
          {
            path: '/features-and-behavior',
            title: 'features and behavior dolor sit amet consectatur',
            type: ItemType.LINK,
          },
          {
            path: '/theming',
            title: 'Theming',
            type: ItemType.LINK,
          },
        ],
      },
      {
        title: 'Head tags',
        type: ItemType.LINK,
        path: '/head-tags',
      },
      {
        title: 'Body tags',
        type: ItemType.LINK,
        path: '/body-tags',
      },
    ],
  },
  {
    title: '⚙️ Super long root heading that is very long',
    type: ItemType.MENU,
    children: [
      {
        title: 'Verbose menu link that is extremely lengthy',
        type: ItemType.MENU,
        children: [
          {
            path: '/lorem-ipsum',
            title: 'Lorem ipsum dolor sit amet consectatur',
            type: ItemType.LINK,
          },
          {
            path: '/theming',
            title: 'Theming',
            type: ItemType.LINK,
          },
        ],
      },
      {
        title: 'Head tags',
        type: ItemType.LINK,
        path: '/head-tags',
      },
      {
        title: 'Body tags',
        type: ItemType.LINK,
        path: '/body-tags',
      },
    ],
  },
];

const findPaths = (pathItems: Item[]) =>
  // @ts-ignore
  pathItems.flatMap((item: Item) => item.path || findPaths(item.children));
const paths = findPaths(items);

export const BasicFlat = (args: TableOfContentsProps) => <TableOfContents {...args} />;
BasicFlat.args = {
  currentPath: '/essentials',
  items: [
    {
      title: '⭐️  Popular',
      path: '/popular',
      type: ItemType.LINK,
    },
    {
      title: '🧩  Essentials',
      path: '/essentials',
      type: ItemType.LINK,
    },
    {
      title: '🛠  Code',
      path: '/code',
      type: ItemType.LINK,
    },
    {
      title: '⚡️  Data & state',
      path: '/Data & state',
      type: ItemType.LINK,
    },
    {
      title: '💅  Style',
      path: '/style',
      type: ItemType.LINK,
    },
    {
      title: '🎨  Design',
      path: '/design',
      type: ItemType.LINK,
    },
    {
      title: '⚙️  Appearance',
      path: '/appearance',
      type: ItemType.LINK,
    },
    {
      title: '🗄  Organize',
      path: '/organize',
      type: ItemType.LINK,
    },
  ],
};

export const BasicNested = (args: TableOfContentsProps) => <TableOfContents {...args} />;
BasicNested.args = { currentPath: paths[0], items };

export const NestedActivePath = BasicNested.bind({});
NestedActivePath.args = { currentPath: '/features-and-behavior', items };

const addLinkWrappers = (itemsToCompose: Item[]): Item[] =>
  itemsToCompose.map((item: Item) => {
    if (item.type === ItemType.LINK || item.type === ItemType.BULLET_LINK)
      return { ...item, LinkWrapper: StoryLinkWrapper };
    if (item.children) return { ...item, children: addLinkWrappers(item.children) };
    return item;
  });
const itemsWithLinkWrappers = addLinkWrappers(items);
export const LinkWrappers = BasicNested.bind({});
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
