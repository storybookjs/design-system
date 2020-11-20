import React from 'react';

import { ClipboardCode } from './ClipboardCode';

export default {
  title: 'Clipboard/ClipboardCode',
};

export const Default = () => (
  <div style={{ padding: '3em', width: 300 }}>
    <ClipboardCode code="git checkout master" />
  </div>
);

export const Wrapped = () => (
  <div style={{ padding: '3em', width: 250 }}>
    <ClipboardCode code="git checkout master" />
  </div>
);
