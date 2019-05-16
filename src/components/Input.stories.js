import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

const onChange = action('change');
storiesOf('Design System|forms/Input', module)
  .add('all inputs', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input value="Default" icon="email" onChange={onChange} />
      <Input value="Secondary" icon="email" appearance="secondary" onChange={onChange} />
      <Input
        value="Secondary"
        label="Label secondary"
        icon="email"
        appearance="secondary"
        onChange={onChange}
      />
      <Input value="Tertiary" icon="email" appearance="tertiary" onChange={onChange} />
      <Input value="Pill" icon="search" appearance="pill" onChange={onChange} />
      <Input value="Code" appearance="code" onChange={onChange} />
      <Input
        value="Code"
        appearance="code"
        orientation="horizontal"
        onChange={onChange}
        label="horizontal"
      />
      <Input
        value="Code"
        appearance="secondary"
        orientation="horizontal"
        onChange={onChange}
        label="horizontal"
      />
    </form>
  ))
  .add('default', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input placeholder="Placeholder" onChange={onChange} />
      <Input value="With value" onChange={onChange} />
      <Input value="Disabled" disabled onChange={onChange} />
      <Input value="Icon" icon="email" onChange={onChange} />
      <Input placeholder="Error" error="There's a snake in my boots" onChange={onChange} />
      <Input
        placeholder="Error with icon"
        icon="email"
        error="There's a snake in my boots"
        onChange={onChange}
      />
    </form>
  ))
  .add('secondary', () => (
    <form style={{ background: '#fff', padding: '3em' }}>
      <Input placeholder="Placeholder" appearance="secondary" onChange={onChange} />
      <Input value="With value" appearance="secondary" onChange={onChange} />
      <Input value="Disabled" disabled appearance="secondary" onChange={onChange} />
      <Input value="Icon" icon="email" appearance="secondary" onChange={onChange} />
      <Input
        placeholder="Error"
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        value="With value"
        label="Label secondary"
        appearance="secondary"
        onChange={onChange}
      />
    </form>
  ))
  .add('tertiary', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input placeholder="Placeholder" appearance="tertiary" onChange={onChange} />
      <Input value="With value" appearance="tertiary" onChange={onChange} />
      <Input value="Disabled" disabled appearance="tertiary" onChange={onChange} />
      <Input value="Icon" icon="email" appearance="tertiary" onChange={onChange} />
      <Input
        placeholder="Error"
        error="There's a snake in my boots"
        appearance="tertiary"
        onChange={onChange}
      />
    </form>
  ))
  .add('pill', () => <Input value="Pill" icon="search" appearance="pill" onChange={onChange} />)
  .add('code', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input placeholder="Code placeholder" appearance="code" onChange={onChange} />
      <Input value="Code" appearance="code" onChange={onChange} />
      <Input
        placeholder="Code"
        appearance="code"
        error="Does not compute lorem ipsum dolor sit amet consecatur "
        onChange={onChange}
      />
      <Input
        placeholder="Code"
        appearance="code"
        orientation="horizontal"
        error="Does not compute lorem ipsum dolor sit amet consecatur "
        onChange={onChange}
        label="horizontal"
      />
    </form>
  ));
