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
      <Button appearance="primaryOutline">Outline primary</Button>
      <Button appearance="secondaryOutline">Outline secondary</Button>
      <Button appearance="primary" isDisabled>
        Disabled
      </Button>
      <br />
      <Button appearance="primary" isLoading>
        Primary
      </Button>
      <Button appearance="secondary" isLoading>
        Secondary
      </Button>
      <Button appearance="tertiary" isLoading>
        Tertiary
      </Button>
      <Button appearance="outline" isLoading>
        Outline
      </Button>
      <Button appearance="outline" isLoading loadingText="Custom...">
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
      <Button appearance="primary" isDisabled size="small">
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
