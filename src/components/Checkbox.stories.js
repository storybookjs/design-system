import React from 'react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');

export default {
  title: 'forms/Checkbox',
  component: Checkbox,
};

export const Template = (args) => <Checkbox {...args} />;
Template.args = { label: 'Basic', hideLabel: false };
Template.story = { name: 'Playground' };

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

export const Unchecked = Template.bind();
Unchecked.args = { id: 'Unchecked', label: 'Cats', hideLabel: true };

export const Checked = Template.bind();
Checked.args = { id: 'Checked', label: 'Cats', hideLabel: true, checked: true };
