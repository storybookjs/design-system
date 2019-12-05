import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Design System/Spinner',
  component: Spinner,
};

export const defaultStory = () => (
  <div style={{ background: 'white', padding: '1.5em', position: 'relative' }}>
    <Spinner />
  </div>
);

defaultStory.story = {
  name: 'default',
};

export const inverse = () => (
  <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>
    <Spinner inverse />
  </div>
);

inverse.story = {
  name: 'Inverse',
};

export const inForm = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inForm />
  </div>
);

export const inline = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inline />
  </div>
);
