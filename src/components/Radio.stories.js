import React from 'react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');

export default {
  title: 'forms/Radio',
  component: Radio,
};

export const Template = (args) => <Radio {...args} />;
Template.args = { label: 'label', hideLabel: false };
Template.story = { name: 'Playground' };

export const All = () => (
  <form>
    <Radio id="Mice" label="Mice" value="mice" checked onChange={onChange} />
    <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} />
    <Radio id="Cats" label="Cats" onChange={onChange} error="There's a snake in my boots" />
    <Radio id="Dogs" label="Dogs" description="15 canines" value="dogs" onChange={onChange} />
    <Radio id="Mice" label="Mice" value="mice" onChange={onChange} checked appearance="secondary" />
    <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} appearance="secondary" />
  </form>
);

export const Unchecked = Template.bind();
Unchecked.args = { id: 'Mice', label: 'Mice', hideLabel: true, value: 'mice' };

export const Checked = Template.bind();
Checked.args = {
  id: 'Dogs',
  label: 'Dogs',
  hideLabel: true,
  value: 'dogs',
  checked: true,
};
