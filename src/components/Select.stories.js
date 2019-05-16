import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';

const onChange = action('change');
storiesOf('Design System|forms/Select', module)
  .add('All selects', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Select
        value="value1"
        options={[
          { label: 'Default', value: 'value1' },
          { label: 'Dog', value: 'value2' },
          { label: 'Mouse', value: 'value3' },
        ]}
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[
          { label: 'Secondary', value: 'value1' },
          { label: 'Dog', value: 'value2' },
          { label: 'Mouse', value: 'value3' },
        ]}
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[
          { label: 'Tertiary', value: 'value1' },
          { label: 'Dog', value: 'value2' },
          { label: 'Mouse', value: 'value3' },
        ]}
        appearance="tertiary"
        onChange={onChange}
      />
    </form>
  ))
  .add('default', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        disabled
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        onChange={onChange}
        inProgress
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        error="There's a snake in my boots"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        error="There's a snake in my boots"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        label="Label"
        onChange={onChange}
      />
    </form>
  ))
  .add('secondary', () => (
    <form style={{ background: '#FFFFFF', padding: '3em' }}>
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        disabled
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        icon="chroma"
        label="Label"
        appearance="secondary"
        onChange={onChange}
      />
    </form>
  ))
  .add('tertiary', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        appearance="tertiary"
        onChange={onChange}
      />
      <Select
        value="value1"
        options={[{ label: 'Default', value: 'value1' }, { label: 'Dog', value: 'value2' }]}
        disabled
        appearance="tertiary"
        onChange={onChange}
      />
    </form>
  ));
