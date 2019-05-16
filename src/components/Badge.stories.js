import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';
import { Icon } from './Icon';

storiesOf('Design System|Badge', module)
  .addParameters({ component: Badge })
  .add('all badges', () => (
    <div>
      <Badge status="positive">Positive</Badge>
      <Badge status="negative">Negative</Badge>
      <Badge status="neutral">Neutral</Badge>
      <Badge status="error">Error</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="positive">
        <Icon icon="facehappy" inline />
        with icon
      </Badge>
    </div>
  ))
  .add('positive', () => <Badge status="positive">Positive</Badge>)
  .add('negative', () => <Badge status="negative">Negative</Badge>)
  .add('warning', () => <Badge status="warning">Warning</Badge>)
  .add('neutral', () => <Badge status="neutral">Neutral</Badge>)
  .add('error', () => <Badge status="error">Error</Badge>)
  .add('with icon', () => (
    <Badge status="warning">
      <Icon icon="check" inline />
      with icon
    </Badge>
  ));
