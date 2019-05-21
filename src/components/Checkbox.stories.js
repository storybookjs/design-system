import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');
storiesOf('Design System|forms/Checkbox', module)
  .addParameters({ component: Checkbox })
  .add('all checkboxes', () => (
    <form>
      <Checkbox onChange={onChange} />
      <Checkbox checked onChange={onChange} />
      <Checkbox label="Cats" onChange={onChange} error="There's a snake in my boots" />
      <Checkbox label="Cats" onChange={onChange} />
    </form>
  ))
  .add('unchecked', () => <Checkbox onChange={onChange} />)
  .add('checked', () => <Checkbox checked onChange={onChange} />);
