import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { Icon } from './Icon';

storiesOf('Design System|Button', module)
  .addParameters({ component: Button })
  .add('all buttons', () => (
    <div>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="tertiary">Tertiary</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="outline primary">Outline primary</Button>
      <Button appearance="outline secondary">Outline primary</Button>
      <Button appearance="primary" disabled>
        Disabled
      </Button>
      <br />
      <Button appearance="primary" loading>
        Primary
      </Button>
      <Button appearance="secondary" loading>
        Secondary
      </Button>
      <Button appearance="tertiary" loading>
        Tertiary
      </Button>
      <Button appearance="outline" loading>
        Outline
      </Button>
      <Button appearance="outline" loading loadingText="Custom...">
        Outline
      </Button>
      <br />
      <Button appearance="primary" size="small">
        Primary
      </Button>
      <Button appearance="secondary" size="small">
        Secondary
      </Button>
      <Button appearance="tertiary" size="small">
        Tertiary
      </Button>
      <Button appearance="outline" size="small">
        Outline
      </Button>
      <Button appearance="primary" disabled size="small">
        Disabled
      </Button>
      <Button appearance="outline" size="small" containsIcon>
        <Icon icon="link" />
      </Button>
      <Button appearance="outline" size="small">
        <Icon icon="link" />
        Link
      </Button>
    </div>
  ));
