import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
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

storiesOf('Design System|tooltip/WithTooltip', module)
  .addParameters({ component: WithTooltip })
  .addDecorator(storyFn => (
    <ViewPort>
      <BackgroundBox>
        <Spacer />
        {storyFn()}
      </BackgroundBox>
    </ViewPort>
  ))
  .add('simple hover', () => (
    <WithTooltip placement="top" trigger="hover" tooltip={<Tooltip />}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
  ))
  .add('simple hover, as svg', () => (
    <svg>
      <WithTooltip
        placement="top"
        trigger="hover"
        tooltip={<Tooltip />}
        as="g"
        aria-label="Empty box to hover for tooltip"
      >
        <Circle cx="150" cy="50" r="50" />
      </WithTooltip>
    </svg>
  ))
  .add('simple hover, functional', () => (
    <WithTooltip placement="top" trigger="hover" tooltip={Tooltip}>
      <Trigger>Hover me!</Trigger>
    </WithTooltip>
  ))
  .add('simple click', () => (
    <WithTooltip placement="top" trigger="click" tooltip={<Tooltip />}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ))

  .add('simple click, as svg', () => (
    <svg>
      <WithTooltip
        placement="top"
        trigger="click"
        tooltip={<Tooltip />}
        as="g"
        aria-label="Empty box to click for tooltip"
      >
        <Circle cx="150" cy="50" r="50" />
      </WithTooltip>
    </svg>
  ))
  .add('simple click start open', () => (
    <WithTooltip placement="top" trigger="click" startOpen tooltip={<Tooltip />}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ))
  .add('simple click closeOnClick', () => (
    <WithTooltip placement="top" trigger="click" closeOnClick tooltip={<Tooltip />}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ))
  .add('no chrome', () => (
    <WithTooltip placement="top" trigger="click" hasChrome={false} tooltip={<Tooltip />}>
      <Trigger>Click me!</Trigger>
    </WithTooltip>
  ));
