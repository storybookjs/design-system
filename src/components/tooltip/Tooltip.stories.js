import React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';

// Popper would position the tooltip absolutely. We just need to make sure we are pos:rel
const mockPopperProps = { style: { position: 'relative', top: '0px', left: '0px' } };

const Content = styled.div`
  width: 100px;
  height: 100px;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
  outline: 1px dotted red;
`;

export default {
  title: 'tooltip/Tooltip',
  component: Tooltip,
  decorators: [
    (storyFn) => (
      <div style={{ padding: '1em', background: '#eee', display: 'inline-block' }}>{storyFn()}</div>
    ),
  ],
};

export const basicDefault = () => (
  <Tooltip hasChrome {...mockPopperProps}>
    <Content>Text</Content>
  </Tooltip>
);

basicDefault.storyName = 'basic, default';

export const basicDefaultBottom = () => (
  <Tooltip hasChrome placement="bottom" {...mockPopperProps}>
    <Content>Text</Content>
  </Tooltip>
);

basicDefaultBottom.storyName = 'basic, default, bottom';

export const basicDefaultLeft = () => (
  <Tooltip hasChrome placement="left" {...mockPopperProps}>
    <Content>Text</Content>
  </Tooltip>
);

basicDefaultLeft.storyName = 'basic, default, left';

export const basicDefaultRight = () => (
  <Tooltip placement="right" {...mockPopperProps}>
    <Content>Text</Content>
  </Tooltip>
);

basicDefaultRight.storyName = 'basic, default, right';

export const noChrome = () => (
  <Tooltip hasChrome={false} {...mockPopperProps}>
    <Content>Text</Content>
  </Tooltip>
);

noChrome.storyName = 'no chrome';
