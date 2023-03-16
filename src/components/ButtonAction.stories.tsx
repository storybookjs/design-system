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

export const WithTooltip: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    isLoading: false,
    tooltip: "I'm a tooltip",
  },
};

export const Active: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: true,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    isLoading: true,
  },
};

export const LoadingWithText: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    isLoading: true,
    loadingText: 'Loading',
  },
};
