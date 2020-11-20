import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { Header } from './Header';
import { Link } from '../Link';
import { Button } from '../Button';
import StorybookLogo from '../../images/logo-storybook.svg';
import StorybookLogoInverted from '../../images/logo-storybook-inverted.svg';
import { breakpoint, typography, color } from '../shared/styles';
import { NavLink } from './NavLink';
import { NavItem } from './NavItem';
import { TooltipLinkList } from '../tooltip/TooltipLinkList';
import WithTooltip from '../tooltip/WithTooltip';
import { Icon } from '../Icon';
import { StoryLinkWrapper } from '../StoryLinkWrapper';

export default {
  title: 'Header',
  component: Header,
  subcomponents: { NavLink, NavItem },
  parameters: { layout: 'fullscreen' },
};

const LogoWrapper = styled.div`
  display: inline-block;
  align-self: stretch;
`;

const LogotypeWrapper = styled(Link)`
  display: inline-block;

  img {
    height: 22px;
    width: auto;
    margin-top: 14px;
    @media (min-width: ${breakpoint}px) {
      height: 26px;
      margin-top: 10px;
    }
    display: block;
    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);
    &:hover {
      transform: translate3d(0, -1px, 0);
    }
    &:active {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Version = styled(Link)`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  position: relative;
  top: 2px;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
`;

const Logo = () => (
  <LogoWrapper>
    <LogotypeWrapper href="/">
      <img src={StorybookLogo} alt="Storybook" />
    </LogotypeWrapper>
    <Version href="https://github.com/storybookjs/storybook/releases">v6.0</Version>
  </LogoWrapper>
);

const links = (
  <>
    <NavItem showDesktop>
      <NavLink href="/docs">Docs</NavLink>
    </NavItem>
    <NavItem showDesktop>
      <NavLink href="/tutorials">Tutorials</NavLink>
    </NavItem>
    <NavItem showDesktop>
      <NavLink href="/releases">Releases</NavLink>
    </NavItem>
    <NavItem showDesktop>
      <NavLink href="/addons">Addons</NavLink>
    </NavItem>
  </>
);

const mobileMenu = (
  <TooltipLinkList
    links={[
      {
        title: 'Docs',
        href: '/docs',
      },
      {
        title: 'Tutorials',
        href: '/tutorials',
      },
      {
        title: 'Releases',
        href: '/releases',
      },
      {
        title: 'Addons',
        href: '/addons',
      },
    ]}
  />
);

export const Basic = () => <Header logo={<Logo />} links={links} mobileMenu={mobileMenu} />;

export const WithLinkWrapper = () => (
  <Header
    logo={<Logo />}
    links={
      <>
        <NavItem showDesktop>
          <NavLink LinkWrapper={StoryLinkWrapper} to="/docs">
            Docs
          </NavLink>
        </NavItem>
        <NavItem showDesktop>
          <NavLink LinkWrapper={StoryLinkWrapper} to="/tutorials">
            Tutorials
          </NavLink>
        </NavItem>
        <NavItem showDesktop>
          <NavLink LinkWrapper={StoryLinkWrapper} to="/releases">
            Releases
          </NavLink>
        </NavItem>
        <NavItem showDesktop>
          <NavLink LinkWrapper={StoryLinkWrapper} to="/addons">
            Addons
          </NavLink>
        </NavItem>
      </>
    }
    mobileMenu={mobileMenu}
  />
);

export const WithGithubButton = () => (
  <Header
    logo={<Logo />}
    links={links}
    mobileMenu={mobileMenu}
    github={<GitHubButton type="stargazers" namespace="storybookjs" repo="storybook" />}
  />
);

export const WithDropDown = () => (
  <Header
    logo={<Logo />}
    links={
      <>
        {links}
        <NavItem showDesktop>
          <WithTooltip
            tagName="span"
            placement="top"
            trigger="click"
            tooltip={
              <TooltipLinkList
                links={[
                  {
                    title: 'Get involved',
                    href: '#',
                  },
                  {
                    title: 'Use cases',
                    href: '#',
                  },
                  {
                    title: 'Support',
                    href: '#',
                  },
                  {
                    title: 'team',
                    href: '#',
                  },
                ]}
              />
            }
          >
            <NavLink>
              Community <Icon icon="arrowdown" />
            </NavLink>
          </WithTooltip>
        </NavItem>
      </>
    }
    mobileMenu={mobileMenu}
  />
);

export const WithCustomLink = () => (
  <Header
    logo={<Logo />}
    links={
      <>
        {links}
        <NavItem showDesktop>
          <NavLink primary href="/start">
            Go to app <Icon icon="arrowrightalt" aria-hidden />
          </NavLink>
        </NavItem>
      </>
    }
    mobileMenu={mobileMenu}
  />
);

const InvertedLogotypeWrapper = styled(Link)`
  display: inline-block;

  img {
    height: 22px;
    width: auto;

    @media (min-width: ${breakpoint}px) {
      height: 26px;
    }
    display: block;
    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);
    &:hover {
      transform: translate3d(0, -1px, 0);
    }
    &:active {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Inverted = () => (
  <div style={{ backgroundColor: color.darkest, paddingBottom: 16 }}>
    <Header
      inverse
      logo={
        <InvertedLogotypeWrapper href="/" inverse>
          <img src={StorybookLogoInverted} alt="Learn Storybook" />
        </InvertedLogotypeWrapper>
      }
      links={
        <>
          <NavItem showDesktop>
            <NavLink href="/docs">Docs</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/tutorials">Tutorials</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/releases">Releases</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/addons">Addons</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <Button appearance="inverseOutline" isLink href="/start">
              Sign in
            </Button>
          </NavItem>
        </>
      }
      mobileMenu={mobileMenu}
    />
  </div>
);
