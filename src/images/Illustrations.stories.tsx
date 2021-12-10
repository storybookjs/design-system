import React from 'react';
import { styled } from '@storybook/theming';

import * as coloredIcons from './colored-icons';

export default {
  title: 'Images',
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 0 0 20%;
  margin-right: 5%;
  margin-bottom: 20px;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ColoredIcons = () => (
  <Grid>
    {Object.entries(coloredIcons).map(([name, Icon]) => (
      <Item key={name}>
        <Icon /> {name}
      </Item>
    ))}
  </Grid>
);
