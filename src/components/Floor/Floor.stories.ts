import type { Meta, StoryObj } from '@storybook/react';

import Floor from './Floor';

const meta: Meta<typeof Floor> = {
  title: 'Code Blocks/Floor',
  component: Floor,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Floor>;

export const TopFloor: Story = {
  args: {
    isCalled: false,
    floor: 4,
    totalFloors: 4,
    elevatorsCount: 1,
  }
};

export const MiddleFloor: Story = {
  args: {
    isCalled: false,
    floor: 2,
    totalFloors: 4,
    elevatorsCount: 1,
  }
};

export const BottomFloor: Story = {
  args: {
    isCalled: false,
    floor: 1,
    totalFloors: 4,
    elevatorsCount: 1,
  }
};
