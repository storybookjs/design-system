import React from 'react';
import WithTooltip from './WithTooltip';

import { TooltipMessage } from './TooltipMessage';

export default {
  title: 'Design System/tooltip/TooltipMessage',

  decorators: [
    storyFn => (
      <div style={{ height: '300px' }}>
        <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
          <div>Tooltip</div>
        </WithTooltip>
      </div>
    ),
  ],

  parameters: {
    component: TooltipMessage,
  },
};

export const defaultStory = () => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
  />
);

defaultStory.story = {
  name: 'default',
};

export const withLink = () => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
    links={[{ title: 'Continue', href: 'test' }]}
  />
);

withLink.story = {
  name: 'with link',
};

export const withLinks = () => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
    links={[
      { title: 'Get more tips', href: 'test' },
      { title: 'Done', href: 'test' },
    ]}
  />
);

withLinks.story = {
  name: 'with links',
};

export const minimalMessage = () => (
  <TooltipMessage desc="Amet consectatur vestibulum concet durum politu coret weirom" />
);

minimalMessage.story = {
  name: 'minimal message',
};
