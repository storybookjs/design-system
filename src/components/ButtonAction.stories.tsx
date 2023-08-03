import type { Meta, StoryObj } from '@storybook/react';

import { ButtonAction } from './ButtonAction';

const meta: Meta<typeof ButtonAction> = {
  title: 'ButtonAction',
  component: ButtonAction,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonAction>;

export const IconOnly: Story = {
  args: {
    children: '',
    icon: 'starhollow',
    isActive: false,
  },
};

export const IconOnlyActive: Story = {
  args: {
    children: '',
    icon: 'starhollow',
    isActive: true,
  },
};

export const WithLabel: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
  },
};

export const WithLabelActive: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: true,
  },
};

export const IconOnlyIsSelect: Story = {
  args: {
    children: '',
    icon: 'starhollow',
    isActive: false,
    isSelect: true,
  },
};

export const WithLabelIsSelect: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    isSelect: true,
  },
};

export const IconOnlyWithTooltip: Story = {
  args: {
    icon: 'starhollow',
    isActive: false,
    tooltip: "I'm a tooltip",
  },
};

export const WithLabelWithTooltip: Story = {
  args: {
    children: 'Hello World',
    icon: 'starhollow',
    isActive: false,
    tooltip: "I'm a tooltip",
  },
};
