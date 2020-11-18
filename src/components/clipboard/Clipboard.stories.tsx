import React from 'react';

import { Clipboard } from './Clipboard';
// @ts-ignore
import { TooltipNote } from '../tooltip/TooltipNote';

export default {
  title: 'Design System/Clipboard/Clipboard',
  decorators: [(storyFn: any) => <div style={{ padding: '3em' }}>{storyFn()}</div>],
};

export const Default = () => <Clipboard toCopy="linky">Click to copy</Clipboard>;

export const Callback = () => (
  <Clipboard getCopyContent={() => 'linky from callback'}>Click to copy</Clipboard>
);

export const Tooltips = () => (
  <Clipboard
    toCopy="linky"
    renderCopiedTooltip={() => <TooltipNote note="Copied" />}
    renderUncopiedTooltip={() => <TooltipNote note="Copy to clipboard" />}
  >
    Click to copy
  </Clipboard>
);

export const WithFeedback = () => (
  <Clipboard toCopy="linky">{(copied) => (copied ? 'Copied' : 'Not yet copied')}</Clipboard>
);
