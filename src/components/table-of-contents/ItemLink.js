import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography } from '../shared/styles';
import { Link } from '../Link';
import { MenuLink } from './MenuLink';

const ItemLinkWrapper = styled.li`
  list-style-type: none;

  &:last-of-type ${MenuLink} {
    margin-bottom: 0;
  }
`;

export function ItemLink({ currentPath, item }) {
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
