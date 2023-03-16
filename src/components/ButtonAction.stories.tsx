import type { Meta, StoryObj } from '@storybook/react';

import { ButtonAction } from './ButtonAction';

const meta: Meta<typeof ButtonAction> = {
  title: 'ButtonAction',
  component: ButtonAction,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonAction>;

export const Default: Story = {
  args: {
    children: '',
    icon: 'starhollow',
    isActive: false,
    isLoading: false,
  },
};

export const WithLabel: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    isLoading: false,
  },
};
