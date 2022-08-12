import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from '@storybook/theming';

import { Select } from './Select';

const onChange = action('change');

export default {
  title: 'forms/Select',
  component: Select,
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
Template.storyName = 'Playground';

const Form = styled.form`
  padding: 3em 12em;
`;

const DarkForm = styled(Form)`
  background: #eeeeee;
`;

const Br = styled.div`
  margin-bottom: 1em;
`;

const All = ({ appearance, lineBreak }) => (
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
    {lineBreak && <Br />}
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
    {lineBreak && <Br />}
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
    {lineBreak && <Br />}
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
    {lineBreak && <Br />}
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
    {lineBreak && <Br />}
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
    {lineBreak && <Br />}
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
    <All appearance="default" lineBreak />
  </DarkForm>
);

export const Stacked = () => (
  <Form>
    <Select
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
    <Select
      id="default1"
      value="value1"
      label="Animal"
      hideLabel
      options={[
        { label: 'Default', value: 'value1' },
        { label: 'Dog', value: 'value2' },
      ]}
      onChange={onChange}
      icon="chromatic"
      stackLevel="middle"
    />
    <Select
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
    <All appearance="tertiary" lineBreak />
  </Form>
);
