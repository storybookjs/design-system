import React, { useState } from 'react';
import styled from 'styled-components';
import { action, actions as makeActions } from '@storybook/addon-actions';

import {
  FormErrorState,
  PureFormErrorState,
  FormErrorStateProps,
  PureFormErrorStateProps,
  FormErrorStateChildrenArgs,
  GetErrorArgs,
} from './FormErrorState';
// @ts-ignore
import { Button } from './Button';
// @ts-ignore
import { Input as UnstyledInput } from './Input';

export default {
  title: 'forms/FormErrorState',
  component: FormErrorState,
};

const FormWrapper = styled.div`
  padding: 3em 12em;
`;

const Input = styled(UnstyledInput)`
  padding-bottom: 1em;
`;

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  action('onClick')(e);
};

const Children = ({
  onSubmit: handleSubmit,
  getFormErrorFieldProps,
}: FormErrorStateChildrenArgs) => {
  // Use whatever form state management you need. This is just an example.
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  return (
    // @ts-ignore
    <form onSubmit={handleSubmit}>
      <Input
        id="input-1"
        {...getFormErrorFieldProps({
          id: 'input-1',
          validate: (value: string) =>
            !value && `There is an error with this field with value: "${value}"`,
        })}
        value={input1Value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          action('change')(e.target.value);
          setInput1Value(e.target.value);
        }}
        startFocused
        appearance="secondary"
        label="Label"
        hideLabel
      />
      <Input
        id="input-2"
        {...getFormErrorFieldProps({
          id: 'input-2',
          validate: (value: string) => `There is an error with this field with value: "${value}"`,
        })}
        value={input2Value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          action('change')(e.target.value);
          setInput2Value(e.target.value);
        }}
        appearance="secondary"
        label="Label"
        hideLabel
      />
      <Button appearance="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
};

const decorators = [(storyFn: any) => <FormWrapper>{storyFn()}</FormWrapper>];

export const Default = (args: FormErrorStateProps) => <FormErrorState {...args} />;
Default.decorators = decorators;
Default.args = {
  onSubmit,
  children: Children,
};

const pureActions = makeActions('onFocus', 'onBlur', 'onMouseEnter', 'onMouseLeave', 'trackErrors');

export const PureMultipleErrors = (args: PureFormErrorStateProps) => (
  <PureFormErrorState {...args} />
);
PureMultipleErrors.decorators = decorators;
PureMultipleErrors.args = {
  ...pureActions,
  getError: (args: GetErrorArgs) => `There is an error with this field with value: "${args.value}"`,
  primaryFieldId: 'input-2',
  blurredFieldIds: new Set(['input-1', 'input-2']),
  children: Children,
};
