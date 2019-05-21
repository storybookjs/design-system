import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from './Spinner';

storiesOf('Design System|Spinner', module)
  .addParameters({ component: Spinner })
  .add('default', () => (
    <div style={{ background: 'white', padding: '1.5em', position: 'relative' }}>
      <Spinner />
    </div>
  ))
  .add('Inverse', () => (
    <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>
      <Spinner inverse />
    </div>
  ))
  .add('inForm', () => (
    <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
      <Spinner inForm />
    </div>
  ))
  .add('inline', () => (
    <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
      <Spinner inline />
    </div>
  ));
