import React from 'react';
import styled from 'styled-components';
import WithTooltip from './WithTooltip';
import { TooltipMessage } from './TooltipMessage';

export default {
  title: 'tooltip/TooltipMessage',

  decorators: [
    (storyFn) => (
      <div style={{ height: '300px' }}>
        <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
          <div>Tooltip</div>
        </WithTooltip>
      </div>
    ),
  ],
  component: TooltipMessage,
};

export const defaultStory = () => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
  />
);

defaultStory.storyName = 'default';

export const withLink = () => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
    links={[{ title: 'Continue', href: 'test' }]}
  />
);

withLink.storyName = 'with link';

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

withLinks.storyName = 'with links';

export const minimalMessage = () => (
  <TooltipMessage desc="Amet consectatur vestibulum concet durum politu coret weirom" />
);

minimalMessage.storyName = 'minimal message';

export const withCustomClass = () => {
  const CustomWrapper = styled(TooltipMessage)`
    background: black;
    & * {
      color: white;
    }
  `;
  return <CustomWrapper desc="Amet consectatur vestibulum concet durum politu coret weirom" />;
};

withCustomClass.storyName = 'with custom className';
