import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TableOfContentsItems, ITEM_TYPES } from './TableOfContentsItems';
import { breakpoint, color, typography } from '../shared/styles';
import { Icon } from '../Icon';
import { Link } from '../Link';

const toKebabcase = (string) => string.toLowerCase().split(' ').join('-');

const hasActiveChildren = (args) => {
  const { children, currentPath } = args;

  return !!children.find(
    (child) =>
      child.path === currentPath ||
      (child.children && hasActiveChildren({ ...args, children: child.children }))
  );
};

const getOpenState = ({
  item,
  globalItemUpdate = {},
  singleItemUpdate = {},
  lastFocusedId,
  currentPath,
  didChangeCurrentPath,
}) => {
  const withActiveChildren = hasActiveChildren({
    children: item.children,
    currentPath,
    lastFocusedId,
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

const mapItemIds = (items, depth = 0) =>
  items.map((item) => ({
    ...item,
    id: `${toKebabcase(item.title)}-${depth}`,
    ...(item.children && {
      children: mapItemIds(item.children, depth + 1),
    }),
  }));

// Add UI state to the 'items' that are passed in as props
const mapItemUIState = (args) => {
  const {
    items,
    currentPath,
    didChangeCurrentPath,
    depth = 0,
    globalItemUpdate,
    singleItemUpdate,
    lastFocusedId,
  } = args;

  return items.map((item) => {
    const isMenuWithChildren = item.type === ITEM_TYPES.MENU && !!item.children;

    return {
      ...item,
      // The concept of 'isOpen' only applies to menus that have children
      ...(isMenuWithChildren && {
        isOpen: getOpenState({
          item,
          globalItemUpdate,
          singleItemUpdate,
          lastFocusedId,
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

// State management and event handlers for the TableOfContentsItems
export function TableOfContents({ children, currentPath, items, ...rest }) {
  const [itemsWithIds] = useState(mapItemIds(items));
  const [itemsWithUIState, setItemsWithUIState] = useState(
    mapItemUIState({ currentPath, items: itemsWithIds })
  );
  const uiStateCommonArgs = { currentPath, items: itemsWithUIState };
  const toggleAllOpenStates = (isOpen) =>
    setItemsWithUIState(mapItemUIState({ ...uiStateCommonArgs, globalItemUpdate: { isOpen } }));
  const toggleAllOpen = () => toggleAllOpenStates(true);
  const toggleAllClosed = () => toggleAllOpenStates(false);
  const setMenuOpenStateById = (args) => {
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
    (item) => item.type === ITEM_TYPES.MENU && item.isOpen
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

TableOfContents.propTypes = {
  children: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(ITEM_TYPES)).isRequired,
    }).isRequired
  ).isRequired,
};

TableOfContents.defaultProps = {
  children: undefined,
};
