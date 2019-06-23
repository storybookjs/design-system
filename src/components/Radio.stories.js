import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');
storiesOf('Design System|forms/Radio', module)
  .addParameters({ component: Radio })
  .add('all radios', () => (
    <form>
      <Radio id="Mice" name="animal" label="Mice" value="mice" checked onChange={onChange} />
      <Radio id="Dogs" name="animal" label="Dogs" value="dogs" onChange={onChange} />
      <Radio
        id="Cats"
        name="animal"
        label="Cats"
        onChange={onChange}
        error="There's a snake in my boots"
      />
      <Radio
        id="Dogs"
        name="animal"
        label="Dogs"
        subLabel="15 canines"
        value="dogs"
        onChange={onChange}
      />
    </form>
  ))
  .add('unchecked', () => (
    <Radio id="Mice" label="Mice" hideLabel value="mice" onChange={onChange} />
  ))
  .add('checked', () => (
    <Radio id="Dogs" label="Dogs" hideLabel value="dogs" checked onChange={onChange} />
  ));
