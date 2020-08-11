import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BulletLink } from './BulletLink';
import { ItemLink } from './ItemLink';
import { MenuLink } from './MenuLink';
import { color, typography } from '../shared/styles';
import { Icon } from '../Icon';
import { Link } from '../Link';

const MENU = 'menu';
const LINK = 'link';
const BULLET_LINK = 'bullet-link';
export const ITEM_TYPES = Object.freeze({
  MENU,
  LINK,
  BULLET_LINK,
});

const getItemComponent = (itemType) => {
  switch (itemType) {
    case ITEM_TYPES.MENU:
      return Menu;
    case ITEM_TYPES.LINK:
      return ItemLink;
    case ITEM_TYPES.BULLET_LINK:
      return BulletLink;
    default:
      return null;
  }
};

const TopLevelMenuToggle = styled(Link).attrs({ isButton: true, tertiary: true })`
  font-weight: ${typography.weight.bold};
  line-height: 24px;
  word-break: break-word;
  text-align: left;

  > span {
    display: flex;

    svg {
      flex: none;
    }

    span {
      flex: 1;
    }
  }
`;

const ArrowIcon = styled(Icon).attrs({ icon: 'arrowright' })`
  && {
    width: 12px;
    height: 12px;
    color: ${color.mediumdark};
    transform: translateY(1px) ${(props) => props.isOpen && `rotate(90deg)`};
    ${(props) => (props.isTopLevel ? `margin-right: 8px;` : `margin-left: 8px;`)}
    bottom: -0.25em;
  }
`;

function Menu({ isTopLevel, item, setMenuOpenStateById, ...rest }) {
  if (!item.children) return null;
  const arrow = <ArrowIcon isOpen={item.isOpen} isTopLevel={isTopLevel} aria-hidden />;
  const MenuToggle = isTopLevel ? TopLevelMenuToggle : MenuLink;
  const toggleOpenState = () => setMenuOpenStateById({ id: item.id, isOpen: !item.isOpen });

  return (
    <li>
      {isTopLevel ? (
        <TopLevelMenuToggle onClick={toggleOpenState}>
          {arrow}
          <span>{item.title}</span>
        </TopLevelMenuToggle>
      ) : (
        <MenuLink isButton onClick={toggleOpenState}>
          {item.title}
          {arrow}
        </MenuLink>
      )}
      {item.isOpen && (
        <TableOfContentsItems
          items={item.children}
          isTopLevel={false}
          setMenuOpenStateById={setMenuOpenStateById}
          {...rest}
        />
      )}
    </li>
  );
}

Menu.propTypes = {
  isTopLevel: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  setMenuOpenStateById: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isTopLevel: false,
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    padding-top: 12px;

    &:first-child {
      padding-top: 0;
    }
  }

  ${(props) =>
    props.isTopLevel &&
    `  
    > li {
      padding-top: 24px;

      ul, ol {
        padding-top: 12px;
        display: flex;
        flex-direction: column;
      }
      
      > ul { 
        padding-left: 35px;

        > li ul {
          padding-left: 15px;
        }
      }

      > ol {
        padding-left: 20px;
    
      }
    }
  `}
`;

export function TableOfContentsItems({ className, currentPath, isTopLevel, items, ...rest }) {
  const isOrderedList = items.every((item) => item.type === ITEM_TYPES.BULLET_LINK);

  return (
    <List className={className} isTopLevel={isTopLevel} as={isOrderedList ? 'ol' : 'ul'}>
      {items.map((item) => {
        const ItemComponent = getItemComponent(item.type);
        return (
          <ItemComponent
            key={item.title}
            currentPath={currentPath}
            item={item}
            isTopLevel={isTopLevel}
            {...rest}
          />
        );
      })}
    </List>
  );
}

TableOfContentsItems.propTypes = {
  className: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  isTopLevel: PropTypes.bool.isRequired,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(ITEM_TYPES)).isRequired,
    }).isRequired
  ).isRequired,
};

TableOfContentsItems.defaultProps = {
  className: '',
};
