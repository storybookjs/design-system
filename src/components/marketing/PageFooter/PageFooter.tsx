import React from 'react';

import { Link } from '../../Link';
import { Resource } from './Resource';
import { CommunityLink } from './CommunityLink';
import { Service } from './Service';

import {
  Title,
  ResourceAction,
  UpperColumn,
  Upper,
  Text,
  Colophon,
  Column,
  Subscribe,
  HrWrapper,
  Netlify,
  Chromatic,
  CircleCI,
  Services,
  Lower,
  FooterWrapper,
} from './PageFooter.styles';

// @ts-ignore
import DirectionSVG from '../../../images/direction.svg';
// @ts-ignore
import RepoSVG from '../../../images/repo.svg';
// @ts-ignore
import NetlifyLogoSVG from '../../../images/logos/netlify.svg';
// @ts-ignore
import ChromaticLogoSVG from '../../../images/logos/chromatic.svg';
// @ts-ignore
import CircleCILogoSVG from '../../../images/logos/circleci.svg';

export const PageFooter = ({
  coreFrameworks,
  tutorialsLink,
  storybookLogoLink,
  navLinks,
  communityLinks,
  ...props
}: Props) => (
  <FooterWrapper {...props}>
    <Upper>
      <UpperColumn>
        <Resource
          image={<img src={RepoSVG} alt="Docs" />}
          title="Documentation"
          description="Add Storybook to your project in less than a minute to build components faster and
          easier."
          links={coreFrameworks.map((framework) => (
            <ResourceAction
              withArrow
              key={framework}
              href={`/docs/${framework}/get-started/introduction`}
            >
              {framework}
            </ResourceAction>
          ))}
        />
      </UpperColumn>
      <UpperColumn>
        <Resource
          image={<img src={DirectionSVG} alt="Tutorial" />}
          title="Tutorials"
          description="Learn Storybook with in-depth tutorials that teaches Storybook best practices.
          Follow along with code samples."
          links={
            <Link withArrow href={tutorialsLink}>
              Learn Storybook now
            </Link>
          }
        />
      </UpperColumn>
    </Upper>
    <Lower>
      <Colophon>
        {storybookLogoLink}
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
        {navLinks}
      </Column>
      <Column>
        <Title>Community</Title>
        <CommunityLink href={communityLinks?.gitHub.repo} icon="github" name="GitHub" />
        <CommunityLink href={communityLinks?.twitter} icon="twitter" name="Twitter" />
        <CommunityLink href={communityLinks?.chat} icon="discord" name="Discord" />
        <CommunityLink href={communityLinks?.youtube} icon="youtube" name="Youtube" />
        <CommunityLink
          href="https://componentdriven.org/"
          icon="componentdriven"
          name="Component Driven UIs"
        />
      </Column>
      <Subscribe>
        <Title>Subscribe</Title>
        <Text>Get news, free tutorials, and Storybook tips emailed to you.</Text>
        {/* TODO - pull in and add <ConfirmedMailingList /> */}
      </Subscribe>
    </Lower>
    <HrWrapper>
      <hr />
    </HrWrapper>
    <Services>
      <Service
        text="Maintained by"
        href="https://www.chromatic.com/"
        logo={<Chromatic src={ChromaticLogoSVG} alt="Chromatic" />}
      />
      <Service
        text="Continuous integration by"
        href="https://circleci.com/"
        logo={<CircleCI src={CircleCILogoSVG} alt="CircleCI" />}
      />
      <Service
        text="Hosting by"
        href="https://netlify.com"
        logo={<Netlify src={NetlifyLogoSVG} alt="Netlify" />}
      />
    </Services>
  </FooterWrapper>
);

type CommunityLinksType = {
  gitHub: { repo: string };
  twitter: string;
  chat: string;
  youtube: string;
};

interface Props {
  /** An array of core framework names */
  coreFrameworks: Array<string>;
  /** Link to tutorials */
  tutorialsLink: string;
  /** Pass the storybook logo with the appropriate link */
  storybookLogoLink: React.ReactElement;
  /** Pass a component that generates the links for the Storybook column */
  navLinks: React.ReactNode | (() => React.ReactNode);
  /** Generates the links for the Community column */
  communityLinks: CommunityLinksType;
}
