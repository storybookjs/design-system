import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from './Link';
import { breakpoint, color, typography } from './shared/styles';
import { inlineGlow } from './shared/animation';

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    list-style: none;
  }
`;

const Tab = styled(Link)`
  padding: 10px 15px;
  line-height: 20px;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  color: ${color.mediumdark};
  white-space: nowrap;

  @media (min-width: ${breakpoint}px) {
    padding: 10px 20px;
  }

  &:hover {
    color: ${color.secondary};
  }

  ${(props) =>
    props.isLoading &&
    css`
      cursor: progress !important;
      > * {
        ${inlineGlow};
      }
    `}

  ${(props) =>
    props.isActive &&
    !props.loading &&
    css`
      color: ${color.secondary};
      box-shadow: ${color.secondary} 0 -3px 0 0 inset;
    `};
`;

export const LinkTabs = ({ isLoading, items, ...props }) => (
  <Wrapper {...props}>
    {items.map(({ key, label, ...item }) => (
      <li key={key}>
        <Tab isLoading={isLoading} {...item}>
          {label}
        </Tab>
      </li>
    ))}
  </Wrapper>
);

LinkTabs.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
};

LinkTabs.defaultProps = {
  isLoading: false,
  items: [],
};
