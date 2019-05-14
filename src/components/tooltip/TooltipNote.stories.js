import React from 'react';
import { storiesOf } from '@storybook/react';
import WithTooltip from './WithTooltip';

import TooltipNote from './TooltipNote';

storiesOf('Design System|tooltip/TooltipNote', module)
  .addDecorator(storyFn => (
    <div style={{ height: '300px' }}>
      <WithTooltip hasChrome={false} placement="top" trigger="click" startOpen tooltip={storyFn()}>
        <div>Tooltip</div>
      </WithTooltip>
    </div>
  ))
  .add('default', () => <TooltipNote note="Lorem ipsum dolor" />);
