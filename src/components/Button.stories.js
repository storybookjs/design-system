import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { Icon } from './Icon';

storiesOf('Design System|Button', module).add('all buttons', () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button tertiary>Tertiary</Button>
    <Button outline>Outline</Button>
    <Button outline primary>
      Outline primary
    </Button>
    <Button outline secondary>
      Outline primary
    </Button>
    <Button primary disabled>
      Disabled
    </Button>
    <br />
    <Button primary loading>
      Primary
    </Button>
    <Button secondary loading>
      Secondary
    </Button>
    <Button tertiary loading>
      Tertiary
    </Button>
    <Button outline loading>
      Outline
    </Button>
    <Button outline loading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button primary small>
      Primary
    </Button>
    <Button secondary small>
      Secondary
    </Button>
    <Button tertiary small>
      Tertiary
    </Button>
    <Button outline small>
      Outline
    </Button>
    <Button primary disabled small>
      Disabled
    </Button>
    <Button outline small containsIcon>
      <Icon icon="link" />
    </Button>
    <Button outline small>
      <Icon icon="link" />
      Link
    </Button>
  </div>
));
