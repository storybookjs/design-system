import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Card from './Card';

export default {
  title: 'Components',
};

export const Basic = (args) => <Card {...args} />;
Basic.args = { children: '' };
Basic.storyName = 'Base';
