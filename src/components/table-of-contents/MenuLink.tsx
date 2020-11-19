import React from 'react';
import styled from 'styled-components';
import { color, typography } from '../shared/styles';
import { Link, LinkProps } from '../Link';

type MenuLinkProps = LinkProps & {
  isActive?: boolean;
};

export const MenuLink = styled(({ isActive, ...rest }) => <Link {...rest} />)<MenuLinkProps>`
  outline: none;
  color: ${(props) => (props.isActive ? color.secondary : color.darker)};
  font-weight: ${(props) => (props.isActive ? typography.weight.bold : typography.weight.regular)};
  line-height: 24px;
  text-align: left;
`;
