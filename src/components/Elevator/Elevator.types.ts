import { DynamicQueue } from "@/components/ElevatorController/ElevatorController.ts";

export interface TPosition {
  floor: number;
  position: number;
  isProcessed: boolean;
}

export interface ElevatorProps {
  number: number;
  position: TPosition;
  queue: DynamicQueue;
  setElevatorPosition: (item: TPosition) => void;
}

export interface ElevatorBoxProps {
  right: number;
  top: number;
  floor: number;
}
