import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TooltipMessage } from './TooltipMessage';
import WithTooltip from './WithTooltip';

const ViewPort = styled.div`
  height: 300px;
  background: purple;
  overflow-y: scroll;
`;

const BackgroundBox = styled.div`
  width: 500px;
  height: 500px;
  background: pink;
  position: relative;
`;

const Spacer = styled.div`
  height: 100px;
`;

const Trigger = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
  color: white;
`;

const Circle = styled.circle`
  fill: fill: rgb(255, 0, 255);
`;

const Tooltip = ({ onHide }) => (
  <TooltipMessage
    title="Lorem ipsum dolor sit"
    desc="Amet consectatur vestibulum concet durum politu coret weirom"
    links={[{ title: 'Continue', onClick: onHide }]}
  />
);

Tooltip.propTypes = {
  onHide: PropTypes.func,
};

Tooltip.defaultProps = {
  onHide: null,
};

export default {
  title: 'Design System/tooltip/WithTooltip',

  decorators: [
    storyFn => (
      <ViewPort>
        <BackgroundBox>
          <Spacer />
          {storyFn()}
        </BackgroundBox>
      </ViewPort>
    ),
  ],

  parameters: {
    component: WithTooltip,
  },
};

export const simpleHover = () => (
  <WithTooltip placement="top" trigger="hover" tooltip={<Tooltip />}>
    <Trigger>Hover me!</Trigger>
  </WithTooltip>
);

simpleHover.story = {
  name: 'simple hover',
};

export const simpleHoverAsSvg = () => (
  <svg>
    <WithTooltip
      placement="top"
      trigger="hover"
      tooltip={<Tooltip />}
      tagName="g"
      aria-label="Empty box to hover for tooltip"
    >
      <Circle cx="150" cy="50" r="50" />
    </WithTooltip>
  </svg>
);

simpleHoverAsSvg.story = {
  name: 'simple hover, as svg',
};

export const simpleHoverFunctional = () => (
  <WithTooltip placement="top" trigger="hover" tooltip={Tooltip}>
    <Trigger>Hover me!</Trigger>
  </WithTooltip>
);

simpleHoverFunctional.story = {
  name: 'simple hover, functional',
};

export const simpleClick = () => (
  <WithTooltip placement="top" trigger="click" tooltip={<Tooltip />}>
    <Trigger>Click me!</Trigger>
  </WithTooltip>
);

simpleClick.story = {
  name: 'simple click',
};

export const simpleClickAsSvg = () => (
  <svg>
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={<Tooltip />}
      tagName="g"
      aria-label="Empty box to click for tooltip"
    >
      <Circle cx="150" cy="50" r="50" />
    </WithTooltip>
  </svg>
);

simpleClickAsSvg.story = {
  name: 'simple click, as svg',
};

export const simpleClickStartOpen = () => (
  <WithTooltip placement="top" trigger="click" startOpen tooltip={<Tooltip />}>
    <Trigger>Click me!</Trigger>
  </WithTooltip>
);

simpleClickStartOpen.story = {
  name: 'simple click start open',
};

export const simpleClickCloseOnClick = () => (
  <WithTooltip placement="top" trigger="click" closeOnClick tooltip={<Tooltip />}>
    <Trigger>Click me!</Trigger>
  </WithTooltip>
);

simpleClickCloseOnClick.story = {
  name: 'simple click closeOnClick',
};

export const noChrome = () => (
  <WithTooltip placement="top" trigger="click" hasChrome={false} tooltip={<Tooltip />}>
    <Trigger>Click me!</Trigger>
  </WithTooltip>
);

noChrome.story = {
  name: 'no chrome',
};
