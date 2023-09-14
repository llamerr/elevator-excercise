import { DynamicQueue } from "@/components/ElevatorController/ElevatorController.ts";

export interface TPosition {
  floor: number;
  position: number;
  isProcessed: boolean;
}

export interface ElevatorProps {
  /**
   * TODO
   */
  number: number;
  /**
   * TODO
   */
  position: TPosition;
  /**
   * TODO
   */
  queue: DynamicQueue;
  /**
   * TODO
   */
  setElevatorPosition: (item: TPosition) => void;
}

export interface ElevatorBoxProps {
  right: number;
  top: number;
  floor: number;
}
