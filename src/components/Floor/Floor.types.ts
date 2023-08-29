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
};

export type FloorProps = {
  floor: number;
  totalFloors: number;
};
