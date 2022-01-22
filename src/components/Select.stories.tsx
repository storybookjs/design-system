import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from '@storybook/theming';

import { Select as UnstyledSelect } from './Select';

const onChange = action('change');

export default {
  title: 'forms/Select',
  component: UnstyledSelect,
};

export const Template = (args) => <Select {...args} />;
Template.args = {
  value: 'value1',
  options: [
    { label: 'Default', value: 'value1' },
    { label: 'Dog', value: 'value2' },
    { label: 'Mouse', value: 'value3' },
  ],
};
Template.story = { name: 'Playground' };

const Form = styled.form`
  padding: 3em 12em;
`;

const DarkForm = styled(Form)`
  background: #eeeeee;
`;

const Select = styled(UnstyledSelect)`
  padding-top: 1em;
`;

const All = ({ appearance }) => (
  <>
    <Select
      id="Default"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
      appearance={appearance}
    />
    <Select
      id="disabled"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'Disabled', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      disabled
      onChange={onChange}
      appearance={appearance}
    />
    <Select
      id="with-icon"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'With icon', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      onChange={onChange}
      appearance={appearance}
    />
    <Select
      id="in-progress-with-icon"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'In progress with icon', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      onChange={onChange}
      appearance={appearance}
      inProgress
    />
    <Select
      id="with-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'With error', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      error="There's a snake in my boots"
      onChange={onChange}
      appearance={appearance}
    />
    <Select
      id="with-icon-and-error"
      label="Animal"
      hideLabel
      value="value1"
      options={[
        { label: 'With icon and error', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      error="There's a snake in my boots"
      onChange={onChange}
      appearance={appearance}
    />
    <Select
      id="with-label"
      value="value1"
      options={[
        { label: 'With label', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      icon="chromatic"
      label="Label"
      onChange={onChange}
      appearance={appearance}
    />
  </>
);

export const Default = () => (
  <DarkForm>
    <All appearance="default" />
  </DarkForm>
);

export const Stacked = () => (
  <Form>
    <UnstyledSelect
      id="default"
      value="value1"
      label="Animal"
      hideLabel
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
      stackLevel="top"
    />
    <UnstyledSelect
      id="default1"
      value="value1"
      label="Animal"
      hideLabel
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
      stackLevel="middle"
    />
    <UnstyledSelect
      id="default2"
      value="value1"
      label="Animal"
      hideLabel
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
      stackLevel="bottom"
    />
  </Form>
);

export const Tertiary = () => (
  <Form>
    <All appearance="tertiary" />
  </Form>
);
