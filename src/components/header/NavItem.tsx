import React, { forwardRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { HeaderContext } from './HeaderContext';

type StyledNavItemProps = {
  showDesktop?: boolean;
  showMobile?: boolean;
};

export const StyledNavItem = styled.div<StyledNavItemProps & { navBreakpoint: number }>`
  display: inline-flex;
  height: 3rem;
  line-height: 3rem;
  align-items: center;

  svg {
    margin-right: 0;
  }

  ${(props) =>
    props.showDesktop &&
    css`
      display: none;
      @media (min-width: ${props.navBreakpoint}px) {
        display: inline-flex;
      }
    `}

  ${(props) =>
    props.showMobile &&
    css`
      @media (min-width: ${props.navBreakpoint}px) {
        display: none;
      }
    `}
`;

type NavItemProps = React.ComponentPropsWithoutRef<'div'> & StyledNavItemProps;

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>((props, ref) => {
  const { navBreakpoint } = useContext(HeaderContext);
  return <StyledNavItem ref={ref} navBreakpoint={navBreakpoint} {...props} />;
});
