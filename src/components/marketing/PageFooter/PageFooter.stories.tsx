import React from 'react';
import { styled } from '@storybook/theming';

import { PageFooter } from './PageFooter';
import { Link } from '../../Link';
// @ts-ignore
import StorybookLogoSVG from '../../../images/logos/storybook.svg';

const LogotypeWrapper = styled(Link)`
  margin-bottom: 1rem;
  display: block;

  img {
    height: 28px;
    width: auto;
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

export default {
  title: 'Marketing/PageFooter',
  component: PageFooter,
};

export const Default = () => (
  <PageFooter
    coreFrameworks={['react', 'vue', 'angular', 'web-components']}
    tutorialsLink="/"
    storybookLogoLink={
      <LogotypeWrapper to="/">
        <img src={StorybookLogoSVG} alt="Storybook" />
      </LogotypeWrapper>
    }
    navLinks={<div>hiya!</div>}
    communityLinks={{
      gitHub: {
        repo: '/',
      },
      twitter: '/',
      chat: '/',
      youtube: '/',
    }}
  />
);
