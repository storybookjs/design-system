import React from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import { BulletLink, BulletLinkItem } from './BulletLink';
// @ts-ignore
import { ItemLink, LinkItem } from './ItemLink';
// @ts-ignore
import { MenuLink } from './MenuLink';
import { color, typography } from '../shared/styles';
import { Icon } from '../Icon';
import { Link } from '../Link';

type SetMenuOpenStateById = (args: { id: string; isOpen: boolean }) => void;

export enum ItemType {
  MENU = 'menu',
  LINK = 'link',
  BULLET_LINK = 'bullet-link',
}

export interface Item {
  title: string;
  type: ItemType;
  path?: string;
  children?: Item[];
}

export interface ItemWithId extends Item {
  id: string;
}

export interface ItemWithStateAndId extends ItemWithId {
  isOpen?: boolean;
  children: ItemWithStateAndId[];
}

interface ItemComponent {
  currentPath: string;
  item: ItemWithStateAndId;
  isTopLevel: boolean;
  setMenuOpenStateById?: SetMenuOpenStateById;
}

const ItemComponent = ({ currentPath, item, isTopLevel, setMenuOpenStateById }: ItemComponent) => {
  if (item.type === ItemType.MENU) {
    return (
      <Menu
        currentPath={currentPath}
        item={item}
        isTopLevel={isTopLevel}
        setMenuOpenStateById={setMenuOpenStateById}
      />
    );
  }
  if (item.type === ItemType.LINK && item.path !== undefined) {
    return <ItemLink currentPath={currentPath} item={item as LinkItem} />;
  }
  if (item.type === ItemType.BULLET_LINK && item.path !== undefined) {
    return <BulletLink currentPath={currentPath} item={item as BulletLinkItem} />;
  }
  return null;
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

interface ArrowIconProps {
  isOpen?: boolean;
  isTopLevel?: boolean;
}

const ArrowIcon = styled(Icon).attrs({ icon: 'arrowright' })<ArrowIconProps>`
  && {
    width: 12px;
    height: 12px;
    color: ${color.mediumdark};
    transform: translateY(1px) ${(props) => props.isOpen && `rotate(90deg)`};
    ${(props) => (props.isTopLevel ? `margin-right: 8px;` : `margin-left: 8px;`)}
    bottom: -0.25em;
  }
`;

interface MenuProps {
  isTopLevel?: boolean;
  item: ItemWithStateAndId;
  setMenuOpenStateById: SetMenuOpenStateById;
  currentPath: string;
}

function Menu({ isTopLevel, item, setMenuOpenStateById, currentPath, ...rest }: MenuProps) {
  if (!item.children) return null;
  const arrow = <ArrowIcon isOpen={item.isOpen} isTopLevel={isTopLevel} aria-hidden />;
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
          currentPath={currentPath}
          {...rest}
        />
      )}
    </li>
  );
}

Menu.defaultProps = {
  isTopLevel: false,
};

const List = styled.ul<{ isTopLevel?: boolean; isFlatList?: boolean }>`
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
    css`
      > li {
        padding-top: ${props.isFlatList ? 16 : 24}px;

        ul,
        ol {
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

export interface TableOfContentsItemsProps {
  className?: string;
  currentPath: string;
  isTopLevel: boolean;
  items: ItemWithStateAndId[];
  setMenuOpenStateById?: SetMenuOpenStateById;
}

export function TableOfContentsItems({
  className,
  currentPath,
  isTopLevel = false,
  items,
  setMenuOpenStateById,
  ...rest
}: TableOfContentsItemsProps) {
  const isOrderedList = items.every((item) => item.type === ItemType.BULLET_LINK);
  const isFlatList = items.every((item) => item.type === ItemType.LINK);

  return (
    <List
      className={className}
      isTopLevel={isTopLevel}
      isFlatList={isFlatList}
      as={isOrderedList ? 'ol' : 'ul'}
    >
      {items.map((item) => {
        return (
          <ItemComponent
            key={item.title}
            currentPath={currentPath}
            item={item}
            isTopLevel={isTopLevel}
            setMenuOpenStateById={setMenuOpenStateById}
            {...rest}
          />
        );
      })}
    </List>
  );
}

TableOfContentsItems.defaultProps = {
  className: '',
};
