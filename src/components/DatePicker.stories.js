import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import DatePicker from './DatePicker';

export default {
  title: 'Components / Date Pickers',
  component: DatePicker,
};

export const Basic = (args) => <DatePicker {...args} />;
Basic.args = { children: '' };
Basic.storyName = 'Guest Date Picker';
