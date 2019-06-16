import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

const onChange = action('change');
storiesOf('Design System|forms/Input', module)
  .addParameters({ component: Input })
  .add('all inputs', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input id="Default" value="Default" aria-label="Email" icon="email" onChange={onChange} />
      <Input
        id="Secondary"
        value="Secondary"
        aria-label="Email"
        icon="email"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="Secondary-with-label"
        value="Secondary"
        label="Label secondary"
        icon="email"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="Tertiary"
        value="Tertiary"
        aria-label="Email"
        icon="email"
        appearance="tertiary"
        onChange={onChange}
      />
      <Input
        id="Pill"
        value="Pill"
        aria-label="Search"
        icon="search"
        appearance="pill"
        onChange={onChange}
      />
      <Input id="Code" value="Code" aria-label="Code" appearance="code" onChange={onChange} />
      <Input
        id="Code-horizontal"
        value="Code"
        appearance="code"
        orientation="horizontal"
        onChange={onChange}
        label="horizontal"
      />
      <Input
        id="Code-secondary-horizontal"
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
      <Input
        id="Placeholder"
        aria-label="Input with placeholder"
        placeholder="Placeholder"
        onChange={onChange}
      />
      <Input id="With-value" value="With value" aria-label="Input with value" onChange={onChange} />
      <Input
        id="Disabled"
        value="Disabled"
        aria-label="Disabled input"
        disabled
        onChange={onChange}
      />
      <Input id="Icon" value="Icon" aria-label="Input with icon" icon="email" onChange={onChange} />
      <Input
        id="Error"
        aria-label="Input with error"
        placeholder="Error"
        error="There's a snake in my boots"
        onChange={onChange}
      />
      <Input
        id="Error with icon"
        aria-label="Input with error and icon"
        placeholder="Error with icon"
        icon="email"
        error="There's a snake in my boots"
        onChange={onChange}
      />
    </form>
  ))
  .add('secondary', () => (
    <form style={{ background: '#fff', padding: '3em' }}>
      <Input
        id="Placeholder"
        aria-label="Input with placeholder"
        placeholder="Placeholder"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="With-value"
        value="With value"
        aria-label="Input with value"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="Disabled"
        value="Disabled"
        aria-label="Disabled input"
        disabled
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="Icon"
        value="Icon"
        aria-label="Input with icon"
        icon="email"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="Error"
        aria-label="Input with error"
        placeholder="Error"
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
      <Input
        id="With-label"
        value="With value"
        label="Label secondary"
        appearance="secondary"
        onChange={onChange}
      />
    </form>
  ))
  .add('tertiary', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input
        id="Placeholder"
        aria-label="Input with placeholder"
        placeholder="Placeholder"
        appearance="tertiary"
        onChange={onChange}
      />
      <Input
        id="With-value"
        value="With value"
        aria-label="Input with value"
        appearance="tertiary"
        onChange={onChange}
      />
      <Input
        id="Disabled"
        value="Disabled"
        aria-label="Disabled input"
        disabled
        appearance="tertiary"
        onChange={onChange}
      />
      <Input
        id="Icon"
        value="Icon"
        aria-label="Input with icon"
        icon="email"
        appearance="tertiary"
        onChange={onChange}
      />
      <Input
        id="Error"
        aria-label="Input with error"
        placeholder="Error"
        error="There's a snake in my boots"
        appearance="tertiary"
        onChange={onChange}
      />
    </form>
  ))
  .add('pill', () => (
    <Input
      id="Pill"
      value="Pill"
      aria-label="Search"
      icon="search"
      appearance="pill"
      onChange={onChange}
    />
  ))
  .add('code', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Input
        id="Code-placeholder"
        placeholder="Code placeholder"
        aria-label="Code placeholder"
        appearance="code"
        onChange={onChange}
      />
      <Input id="Code" value="Code" aria-label="Code" appearance="code" onChange={onChange} />
      <Input
        id="Code-with-error"
        placeholder="Code"
        aria-label="Code"
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
    </form>
  ));
