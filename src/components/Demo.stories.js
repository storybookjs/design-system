import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Demo from './Demo';

export default {
  title: 'Demo',
  component: Demo,
};

export const Basic = (args) => <Demo {...args} />;
Basic.args = { children: 'Label' };
Basic.storyName = 'Full demo';
