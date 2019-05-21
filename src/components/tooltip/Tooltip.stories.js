import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';

// Popper would position the tooltip absolutely. We just need to make sure we are pos:rel
const mockPopperProps = { style: { position: 'relative', top: '20px', left: '20px' } };

const Content = styled.div`
  width: 100px;
  height: 100px;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
  background: #eee;
`;

storiesOf('Design System|tooltip/Tooltip', module)
  .addParameters({ component: Tooltip })
  .add('basic, default', () => (
    <Tooltip hasChrome {...mockPopperProps}>
      <Content>Text</Content>
    </Tooltip>
  ))
  .add('basic, default, bottom', () => (
    <Tooltip hasChrome placement="bottom" {...mockPopperProps}>
      <Content>Text</Content>
    </Tooltip>
  ))
  .add('basic, default, left', () => (
    <Tooltip hasChrome placement="left" {...mockPopperProps}>
      <Content>Text</Content>
    </Tooltip>
  ))
  .add('basic, default, right', () => (
    <Tooltip placement="right" {...mockPopperProps}>
      <Content>Text</Content>
    </Tooltip>
  ))
  .add('no chrome', () => (
    <Tooltip {...mockPopperProps}>
      <Content>Text</Content>
    </Tooltip>
  ));
