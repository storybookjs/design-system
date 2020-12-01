import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Components / Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Reserve' };
Basic.storyName = 'primary button';
