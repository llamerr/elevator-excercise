import type { Meta, StoryObj } from '@storybook/react';

import {
  DynamicQueue
} from "@/components/ElevatorController/ElevatorController.ts";

import Elevator from './Elevator';

/**
 * This component is not used alone and only used as part of Building
 */
const meta: Meta<typeof Elevator> = {
  title: 'Code Blocks/Elevator',
  component: Elevator,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Elevator>;

export const DefaultElevator: Story = {
  args: {
    number: 1,
    position: {
      floor: 1,
      position: 120,
      isProcessed: false,
    },
    queue: new DynamicQueue(),
  }
};
