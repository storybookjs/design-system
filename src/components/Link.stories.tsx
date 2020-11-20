import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Icon } from './Icon';
import { Link } from './Link';
// @ts-ignore
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomLink = styled(Link)`
  && {
    color: red;
  }
`;

const onLinkClick = action('onLinkClick');

export default {
  title: 'Link',
  component: Link,
};

export const Basic: React.FunctionComponent<React.ComponentProps<typeof Link>> = () => (
  <Link href="http://chromatic.com/" inverse={false}>
    link text
  </Link>
);

export const All = () => (
  <>
    <Link href="https://learnstorybook.com">default</Link>{' '}
    <Link secondary href="https://learnstorybook.com">
      secondary
    </Link>{' '}
    <Link tertiary href="https://learnstorybook.com">
      tertiary
    </Link>{' '}
    <Link nochrome href="https://learnstorybook.com">
      nochrome
    </Link>{' '}
    <span style={{ background: '#333' }}>
      <Link inverse href="https://learnstorybook.com">
        inverse
      </Link>
    </span>
  </>
);

export const WithArrow = () => (
  <Link containsIcon withArrow href="https://learnstorybook.com">
    withArrow shows an arrow behind the link
  </Link>
);

export const ContainsIcon = () => (
  <Link containsIcon href="https://learnstorybook.com" aria-label="Toggle side bar">
    <Icon icon="sidebar" aria-hidden />
  </Link>
);

export const WithIcon = () => (
  <Link href="https://learnstorybook.com">
    <Icon icon="discord" aria-hidden />
    Link with an icon in front
  </Link>
);

export const IsButton = () => (
  /* eslint-disable-next-line */
  <Link isButton onClick={onLinkClick}>
    is actually a button
  </Link>
);

export const HasLinkWrapper = () => (
  <>
    {/* gatsby and styled-components don't work nicely together  */}
    <Link tertiary LinkWrapper={StoryLinkWrapper} href="http://storybook.js.org">
      has a LinkWrapper like GatsbyLink or NextLink
    </Link>
    <br />
    <CustomLink tertiary LinkWrapper={StoryLinkWrapper} href="http://storybook.js.org">
      has a LinkWrapper like GatsbyLink or NextLink with custom styling
    </CustomLink>
  </>
);
