import React from 'react';
import WithTooltip from './WithTooltip';

import { TooltipNote } from './TooltipNote';

export default {
  title: 'Design System/tooltip/TooltipNote',

  decorators: [
    storyFn => (
      <div style={{ height: '300px' }}>
        <WithTooltip
          hasChrome={false}
          placement="top"
          trigger="click"
          startOpen
          tooltip={storyFn()}
        >
          <div>Tooltip</div>
        </WithTooltip>
      </div>
    ),
  ],

  parameters: {
    component: TooltipNote,
  },
};

export const defaultStory = () => <TooltipNote note="Lorem ipsum dolor" />;

defaultStory.story = {
  name: 'default',
};
