import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

const onChange = action('change');
storiesOf('Design System|forms/Textarea', module)
  .addParameters({ component: Textarea })
  .add('all Textareas', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Textarea value="Default" onChange={onChange} />
      <Textarea value="Secondary" appearance="secondary" onChange={onChange} />
      <Textarea value="Tertiary" appearance="tertiary" onChange={onChange} />
      <Textarea value="Code" appearance="code" onChange={onChange} />
    </form>
  ))
  .add('default', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Textarea value="placeholder" placeholder="Placeholder" onChange={onChange} />
      <Textarea value="With value" onChange={onChange} />
      <Textarea value="Disabled" disabled onChange={onChange} />
      <Textarea label="Label" value="Label" onChange={onChange} />
      <Textarea value="Error" error="There's a snake in my boots" onChange={onChange} />
      <Textarea
        value="Label and error"
        label="Cats"
        error="There's a snake in my boots"
        onChange={onChange}
      />
    </form>
  ))
  .add('secondary', () => (
    <form style={{ background: '#fff', padding: '3em' }}>
      <Textarea
        value="placeholder"
        placeholder="Placeholder"
        appearance="secondary"
        onChange={onChange}
      />
      <Textarea value="With value" appearance="secondary" onChange={onChange} />
      <Textarea value="Disabled" disabled appearance="secondary" onChange={onChange} />
      <Textarea label="Label" value="Label" appearance="secondary" onChange={onChange} />
      <Textarea
        value="Error"
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
      <Textarea
        value="Label and error"
        label="Cats"
        error="There's a snake in my boots"
        appearance="secondary"
        onChange={onChange}
      />
    </form>
  ))
  .add('tertiary', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Textarea
        value="placeholder"
        placeholder="Placeholder"
        appearance="tertiary"
        onChange={onChange}
      />
      <Textarea value="With value" appearance="tertiary" onChange={onChange} />
      <Textarea value="Disabled" disabled appearance="tertiary" onChange={onChange} />
      <Textarea label="Label" value="Label" appearance="tertiary" onChange={onChange} />
      <Textarea
        value="Error"
        error="There's a snake in my boots"
        appearance="tertiary"
        onChange={onChange}
      />
      <Textarea
        value="Label and error"
        label="Cats"
        error="There's a snake in my boots"
        appearance="tertiary"
        onChange={onChange}
      />
    </form>
  ))
  .add('code', () => (
    <form style={{ background: '#EEEEEE', padding: '3em' }}>
      <Textarea
        value="placeholder"
        placeholder="Code placeholder"
        appearance="code"
        onChange={onChange}
      />
      <Textarea value="Code" appearance="code" onChange={onChange} />
      <Textarea value="Code" appearance="code" error="Does not compute" onChange={onChange} />
      <Textarea label="Label" value="Label" appearance="code" onChange={onChange} />

      <Textarea
        value="Label and error"
        label="Cats"
        error="There's a snake in my boots"
        appearance="code"
        onChange={onChange}
      />
      <Textarea
        value="Label and error"
        label="Cats"
        appearance="code"
        orientation="horizontal"
        onChange={onChange}
      />
      <Textarea
        value="Label and error"
        label="Cats"
        error="There's a snake in my boots"
        appearance="code"
        orientation="horizontal"
        onChange={onChange}
      />
    </form>
  ));
