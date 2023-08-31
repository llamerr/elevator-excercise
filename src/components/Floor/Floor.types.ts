import { TPosition } from "@/components/Elevator/Elevator.types.ts";

export enum TFloor {
  BOTTOM_FLOOR = "bottom-floor",
  TOP_FLOOR = "top-floor",
  FLOOR = "floor",
}
export enum TFloorSizes {
  BOTTOM_FLOOR = "120px",
  TOP_FLOOR = "350px",
  FLOOR = "120px",
}
export type FloorImageProps = {
  floor: TFloor;
  elevators: number;
};

export type FloorProps = {
  isCalled: boolean;
  floor: number;
  totalFloors: number;
  elevatorsCount: number;
  onCallElevator: (position: TPosition) => void;
};
