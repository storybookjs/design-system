import React from 'react';

import { ClipboardInput } from './ClipboardInput';

export default {
  title: 'Clipboard/ClipboardInput',
};

export const Default = () => (
  <div style={{ padding: '3em', width: 300 }}>
    <ClipboardInput label="Label" value="https://www.chromatic.com" />
  </div>
);

export const Clipped = () => (
  <div style={{ padding: '3em', width: 250 }}>
    <ClipboardInput label="Label" value="https://www.chromatic.com" />
  </div>
);
