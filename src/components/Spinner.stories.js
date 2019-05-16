import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from './Spinner';

storiesOf('Design System|Spinner', module)
  .add('default', () => (
    <div style={{ background: 'white', padding: '3em', position: 'relative' }}>
      <Spinner />
    </div>
  ))
  .add('Inverse', () => (
    <div style={{ background: 'black', padding: '3em', position: 'relative' }}>
      <Spinner inverse />
    </div>
  ))
  .add('inForm', () => (
    <div style={{ background: '#eee', padding: '3em', position: 'relative' }}>
      <Spinner inForm />
    </div>
  ))
  .add('inline', () => (
    <div style={{ background: '#eee', padding: '3em', position: 'relative' }}>
      <Spinner inline />
    </div>
  ));
