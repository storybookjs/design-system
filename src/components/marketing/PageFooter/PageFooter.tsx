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
  Services,
  Lower,
  FooterWrapper,
} from './PageFooter.styles';

import { Direction, Repo } from '../../../images/colored-icons';
import { Netlify, Chromatic, Circleci as CircleCI } from '../../../images/logos';

const coreFrameworks = ['react', 'vue', 'angular', 'web-components'];

export const PageFooter = ({
  navLinks,
  storybookLogoLink,
  subscribeForm,
  tutorialsLink,
  ...props
}: Props) => (
  <FooterWrapper {...props}>
    <Upper>
      <UpperColumn>
        <Resource
          image={<Repo title="Docs" />}
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
          image={<Direction title="Tutorial" />}
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
        <CommunityLink
          href="https://github.com/storybookjs/storybook"
          icon="github"
          name="GitHub"
        />
        <CommunityLink href="https://twitter.com/storybookjs" icon="twitter" name="Twitter" />
        <CommunityLink href="https://discord.com/invite/storybook" icon="discord" name="Discord" />
        <CommunityLink
          href="https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg"
          icon="youtube"
          name="Youtube"
        />
        <CommunityLink
          href="https://componentdriven.org/"
          icon="componentdriven"
          name="Component Driven UIs"
        />
      </Column>
      {subscribeForm && (
        <Subscribe>
          <Title>Subscribe</Title>
          <Text>Get news, free tutorials, and Storybook tips emailed to you.</Text>
          {subscribeForm}
        </Subscribe>
      )}
    </Lower>
    <HrWrapper>
      <hr />
    </HrWrapper>
    <Services>
      <Service
        text="Maintained by"
        href="https://www.chromatic.com/"
        logo={<Chromatic title="Chromatic" />}
      />
      <Service
        text="Continuous integration by"
        href="https://circleci.com/"
        logo={<CircleCI title="CircleCI" />}
        muteLogo
      />
      <Service text="Hosting by" href="https://netlify.com" logo={<Netlify title="Netlify" />} />
    </Services>
  </FooterWrapper>
);

interface Props {
  /** Pass a component that generates the links for the Storybook column */
  navLinks: React.ReactNode;
  /** Pass the storybook logo with the appropriate link */
  storybookLogoLink: React.ReactNode;
  /** Newsletter subscribe form */
  subscribeForm?: React.ReactNode;
  /** Link to tutorials */
  tutorialsLink: string;
}
