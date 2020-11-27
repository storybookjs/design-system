import React from 'react';
import styled from 'styled-components';
import { typography } from '../shared/styles';
import { Link } from '../Link';

type MenuLinkProps = React.ComponentProps<typeof Link> & {
  isActive?: boolean;
};

export const MenuLink = styled(({ isActive, ...rest }) => <Link {...rest} tertiary={!isActive} />)<
  MenuLinkProps
>`
  outline: none;
  font-weight: ${(props) => (props.isActive ? typography.weight.bold : typography.weight.regular)};
  line-height: 24px;
  text-align: left;
`;
