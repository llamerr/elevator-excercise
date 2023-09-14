import type { Meta, StoryObj } from '@storybook/react';

import Building from './Building';

const meta: Meta<typeof Building> = {
  title: 'Code Blocks/Building',
  component: Building,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Building>;

export const SmallBuilding: Story = {
  args: {
    floorsCount: 3,
    elevatorsCount: 1,
  }
};

export const BigBuilding: Story = {
  args: {
    floorsCount: 7,
    elevatorsCount: 5,
  }
};

