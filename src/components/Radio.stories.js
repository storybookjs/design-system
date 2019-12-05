import React from 'react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

const onChange = action('change');

export default {
  title: 'Design System/forms/Radio',
  component: Radio,
};

export const allRadios = () => (
  <form>
    <Radio id="Mice" label="Mice" value="mice" checked onChange={onChange} />
    <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} />
    <Radio id="Cats" label="Cats" onChange={onChange} error="There's a snake in my boots" />
    <Radio id="Dogs" label="Dogs" description="15 canines" value="dogs" onChange={onChange} />
    <Radio id="Mice" label="Mice" value="mice" onChange={onChange} checked appearance="secondary" />
    <Radio id="Dogs" label="Dogs" value="dogs" onChange={onChange} appearance="secondary" />
  </form>
);

allRadios.story = {
  name: 'all radios',
};

export const unchecked = () => (
  <Radio id="Mice" label="Mice" hideLabel value="mice" onChange={onChange} />
);

export const checked = () => (
  <Radio id="Dogs" label="Dogs" hideLabel value="dogs" checked onChange={onChange} />
);
