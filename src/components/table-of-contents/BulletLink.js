import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography } from '../shared/styles';
import { Link } from '../Link';

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
    list-style-type: none;
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

export function BulletLink({ currentPath, item, ...rest }) {
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
