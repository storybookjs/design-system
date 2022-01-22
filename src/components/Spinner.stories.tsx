import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const Default = () => (
  <div style={{ background: 'white', padding: '1.5em', position: 'relative' }}>
    <Spinner />
  </div>
);

export const Inverse = () => (
  <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>
    <Spinner inverse />
  </div>
);

export const InForm = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inForm />
  </div>
);

export const Inline = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inline />
  </div>
);

export const InlinePositive = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inline positive />
  </div>
);

export const InlineNegative = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inline negative />
  </div>
);

export const InlineNeutral = () => (
  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>
    <Spinner inline neutral />
  </div>
);

export const InlineInverse = () => (
  <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>
    <Spinner inline inverse />
  </div>
);
