import { Dispatch, SetStateAction } from "react";

import { DynamicQueue } from "@/components/ElevatorController/ElevatorController.ts";

export type TPosition = {
  floor: number;
  position: number;
  isProcessed: boolean;
};

export type ElevatorProps = {
  number: number;
  position: TPosition;
  queue: DynamicQueue;
  setElevatorPosition: (item: TPosition) => void;
};

export type ElevatorBoxProps = {
  right: number;
  top: number;
  floor: number;
};
