import React from 'react';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';

const onChange = action('change');

export default {
  title: 'Design System/forms/Select',
  component: Select,
};

export const Basic = args => <Select {...args} />;
Basic.args = {
  value: 'value1',
  options: [
    { label: 'Default', value: 'value1' },
    { label: 'Dog', value: 'value2' },
    { label: 'Mouse', value: 'value3' },
  ],
};

export const All = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Select
      id="Primary"
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
        { label: 'Mouse', value: 'value3' },
      ]}
      onChange={onChange}
      label="Animal"
      hideLabel
    />
    <Select
      id="Secondary"
      value="value1"
      options={[
        { label: 'Secondary', value: 'value1' },
        { label: 'Dog', value: 'value2' },
        { label: 'Mouse', value: 'value3' },
      ]}
      appearance="secondary"
      onChange={onChange}
      label="Animal"
      hideLabel
    />
    <Select
      id="Tertiary"
      value="value1"
      options={[
        { label: 'Tertiary', value: 'value1' },
        { label: 'Dog', value: 'value2' },
        { label: 'Mouse', value: 'value3' },
      ]}
      appearance="tertiary"
      onChange={onChange}
      label="Animal"
      hideLabel
    />
  </form>
);

export const Default = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Select
      id="Primary"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
    />
    <Select
      id="Primary-disabled"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      disabled
      onChange={onChange}
    />
    <Select
      id="Primary-with-iconn"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      onChange={onChange}
    />
    <Select
      id="Primary-in-progress"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      onChange={onChange}
      inProgress
    />
    <Select
      id="Primary-with-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Select
      id="Primary-with-icon-and-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Select
      id="Primary-with-label"
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      label="Label"
      onChange={onChange}
    />
  </form>
);

export const Secondary = () => (
  <form style={{ background: '#FFFFFF', padding: '3em' }}>
    <Select
      id="Secondary"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      appearance="secondary"
      onChange={onChange}
    />
    <Select
      id="Secondary-disabled"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      disabled
      appearance="secondary"
      onChange={onChange}
    />
    <Select
      id="Secondary-with-icon"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      appearance="secondary"
      onChange={onChange}
    />
    <Select
      id="Secondary-with-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      error="There's a snake in my boots"
      appearance="secondary"
      onChange={onChange}
    />
    <Select
      id="Secondary-with-icon-and-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      error="There's a snake in my boots"
      appearance="secondary"
      onChange={onChange}
    />
    <Select
      id="Secondary-with-label"
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      label="Label"
      appearance="secondary"
      onChange={onChange}
    />
  </form>
);

export const Tertiary = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Select
      id="Tertiary"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      appearance="tertiary"
      onChange={onChange}
    />
    <Select
      id="Tertiary-disabled"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      disabled
      appearance="tertiary"
      onChange={onChange}
    />
  </form>
);
