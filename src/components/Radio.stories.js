import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');
storiesOf('Design System|forms/Radio', module)
  .addParameters({ component: Radio })
  .add('all radios', () => (
    <form>
      <Radio id="Mice" label="Mice" value="mice" checked onChange={onChange} />
      <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} />
      <Radio id="Cats" label="Cats" onChange={onChange} error="There's a snake in my boots" />
      <Radio id="Dogs" label="Dogs" description="15 canines" value="dogs" onChange={onChange} />
      <Radio
        id="Mice"
        label="Mice"
        value="mice"
        onChange={onChange}
        checked
        appearance="secondary"
      />
      <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} appearance="secondary" />
    </form>
  ))
  .add('unchecked', () => (
    <Radio id="Mice" label="Mice" hideLabel value="mice" onChange={onChange} />
  ))
  .add('checked', () => (
    <Radio id="Dogs" label="Dogs" hideLabel value="dogs" checked onChange={onChange} />
  ));
