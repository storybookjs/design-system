import React from 'react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');

export default {
  title: 'Design System/forms/Checkbox',
  component: Checkbox,
};

export const Basic = args => <Checkbox {...args} />;
Basic.story = { args: { label: 'Basic', hideLabel: false } };

export const All = () => (
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
      id="With-label"
      label="Secondary"
      checked
      onChange={onChange}
    />
    <Checkbox appearance="secondary" id="With-label" label="Secondary" onChange={onChange} />
  </form>
);

export const Unchecked = () => (
  <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />
);

export const Checked = () => (
  <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
);
