import React from 'react';
import styled from 'styled-components';
import { color } from '../shared/styles';
// @ts-ignore
import WithTooltip from '../tooltip/WithTooltip';
// @ts-ignore
import { Link } from '../Link';
// @ts-ignore
import { Icon } from '../Icon';
import { NavGroup, Nav, NavWrapper } from './Nav';
import { NavItem } from './NavItem';
import { HeaderContext, defaultHeaderContext } from './HeaderContext';

const GitHubWrapper = styled.div`
  transform: scale(0.84);
  margin-left: -10px;
  margin-right: -10px;

  ${'' /* Overrides to make a medium sized button */};
  .github-btn {
    font: bold 14px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: auto;
    .gh-btn,
    .gh-count {
      padding: 4px 8px;
    }
  }
`;

const GithubNavItem = styled(NavItem)`
  display: none;

  @media (min-width: 375px) {
    display: inline-flex;
    align-items: center;
  }
`;

const MobileMenuTooltip = styled(WithTooltip)`
  &:focus svg {
    color: ${color.secondary};
  }
`;

const Menu = styled(Link)`
  width: 3rem;
  border: none !important;
  text-decoration: none !important;
  svg {
    height: 18px;
    width: 18px;
    margin: 0;
    margin-right: -4px !important;
  }
`;

type HeaderProps = {
  logo: React.ReactNode;
  github?: React.ReactNode;
  links: React.ReactNode;
  mobileMenu: React.ReactNode | (() => React.ReactNode);
  inverse?: boolean;
  navBreakpoint?: number;
};

export function Header({
  logo,
  links,
  github,
  mobileMenu,
  inverse = defaultHeaderContext.inverse,
  navBreakpoint = defaultHeaderContext.navBreakpoint,
  ...props
}: HeaderProps) {
  return (
    <HeaderContext.Provider
      value={{
        navBreakpoint,
        inverse,
      }}
    >
      <NavWrapper {...props}>
        <Nav>
          <NavGroup navBreakpoint={navBreakpoint}>
            <NavItem>{logo}</NavItem>
          </NavGroup>

          <NavGroup navBreakpoint={navBreakpoint} withRightAlignment>
            {links}

            {github && (
              <GithubNavItem showDesktop className="chromatic-ignore">
                <GitHubWrapper>{github}</GitHubWrapper>
              </GithubNavItem>
            )}

            <NavItem showMobile>
              <MobileMenuTooltip
                tagName="span"
                placement="top"
                trigger="click"
                tooltip={mobileMenu}
              >
                <Menu secondary inverse={inverse} icon={1} isButton>
                  <Icon icon="menu" aria-label="Menu" />
                </Menu>
              </MobileMenuTooltip>
            </NavItem>
          </NavGroup>
        </Nav>
      </NavWrapper>
    </HeaderContext.Provider>
  );
}

Header.defaultProps = {
  inverse: false,
};
