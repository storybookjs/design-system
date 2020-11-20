import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import PriceHeader from './PriceHeader';

export default {
  title: 'Components / Headers',
  component: PriceHeader,
};

export const Basic = (args) => <PriceHeader {...args} />;
Basic.args = { children: '' };
Basic.storyName = 'Price Header';
