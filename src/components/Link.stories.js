import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Icon } from './Icon';
import { Link } from './Link';
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomLink = styled(Link)`
  && {
    color: red;
  }
`;

const onLinkClick = action('onLinkClick');

export default {
  title: 'Design System/Link',
  component: Link,
};

export const all = () => (
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

export const withArrow = () => (
  <Link containsIcon withArrow href="https://learnstorybook.com">
    withArrow shows an arrow behind the link
  </Link>
);

export const containsIcon = () => (
  <Link containsIcon href="https://learnstorybook.com" aria-label="Toggle side bar">
    <Icon icon="sidebar" aria-hidden />
  </Link>
);

export const icon = () => (
  <Link href="https://learnstorybook.com">
    <Icon icon="discord" aria-hidden />
    Link with an icon in front
  </Link>
);

export const isButton = () => (
  /* eslint-disable-next-line */
  <Link isButton onClick={onLinkClick}>
    is actually a button
  </Link>
);

export const hasLinkWrapper = () => (
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
