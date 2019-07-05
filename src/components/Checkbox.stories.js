import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');
storiesOf('Design System|forms/Checkbox', module)
  .addParameters({ component: Checkbox })
  .add('all checkboxes', () => (
    <form>
      <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />
      <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
      <Checkbox
        id="With-label-and-error"
        label="Cats"
        onChange={onChange}
        error="There's a snake in my boots"
      />
      <Checkbox id="With-label" label="Cats" onChange={onChange} />
      <Checkbox
        appearance="secondary"
        id="Secondary-checked"
        label="Secondary"
        checked
        onChange={onChange}
      />
      <Checkbox
        appearance="secondary"
        id="Secondary-unchecked"
        label="Secondary"
        onChange={onChange}
      />
    </form>
  ))
  .add('unchecked', () => (
    <Checkbox id="Primary-unchecked" label="Primary" hideLabel onChange={onChange} />
  ))
  .add('checked', () => (
    <Checkbox id="Primary-checked" label="Primary" hideLabel checked onChange={onChange} />
  ))
  .add('with label', () => <Checkbox id="With-label" label="Cats" onChange={onChange} />)
  .add('with error', () => (
    <Checkbox
      id="With-label-and-error"
      label="Cats"
      onChange={onChange}
      error="There's a snake in my boots"
    />
  ))
  .add('secondary', () => (
    <form>
      <Checkbox id="Primary-checked" label="Primary (default)" checked onChange={onChange} />
      <Checkbox
        id="Secondary-checked"
        label="Secondary"
        checked
        onChange={onChange}
        appearance="secondary"
      />
    </form>
  ));
