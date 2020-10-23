import React from 'react';
import styled from 'styled-components';
import { action, actions as makeActions } from '@storybook/addon-actions';

import { Form, PureForm, FormProps, PureFormProps } from './Form';
// @ts-ignore
import { Button } from './Button';
// @ts-ignore
import { Input as UnstyledInput } from './Input';

export default {
  title: 'Design System/forms/Form',
  component: Form,
};

const FormWrapper = styled.div`
  padding: 3em 12em;
`;

const Input = styled(UnstyledInput)`
  padding-bottom: 1em;
`;

const onSubmit = (e: Event) => {
  e.preventDefault();
  action('onClick')(e);
};

const Submit = () => (
  <Button appearance="secondary" onClick={onSubmit}>
    Submit
  </Button>
);

const onChange = action('change');

const fields = [
  {
    id: 'input-1',
    validationError: () => 'There is an error with this field',
    Component: (props: any) => (
      <Input
        startFocused
        appearance="secondary"
        label="Label"
        hideLabel
        onChange={onChange}
        {...props}
      />
    ),
  },
  {
    id: 'input-2',
    validationError: () => 'There is an error with this field',
    Component: (props: any) => (
      <Input
        appearance="secondary"
        label="Label"
        hideLabel
        value="prefilled"
        onChange={onChange}
        {...props}
      />
    ),
  },
];

export const Default = (args: FormProps) => <Form {...args} />;
Default.decorators = [(storyFn: any) => <FormWrapper>{storyFn()}</FormWrapper>];
Default.args = {
  children: <Submit />,
  fields,
};

export const Pure = (args: PureFormProps) => <PureForm {...args} />;
Pure.decorators = [(storyFn: any) => <FormWrapper>{storyFn()}</FormWrapper>];
Pure.args = {
  ...makeActions('onFocus', 'onBlur', 'onMouseEnter', 'onMouseLeave'),
  primaryFieldId: 'input-1',
  blurredFieldIds: new Set(),
  children: <Submit />,
  fields,
};

export const PureMultipleErrors = Pure.bind({});
PureMultipleErrors.decorators = [(storyFn: any) => <FormWrapper>{storyFn()}</FormWrapper>];
PureMultipleErrors.args = {
  ...Pure.args,
  blurredFieldIds: new Set(Pure.args.fields.map((field) => field.id)),
};
