import React from 'react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');

export default {
  title: 'forms/Radio',
  component: Radio,
};

export const Basic = (args) => <Radio {...args} />;
Basic.args = { label: 'label', hideLabel: false };

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

export const Unchecked = Basic.bind();
Unchecked.args = { id: 'Mice', label: 'Mice', hideLabel: true, value: 'mice' };

export const Checked = Basic.bind();
Checked.args = {
  id: 'Dogs',
  label: 'Dogs',
  hideLabel: true,
  value: 'dogs',
  checked: true,
};
