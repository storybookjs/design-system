import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');
storiesOf('Design System|forms/Checkbox', module)
  .addParameters({ component: Checkbox })
  .add('all checkboxes', () => (
    <form>
      <div>
        <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />
      </div>
      <div>
        <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
      </div>
      <div>
        <Checkbox id="With-label" label="Cats" onChange={onChange} />
      </div>
      <div>
        <Checkbox
          id="With-label-and-error"
          label="Cats"
          onChange={onChange}
          error="There's a snake in my boots"
        />
      </div>
    </form>
  ))
  .add('unchecked', () => <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />)
  .add('checked', () => (
    <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
  ));
