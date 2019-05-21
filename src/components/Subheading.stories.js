import React from 'react';
import { storiesOf } from '@storybook/react';
import { Subheading } from './Subheading';

storiesOf('Design System|Subheading', module)
  .addParameters({ component: Subheading })
  .add('subheading', () => <Subheading>Subheading</Subheading>);
