import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoint, color, typography } from '../shared/styles';
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

const StyledBulletLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  display: inline-block;
  padding: 6px 0;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  ${(props) => props.isActive && `font-weight: ${typography.weight.bold};`}

  &::after {
    position: absolute;
    top: 0px;
    right: auto;
    bottom: 0px;
    left: 3px;
    width: auto;
    height: auto;
    border-left: 1px solid ${color.mediumlight};
    content: '';
    z-index: -1;
  }
`;

const BulletLinkWrapper = styled.li`
  && {
    padding-top: 0;
  }

  &:first-of-type ${StyledBulletLink} {
    margin-top: -6px;

    &::after {
      height: 50%;
      top: 50%;
    }
  }

  &:last-of-type ${StyledBulletLink} {
    margin-bottom: -6px;

    &::after {
      height: 50%;
      bottom: 50%;
    }
  }
`;

const Bullet = styled.span`
  display: inline-block;
  margin-bottom: 1px;
  margin-right: 16px;
  background: ${color.medium};
  box-shadow: white 0 0 0 4px;
  height: 8px;
  width: 8px;
  border-radius: 1em;
  text-decoration: none !important;
  content: '';
  ${(props) => props.isActive && `background: ${color.secondary};`}
`;

function BulletLink({ currentPath, item, ...rest }) {
  const isActive = currentPath === item.path;

  return (
    <BulletLinkWrapper>
      <StyledBulletLink
        isActive={isActive}
        href={item.path}
        LinkWrapper={item.LinkWrapper}
        tertiary={!isActive}
      >
        <Bullet isActive={isActive} />
        {item.title}
      </StyledBulletLink>
    </BulletLinkWrapper>
  );
}

BulletLink.propTypes = {
  currentPath: PropTypes.string.isRequired,
  item: PropTypes.shape({
    LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const TopLevelMenuToggle = styled(Link).attrs({ isButton: true, tertiary: true })`
  font-weight: ${typography.weight.bold};
`;

const MenuLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  color: ${(props) => (props.isActive ? color.secondary : color.darkest)};
  font-weight: ${(props) => (props.isActive ? typography.weight.bold : typography.weight.regular)};
`;

const MenuChild = styled.div`
  padding-left: 22px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
`;

const ArrowIcon = styled(Icon).attrs({ icon: 'arrowright' })`
  && {
    width: 14px;
    width: 14px;
    color: ${color.mediumdark};
    transform: translateY(1px) ${(props) => props.isOpen && `rotate(90deg)`};
    ${(props) => (props.isTopLevel ? `margin-right: 8px;` : `margin-left: 8px;`)}
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
          {item.title}
        </TopLevelMenuToggle>
      ) : (
        <MenuLink isButton onClick={toggleOpenState}>
          {item.title}
          {arrow}
        </MenuLink>
      )}
      {item.isOpen && (
        <MenuChild>
          <TableOfContentsItems
            items={item.children}
            isTopLevel={false}
            setMenuOpenStateById={setMenuOpenStateById}
            {...rest}
          />
        </MenuChild>
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

const ItemLinkWrapper = styled.li`
  &:last-of-type ${MenuLink} {
    margin-bottom: 0;
  }
`;

function ItemLink({ currentPath, item }) {
  return (
    <ItemLinkWrapper>
      <MenuLink
        isActive={currentPath === item.path}
        href={item.path}
        LinkWrapper={item.LinkWrapper}
        tertiary
      >
        {item.title}
      </MenuLink>
    </ItemLinkWrapper>
  );
}

ItemLink.propTypes = {
  currentPath: PropTypes.string.isRequired,
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    title: PropTypes.string.isRequired,
  }).isRequired,
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
      padding-top: 20px;
    }
  `}
`;

export function TableOfContentsItems({ currentPath, isTopLevel, items, ...rest }) {
  const isOrderedList = items.every((item) => item.type === ITEM_TYPES.BULLET_LINK);

  return (
    <List isTopLevel={isTopLevel} as={isOrderedList ? 'ol' : 'ul'}>
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
  currentPath: PropTypes.string.isRequired,
  isTopLevel: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(ITEM_TYPES)).isRequired,
    }).isRequired
  ).isRequired,
};
