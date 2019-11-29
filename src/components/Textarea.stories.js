import React from 'react';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

const onChange = action('change');

export default {
  title: 'Design System/forms/Textarea',
  component: Textarea,
};

export const allTextareas = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Textarea id="Default" label="Default textarea" hideLabel value="Default" onChange={onChange} />
    <Textarea
      id="Secondary"
      label="Secondary textarea"
      hideLabel
      value="Secondary"
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea
      id="Tertiary"
      label="Tertiary textarea"
      hideLabel
      value="Tertiary"
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea
      id="Code"
      label="Code textarea"
      hideLabel
      value="Code"
      appearance="code"
      onChange={onChange}
    />
  </form>
);

allTextareas.story = {
  name: 'all Textareas',
};

export const defaultStory = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Textarea
      id="Placeholder"
      label="Textarea with placeholder"
      hideLabel
      value="placeholder"
      placeholder="Placeholder"
      onChange={onChange}
    />
    <Textarea
      id="With-value"
      label="Textarea with value"
      hideLabel
      value="With value"
      onChange={onChange}
    />
    <Textarea
      id="Disabled"
      label="Disabled textarea"
      hideLabel
      value="Disabled"
      disabled
      onChange={onChange}
    />
    <Textarea id="Label" label="Label" value="Label" onChange={onChange} />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Error"
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Textarea
      id="Label-and-error"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      onChange={onChange}
    />
    <Textarea
      id="Subtext"
      value="Subtext"
      label="Textarea with subtext"
      hideLabel
      subtext="140 chars left"
      onChange={onChange}
    />
  </form>
);

defaultStory.story = {
  name: 'default',
};

export const secondary = () => (
  <form style={{ background: '#fff', padding: '3em' }}>
    <Textarea
      id="Placeholder"
      label="Textarea with placeholder"
      hideLabel
      value="placeholder"
      placeholder="Placeholder"
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea
      id="With-value"
      label="Textarea with value"
      hideLabel
      value="With value"
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea
      id="Disabled"
      label="Disabled textarea"
      hideLabel
      value="Disabled"
      disabled
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea id="Label" label="Label" value="Label" appearance="secondary" onChange={onChange} />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Error"
      error="There's a snake in my boots"
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea
      id="Label-and-error"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      appearance="secondary"
      onChange={onChange}
    />
    <Textarea
      id="Subtext"
      value="Subtext"
      label="Textarea with subtext"
      hideLabel
      subtext="140 chars left"
      appearance="secondary"
      onChange={onChange}
    />
  </form>
);

export const tertiary = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Textarea
      id="Placeholder"
      label="Textarea with placeholder"
      hideLabel
      value="placeholder"
      placeholder="Placeholder"
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea
      id="With-value"
      label="Textarea with value"
      hideLabel
      value="With value"
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea
      id="Disabled"
      label="Disabled textarea"
      hideLabel
      value="Disabled"
      disabled
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea id="Label" label="Label" value="Label" appearance="tertiary" onChange={onChange} />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Error"
      error="There's a snake in my boots"
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea
      id="Label-and-error"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      appearance="tertiary"
      onChange={onChange}
    />
    <Textarea
      id="Subtext"
      value="Subtext"
      label="Textarea with subtext"
      hideLabel
      subtext="140 chars left"
      appearance="tertiary"
      onChange={onChange}
    />
  </form>
);

export const code = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Textarea
      id="Placeholder"
      label="Textarea with placeholder"
      hideLabel
      value="placeholder"
      placeholder="Code placeholder"
      appearance="code"
      onChange={onChange}
    />
    <Textarea
      id="With-value"
      label="Textarea with value"
      hideLabel
      value="Code"
      appearance="code"
      onChange={onChange}
    />
    <Textarea
      id="Error"
      label="Textarea with error"
      hideLabel
      value="Code"
      appearance="code"
      error="Does not compute"
      onChange={onChange}
    />
    <Textarea id="Label" label="Label" value="Label" appearance="code" onChange={onChange} />

    <Textarea
      id="Label-and-error"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      appearance="code"
      onChange={onChange}
    />
    <Textarea
      id="Label-horizontal"
      value="Label"
      label="Cats"
      appearance="code"
      orientation="horizontal"
      onChange={onChange}
    />
    <Textarea
      id="Label-and-error-horizontal"
      value="Label and error"
      label="Cats"
      error="There's a snake in my boots"
      appearance="code"
      orientation="horizontal"
      onChange={onChange}
    />
    <Textarea
      id="Subtext"
      value="Subtext"
      label="Textarea with subtext"
      hideLabel
      subtext="140 chars left"
      appearance="code"
      onChange={onChange}
    />
  </form>
);
