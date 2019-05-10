import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';
import icons from './shared/icons';

const Meta = styled.div`
  color: #999;
  font-size: 12px;
`;

const Item = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${props =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

storiesOf('basics/Icon', module)
  .add('labels', () => (
    <List>
      {Object.keys(icons).map(key => (
        <Item key={key}>
          <Icon icon={key} />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  ))
  .add('no labels', () => (
    <List>
      {Object.keys(icons).map(key => (
        <Item minimal key={key}>
          <Icon icon={key} />
        </Item>
      ))}
    </List>
  ));
