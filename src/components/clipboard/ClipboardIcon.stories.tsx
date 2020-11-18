import React from 'react';

import { ClipboardIcon } from './ClipboardIcon';

export default {
  title: 'Design System/Clipboard/ClipboardIcon',
};

export const Default = () => (
  <div style={{ padding: '3em' }}>
    <ClipboardIcon toCopy="value" />
  </div>
);
