import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const List = styled.ul`
  min-width: 180px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export function TooltipLinkList({ links, LinkWrapper, ...rest }) {
  return (
    <List {...rest}>
      {links.map(({ title, onClick, active, ...linkRest }, index) => (
        <ListItem
          /* eslint-disable react/no-array-index-key */
          key={index}
          title={title}
          onClick={onClick}
          active={active}
          LinkWrapper={LinkWrapper || null}
          {...linkRest}
        />
      ))}
    </List>
  );
}

TooltipLinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    }).isRequired
  ).isRequired,
  LinkWrapper: PropTypes.func,
};

TooltipLinkList.defaultProps = {
  LinkWrapper: ListItem.defaultProps.LinkWrapper,
};
