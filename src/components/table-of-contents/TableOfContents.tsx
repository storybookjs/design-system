import React, { useEffect, useRef, useState } from 'react';
import {
  TableOfContentsItems,
  Item,
  ItemWithId,
  ItemWithStateAndId,
  ItemType,
} from './TableOfContentsItems';

type GlobalItemUpdate = { isOpen?: boolean };
type SingleItemUpdate = { isOpen?: boolean; id?: string };

const toKebabCase = (string: string) => string.toLowerCase().split(' ').join('-');

const hasActiveChildren = (args: { children: Item[]; currentPath: string }): boolean => {
  const { children, currentPath } = args;

  return !!children.find(
    (child) =>
      child.path === currentPath ||
      (child.children && hasActiveChildren({ ...args, children: child.children }))
  );
};

interface GetOpenStateArgs {
  item: ItemWithStateAndId;
  globalItemUpdate?: GlobalItemUpdate;
  singleItemUpdate?: SingleItemUpdate;
  currentPath: string;
  didChangeCurrentPath: boolean;
}

const getOpenState = ({
  item,
  globalItemUpdate = {},
  singleItemUpdate = {},
  currentPath,
  didChangeCurrentPath,
}: GetOpenStateArgs) => {
  const withActiveChildren = hasActiveChildren({
    children: item.children,
    currentPath,
  });

  // If there is no 'isOpen' field yet, set a default based on whether or not
  // any of the children are active.
  if (typeof item.isOpen !== 'boolean') return withActiveChildren;
  // Path changes should open up a tree for all parents of an active item.
  if (didChangeCurrentPath && withActiveChildren) return true;

  if (typeof globalItemUpdate.isOpen === 'boolean') return globalItemUpdate.isOpen;

  if (typeof singleItemUpdate.isOpen === 'boolean' && singleItemUpdate.id === item.id)
    return singleItemUpdate.isOpen;

  return item.isOpen;
};

const mapItemIds = (items: Item[], depth = 0): ItemWithId[] =>
  items.map((item) => ({
    ...item,
    id: `${toKebabCase(item.title)}-${depth}`,
    ...(item.children && {
      children: mapItemIds(item.children, depth + 1),
    }),
  }));

interface MapItemUIStateArgs {
  items: ItemWithStateAndId[];
  currentPath: string;
  depth?: number;
  didChangeCurrentPath?: boolean;
  globalItemUpdate?: GlobalItemUpdate;
  singleItemUpdate?: SingleItemUpdate;
}

// Add UI state to the 'items' that are passed in as props
const mapItemUIState = (args: MapItemUIStateArgs): ItemWithStateAndId[] => {
  const {
    items,
    currentPath,
    didChangeCurrentPath,
    depth = 0,
    globalItemUpdate,
    singleItemUpdate,
  } = args;

  return items.map((item) => {
    const isMenuWithChildren = item.type === ItemType.MENU && !!item.children;

    return {
      ...item,
      // The concept of 'isOpen' only applies to menus that have children
      ...(isMenuWithChildren && {
        isOpen: getOpenState({
          item,
          globalItemUpdate,
          singleItemUpdate,
          currentPath,
          didChangeCurrentPath,
        }),
      }),
      // Recursively set the state of children to an infinite depth.
      // getOpenState needs the children to have an id already to determine
      // if there is a focused child, hence the placement of the recursive
      // mapItemUIState call here before getOpenState is called.
      ...(item.children && {
        children: mapItemUIState({ ...args, items: item.children, depth: depth + 1 }),
      }),
    };
  });
};

export interface TableOfContentsProps {
  children?: (args: {
    menu: React.ReactNode;
    allTopLevelMenusAreOpen: boolean;
    toggleAllOpen: () => void;
    toggleAllClosed: () => void;
  }) => JSX.Element;
  currentPath: string;
  items: Item[];
}

// State management and event handlers for the TableOfContentsItems
export function TableOfContents({ children, currentPath, items, ...rest }: TableOfContentsProps) {
  const [itemsWithIds] = useState<ItemWithId[]>(mapItemIds(items));
  const [itemsWithUIState, setItemsWithUIState] = useState(
    mapItemUIState({ currentPath, items: itemsWithIds as ItemWithStateAndId[] })
  );
  const uiStateCommonArgs = { currentPath, items: itemsWithUIState };
  const toggleAllOpenStates = (isOpen: boolean) =>
    setItemsWithUIState(mapItemUIState({ ...uiStateCommonArgs, globalItemUpdate: { isOpen } }));
  const toggleAllOpen = () => toggleAllOpenStates(true);
  const toggleAllClosed = () => toggleAllOpenStates(false);
  const setMenuOpenStateById = (args: SingleItemUpdate) => {
    setItemsWithUIState(mapItemUIState({ ...uiStateCommonArgs, singleItemUpdate: args }));
  };

  const didRunCurrentPathEffectOnMount = useRef(false);
  useEffect(() => {
    if (didRunCurrentPathEffectOnMount.current) {
      setItemsWithUIState(mapItemUIState({ ...uiStateCommonArgs, didChangeCurrentPath: true }));
    } else {
      didRunCurrentPathEffectOnMount.current = true;
    }
  }, [currentPath]);

  const tableOfContentsMenu = (
    <TableOfContentsItems
      currentPath={currentPath}
      isTopLevel
      items={itemsWithUIState}
      setMenuOpenStateById={setMenuOpenStateById}
      {...rest}
    />
  );

  // Top level menu state is used to control expand/collapse buttons in consumers
  const allTopLevelMenusAreOpen = itemsWithUIState.every(
    (item) => item.type === ItemType.MENU && item.isOpen
  );

  return typeof children === 'function'
    ? children({
        menu: tableOfContentsMenu,
        allTopLevelMenusAreOpen,
        toggleAllOpen,
        toggleAllClosed,
      })
    : tableOfContentsMenu;
}

TableOfContents.defaultProps = {
  children: undefined,
};
