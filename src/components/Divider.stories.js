import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Divider from './Divider';

export default {
  title: 'Components / Divider',
  component: Divider,
};

export const Basic = (args) => <Divider {...args} />;
Basic.args = { children: '' };
Basic.storyName = 'default';
