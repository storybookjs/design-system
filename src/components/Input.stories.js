import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Input as UnstyledInput, PureInput as UnstyledPureInput } from './Input';
import { Link } from './Link';

const onChange = action('change');

export default {
  title: 'forms/Input',
  component: UnstyledInput,
};

export const Template = (args) => <Input {...args} />;
Template.args = {
  id: 'Basic',
  label: 'label',
  value: 'value',
  appearance: 'pill',
  orientation: 'horizontal',
  hideLabel: false,
};
Template.story = { name: 'Playground' };

const Form = styled.form`
  padding: 3em 12em;
`;

const DarkForm = styled(Form)`
  background: #eeeeee;
`;

const Input = styled(UnstyledInput)`
  padding-top: 1em;
`;

const PureInput = styled(UnstyledPureInput)`
  padding-top: 1em;
`;

const ErrorInput = styled(Input)`
  padding-top: 2em;
`;

const All = ({ appearance }) => (
  <>
    <Input
      id="Placeholder"
      label="Input with placeholder"
      hideLabel
      placeholder="Placeholder"
      onChange={onChange}
      appearance={appearance}
    />
    <Input
      id="Focused"
      label="Focused input"
      hideLabel
      placeholder="Focused"
      onChange={onChange}
      appearance={appearance}
      startFocused
    />
    <Input
      id="With-value"
      value="With value"
      label="Input with value"
      hideLabel
      onChange={onChange}
      appearance={appearance}
    />
    <Input
      id="Disabled"
      value="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      onChange={onChange}
      appearance={appearance}
    />
    <Input
      id="Icon"
      value="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
      onChange={onChange}
      appearance={appearance}
    />
    <Input
      id="Password"
      value="Password"
      label="Password input"
      type="password"
      hideLabel
      icon="key"
      onChange={onChange}
      appearance={appearance}
    />
    <PureInput
      id="Password-visible"
      value="Password visible (PureInput)"
      label="Password input with visible password"
      type="text"
      startingType="password"
      onActionClick={(e) => e.preventDefault()}
      hideLabel
      icon="key"
      onChange={onChange}
      appearance={appearance}
    />
    <ErrorInput
      id="Error"
      label="Input with error"
      hideLabel
      placeholder="Error"
      error="There's a snake in my boots"
      onChange={onChange}
      appearance={appearance}
    />
    <ErrorInput
      id="Error-links"
      label="Input with error and links"
      hideLabel
      placeholder="Error"
      error={
        <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          This is an error with a <Link>link</Link> in it
        </div>
      }
      onChange={onChange}
      appearance={appearance}
    />
    <ErrorInput
      id="Error-icon"
      label="Input with error and icon"
      hideLabel
      placeholder="Error with icon"
      icon="email"
      error="There's a snake in my boots"
      errorTooltipPlacement="left"
      onChange={onChange}
      appearance={appearance}
    />
  </>
);

All.propTypes = {
  appearance: PropTypes.string,
};

All.defaultProps = {
  appearance: undefined,
};

export const Default = () => (
  <DarkForm>
    <All />
  </DarkForm>
);

export const Stacked = () => (
  <Form>
    <UnstyledInput
      id="stacked-1"
      value="Stacked"
      label="Stacked"
      stackLevel="top"
      onChange={onChange}
      error="There's a snake in my boots"
    />
    <UnstyledInput
      id="stacked-2"
      value="Stacked"
      label="Stacked"
      stackLevel="middle"
      hideLabel
      startFocused
      onChange={onChange}
      icon="key"
      type="password"
    />
    <UnstyledInput
      id="stacked-3"
      value="Stacked"
      label="Stacked"
      stackLevel="middle"
      hideLabel
      onChange={onChange}
    />
    <UnstyledInput
      id="stacked-4"
      value="Stacked"
      label="Stacked"
      stackLevel="bottom"
      hideLabel
      onChange={onChange}
      icon="key"
      error="There's a snake in my boots"
    />
  </Form>
);

export const Pill = () => (
  <UnstyledInput
    id="Pill"
    value="Pill"
    label="Search"
    hideLabel
    icon="search"
    appearance="pill"
    onChange={onChange}
  />
);

export const Code = () => (
  <Form>
    <Input
      id="Code-placeholder"
      placeholder="Code placeholder"
      label="Code placeholder"
      hideLabel
      appearance="code"
      onChange={onChange}
    />
    <Input id="Code" value="Code" label="Code" hideLabel appearance="code" onChange={onChange} />
    <Input
      id="Code"
      value="Code"
      label="Code"
      icon="link"
      hideLabel
      appearance="code"
      onChange={onChange}
    />
    <Input
      id="Code-with-error"
      placeholder="Code"
      label="Code"
      hideLabel
      appearance="code"
      error="Does not compute lorem ipsum dolor sit amet consecatur "
      onChange={onChange}
    />
    <Input
      id="Code-with-error-and-label"
      placeholder="Code"
      appearance="code"
      orientation="horizontal"
      error="Does not compute lorem ipsum dolor sit amet consecatur "
      onChange={onChange}
      label="horizontal"
    />
  </Form>
);
