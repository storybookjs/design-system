import styled, { css } from 'styled-components';
import { pageMargins, breakpoint } from '../shared/styles';
import { StyledNavItem } from './NavItem';

export const Nav = styled.div`
  height: 3rem;
  position: relative;
  text-align: center;
  z-index: 3;
`;

export const NavWrapper = styled.nav`
  ${pageMargins}

  padding-top: 12px;

  @media (min-width: ${breakpoint}px) {
    padding-top: 36px;
  }
`;

type NavGroupProps = {
  withRightAlignment?: boolean;
};

export const NavGroup = styled.div<NavGroupProps & { navBreakpoint: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;

  ${(props) =>
    props.withRightAlignment &&
    css`
      left: auto;
      right: 0;
    `}

  @media (min-width: ${(props) => props.navBreakpoint}px) {
    ${StyledNavItem} + ${StyledNavItem} {
      margin-left: 25px;
    }
  }
`;

NavGroup.defaultProps = {
  withRightAlignment: false,
};
