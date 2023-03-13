import React, { ComponentProps, forwardRef, useContext } from 'react';
import { styled } from '@storybook/theming';
import { Link } from '../Link';
import { typography } from '../shared/styles';
import { HeaderContext } from './HeaderContext';

const StyledNavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
`;

type NavLinkProps = ComponentProps<typeof Link>;
type NavLinkRef = ((props: NavLinkProps) => JSX.Element) & { displayName?: string };

export const NavLink: NavLinkRef = forwardRef<HTMLAnchorElement | HTMLButtonElement, NavLinkProps>(
  (props, ref) => {
    const { inverse } = useContext(HeaderContext);
    return <StyledNavLink ref={ref} inverse={inverse} tertiary={!inverse} {...props} />;
  }
);

NavLink.displayName = 'NavLink';
