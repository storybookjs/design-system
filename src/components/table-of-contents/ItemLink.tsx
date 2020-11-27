import React from 'react';
import styled from 'styled-components';
import { MenuLink } from './MenuLink';
import { LinkProps } from '../Link';

const ItemLinkWrapper = styled.li`
  list-style-type: none;

  &:last-of-type ${MenuLink} {
    margin-bottom: 0;
  }
`;

export interface LinkItem extends Pick<LinkProps, 'LinkWrapper'> {
  path: string;
  title: string;
}

interface ItemLinkProps {
  currentPath: string;
  item: LinkItem;
}

export function ItemLink({ currentPath, item }: ItemLinkProps) {
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
