import { TPosition } from "@/components/Elevator/Elevator.types.ts";

export enum TFloor {
  BOTTOM_FLOOR = "bottom-floor",
  TOP_FLOOR = "top-floor",
  FLOOR = "floor",
}
export enum TFloorSizes {
  BOTTOM_FLOOR = "120px",
  TOP_FLOOR = "350px",
  FLOOR = BOTTOM_FLOOR,
}
export interface FloorImageProps {
  floor: TFloor;
  elevators: number;
}

export interface FloorProps {
  isCalled: boolean;
  floor: number;
  totalFloors: number;
  elevatorsCount: number;
  onCallElevator: (position: TPosition) => void;
}
