import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');
storiesOf('Design System|forms/Radio', module)
  .addParameters({ component: Radio })
  .add('all radios', () => (
    <form>
      <Radio label="Mice" value="mice" checked onChange={onChange} />
      <Radio label="Dogs" value="dogs" onChange={onChange} />
      <Radio label="Cats" onChange={onChange} error="There's a snake in my boots" />
      <Radio label="Dogs" sublabel="15 canines" value="dogs" onChange={onChange} />
    </form>
  ))
  .add('unchecked', () => <Radio value="mice" onChange={onChange} />)
  .add('checked', () => <Radio value="dogs" checked onChange={onChange} />);
