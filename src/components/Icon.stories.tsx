import React from 'react';
import { styled, css } from '@storybook/theming';

import { Icon } from './Icon';
import { icons } from './shared/icons';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 16%;
  min-width: 120px;
  margin: 16px;

  svg {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      margin: 16px;

      svg {
        display: block;
        margin-right: 0;
        width: 14px;
        height: 14px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Header = styled.h2`
  font-size: 16px;
  margin: 16px;
`;

export default {
  title: 'Icon',
  component: Icon,
};

export const Basic = (args) => <Icon {...args} />;
Basic.args = { icon: 'watch' };

export const Labels = () => (
  <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key as keyof typeof icons} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

export const NoLabels = () => (
  <>
    <Header>{Object.keys(icons).length} icons</Header>
    <List>
      {Object.keys(icons).map((key) => (
        <Item minimal key={key}>
          <Icon icon={key as keyof typeof icons} aria-label={key} />
        </Item>
      ))}
    </List>
  </>
);
