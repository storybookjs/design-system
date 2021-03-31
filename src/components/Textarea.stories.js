import React from 'react';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

const onChange = action('change');

export default {
  title: 'forms/Textarea',
  component: Textarea,
};

export const playground = (args) => <Textarea {...args} />;
playground.args = {
  id: 'Basic',
  label: 'label',
  value: 'value',
  orientation: 'horizontal',
  hideLabel: false,
};

export const Default = () => (
  <form>
    <Textarea
      id="Placeholder"
      label="Textarea with placeholder"
      hideLabel
      placeholder="Placeholder"
      onChange={onChange}
    />
    <Textarea
      id="Focus"
      label="Textarea with focus on start"
      hideLabel
      value="startFocused"
      placeholder="Focused"
      onChange={onChange}
      startFocused
    />
    <Textarea
      id="With-value"
      label="Textarea with value"
      hideLabel
      value="With value"
      onChange={onChange}
    />
    <Textarea
      id="Disabled"
      label="Disabled textarea"
      hideLabel
      value="Disabled"
      disabled
      onChange={onChange}
    />
    <Textarea id="Label" label="Label" value="Label" onChange={onChange} />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Error"
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Error"
      error={() => `There's a snake in my boots (Function error)`}
      onChange={onChange}
    />
    <Textarea
      id="Label-and-error"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Textarea
      id="Subtext"
      value="Subtext"
      label="Textarea with subtext"
      hideLabel
      subtext="140 chars left"
      onChange={onChange}
    />
  </form>
);
