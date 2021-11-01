import React, { FunctionComponent } from 'react';
// import { Link as GatsbyLink } from 'gatsby';

import { Icon } from '../Icon';
import { Link } from '../Link';
import {
  Title,
  ResourceTitle,
  ResourceDesc,
  ResourceAction,
  Meta,
  Resource,
  UpperColumn,
  Upper,
  LogotypeWrapper,
  Text,
  Colophon,
  Column,
  Subscribe,
  HrWrapper,
  Netlify,
  Chromatic,
  CircleCI,
  Service,
  Services,
  Lower,
  FooterWrapper,
} from './PageFooter.styles';
// import useSiteMetadata from '../lib/useSiteMetadata';

// import ConfirmedMailingList from './ConfirmedMailingList';

// @ts-ignore
import DirectionSVG from '../../images/direction.svg';
// @ts-ignore
import RepoSVG from '../../images/repo.svg';
// @ts-ignore
import StorybookLogoSVG from '../../images/logos/storybook.svg';
// @ts-ignore
import NetlifyLogoSVG from '../../images/logos/netlify.svg';
// @ts-ignore
import ChromaticLogoSVG from '../../images/logos/chromatic.svg';
// @ts-ignore
import CircleCILogoSVG from '../../images/logos/circleci.svg';

const LinkWrapper = ({ href, isGatsby, ...props }) => {
  // if (isGatsby) {
  //   return <GatsbyLink to={href} {...props} />;
  // }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href} {...props} />;
};

// LinkWrapper.propTypes = {
//   href: PropTypes.string.isRequired,
//   isGatsby: PropTypes.bool.isRequired,
// };

export const PageFooter = ({ ...props }) => {
  // const { urls = {}, coreFrameworks } = useSiteMetadata();
  // const { blog, twitter, chat, youtube, navLinks = {}, docs = {}, tutorials, gitHub = {} } = urls;

  return (
    <FooterWrapper {...props}>
      <Upper>
        <UpperColumn>
          <div>
            <Resource>
              <img src={RepoSVG} alt="Docs" />
              <Meta>
                <ResourceTitle>Documentation</ResourceTitle>
                <ResourceDesc>
                  Add Storybook to your project in less than a minute to build components faster and
                  easier.
                </ResourceDesc>
                <div>
                  {/* {coreFrameworks.map((framework) => (
                    <ResourceAction
                      withArrow
                      key={framework}
                      href={`/docs/${framework}/get-started/introduction`}
                    >
                      {framework}
                    </ResourceAction>
                  ))} */}
                </div>
              </Meta>
            </Resource>
          </div>
        </UpperColumn>
        <UpperColumn>
          <div>
            <Resource>
              <img src={DirectionSVG} alt="Tutorial" />
              <Meta>
                <ResourceTitle>Tutorials</ResourceTitle>
                <ResourceDesc>
                  Learn Storybook with in-depth tutorials that teaches Storybook best practices.
                  Follow along with code samples.
                </ResourceDesc>
                <div>
                  {/* <Link withArrow href={tutorials}>
                    Learn Storybook now
                  </Link> */}
                </div>
              </Meta>
            </Resource>
          </div>
        </UpperColumn>
      </Upper>
      <Lower>
        <Colophon>
          <LogotypeWrapper isGatsby to="/">
            <img src={StorybookLogoSVG} alt="Storybook" />
          </LogotypeWrapper>
          <Text>
            The MIT License (MIT). Website design by{' '}
            <Link tertiary href="https://twitter.com/domyen" target="_blank">
              <b>@domyen</b>
            </Link>{' '}
            and the awesome Storybook community.
          </Text>
        </Colophon>
        <Column>
          <Title>Storybook</Title>
          {/* {navLinks.map(({ title, href, isGatsby }) => (
            <Link tertiary key={title} href={href} isGatsby={isGatsby} LinkWrapper={LinkWrapper}>
              {title}
            </Link>
          ))} */}
        </Column>
        <Column>
          <Title>Community</Title>
          {/* <Link tertiary href={gitHub.repo}>
            <Icon icon="github" /> GitHub
          </Link>
          <Link tertiary href={twitter} rel="me">
            <Icon icon="twitter" /> Twitter
          </Link>
          <Link tertiary href={chat}>
            <Icon icon="discord" /> Discord chat
          </Link>
          <Link tertiary href={youtube}>
            <Icon icon="youtube" /> Youtube
          </Link> */}
          <Link tertiary href="https://componentdriven.org/">
            <Icon icon="componentdriven" /> Component Driven UIs
          </Link>
        </Column>
        <Subscribe>
          <Title>Subscribe</Title>
          <Text>Get news, free tutorials, and Storybook tips emailed to you.</Text>
          {/* <ConfirmedMailingList /> */}
        </Subscribe>
      </Lower>
      <HrWrapper>
        <hr />
      </HrWrapper>
      <Services>
        <Service>
          <Text>Maintained by</Text>
          <a href="https://www.chromatic.com/">
            <Chromatic src={ChromaticLogoSVG} alt="Chromatic" />
          </a>
        </Service>
        <Service>
          <Text>Continuous integration by</Text>
          <a href="https://circleci.com/">
            <CircleCI src={CircleCILogoSVG} alt="CircleCI" />
          </a>
        </Service>
        <Service>
          <Text>Hosting by</Text>
          <a href="https://netlify.com">
            <Netlify src={NetlifyLogoSVG} alt="Netlify" />
          </a>
        </Service>
      </Services>
    </FooterWrapper>
  );
};
