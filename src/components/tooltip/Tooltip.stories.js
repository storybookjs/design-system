import React from 'react';
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

export default {
  title: 'Design System/tooltip/Tooltip',
  component: Tooltip,
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
