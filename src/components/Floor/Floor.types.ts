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
  /**
   * if `Call elevator` button was pressed and floor was added to elevator queue already
   */
  isCalled: boolean;
  /**
   * current floor number, starting from 1, not from 0
   */
  floor: number;
  /**
   * total floors number, used to calculate `last floor` image
   */
  totalFloors: number;
  /**
   * number of elevators that used by this floor, affect floor widht
   */
  elevatorsCount: number;
  /**
   * callback function that returns current floor position
   */
  onCallElevator: (position: TPosition) => void;
}
