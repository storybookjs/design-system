import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Icon } from './Icon';
import { Link } from './Link';

const onLinkClick = action('onLinkClick');
storiesOf('Design System|Link', module).add('all', () => (
  <div>
    <Link href="http://google.com">Default</Link>
    <br />
    <Link secondary href="http://google.com">
      Secondary
    </Link>
    <br />
    <Link tertiary href="http://google.com">
      tertiary
    </Link>
    <br />
    <Link nochrome href="http://google.com">
      nochrome
    </Link>
    <br />
    <Link href="http://google.com">
      <Icon icon="discord" />
      With icon in front
    </Link>
    <br />
    <Link containsIcon isGatsby to="http://google.com">
      <Icon icon="sidebar" />
    </Link>
    <br />
    <Link containsIcon withArrow href="http://google.com">
      With arrow behind
    </Link>
    <br />
    <span style={{ background: '#333' }}>
      <Link inverse href="http://google.com">
        Inverted colors
      </Link>
    </span>
    <br />
    {/* gatsby and styled-components don't work nicely together  */}
    {/* eslint-disable-next-line */}
    <Link isButton onClick={onLinkClick}>
      is actually a button
    </Link>
    <br />
    <Link primary={1} isGatsby to="/gatsby">
      is a GatsbyLink
    </Link>
  </div>
));
