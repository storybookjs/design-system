import React from 'react';
import { styled } from '@storybook/theming';
import type { StyledComponent } from '@storybook/theming';
import { typography } from '../shared/styles';
import { Link } from '../Link';

type MenuLinkProps = React.ComponentProps<typeof Link> & {
  isActive?: boolean;
};

export const MenuLink: StyledComponent<MenuLinkProps> = styled(
  ({ isActive, ...rest }: MenuLinkProps) => <Link {...rest} tertiary={!isActive} />
)<MenuLinkProps>`
  outline: none;
  font-weight: ${(props) => (props.isActive ? typography.weight.bold : typography.weight.regular)};
  line-height: 24px;
  text-align: left;
`;
