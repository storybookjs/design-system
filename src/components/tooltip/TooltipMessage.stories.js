import React from 'react';
import { storiesOf } from '@storybook/react';
import WithTooltip from './WithTooltip';

import { TooltipMessage } from './TooltipMessage';

storiesOf('Design System|tooltip/TooltipMessage', module)
  .addDecorator(storyFn => (
    <div style={{ height: '300px' }}>
      <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
        <div>Tooltip</div>
      </WithTooltip>
    </div>
  ))
  .add('default', () => (
    <TooltipMessage
      title="Lorem ipsum dolor sit"
      desc="Amet consectatur vestibulum concet durum politu coret weirom"
    />
  ))
  .add('with link', () => (
    <TooltipMessage
      title="Lorem ipsum dolor sit"
      desc="Amet consectatur vestibulum concet durum politu coret weirom"
      links={[{ title: 'Continue', href: 'test' }]}
    />
  ))
  .add('with links', () => (
    <TooltipMessage
      title="Lorem ipsum dolor sit"
      desc="Amet consectatur vestibulum concet durum politu coret weirom"
      links={[{ title: 'Get more tips', href: 'test' }, { title: 'Done', href: 'test' }]}
    />
  ))
  .add('minimal message', () => (
    <TooltipMessage desc="Amet consectatur vestibulum concet durum politu coret weirom" />
  ));
