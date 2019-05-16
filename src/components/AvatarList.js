import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, sizes } from './Avatar';
import WithTooltip from './tooltip/WithTooltip';
import { TooltipNote } from './tooltip/TooltipNote';
import { color, typography } from './shared/styles';

const User = styled(Avatar)`
  box-shadow: ${color.lightest} 0 0 0 2px;
  display: block;
`;

const UserWrapper = styled(WithTooltip)``;

const UserEllipses = styled.div`
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
  margin-left: 6px;
  white-space: nowrap;
`;

const Users = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;

  ${UserWrapper} {
    position: relative;

    &:not(:first-child) {
      margin-left: -6px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`;

// Either pass the full list of users, or a userCount if known
export function AvatarList({ loading, users, userCount, size, ...props }) {
  const count = userCount || users.length;
  return (
    <Users {...props}>
      {users.slice(0, 3).map(({ id, name, avatarUrl }) => (
        <UserWrapper
          key={id}
          hasChrome={false}
          placement="bottom"
          mode="hover"
          tooltip={<TooltipNote note={name} />}
        >
          <User size={size} username={name} src={avatarUrl} loading={loading} />
        </UserWrapper>
      ))}
      {count > 3 && <UserEllipses> &#43; {count - 3} </UserEllipses>}
    </Users>
  );
}

AvatarList.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
  userCount: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

AvatarList.defaultProps = {
  loading: false,
  users: [
    { id: 'loading', avatarUrl: null, name: 'loading' },
    { id: 'loading2', avatarUrl: null, name: 'loading' },
    { id: 'loading3', avatarUrl: null, name: 'loading' },
  ],
  userCount: null,
  size: 'medium',
};
