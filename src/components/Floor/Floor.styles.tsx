import styled from "@emotion/styled";
import { Card, CardMedia } from "@mui/material";

import BottomFloorImg from "/bottom-floor.png";
import FloorImg from "/floor.png";
import TopFloorImg from "/top-floor.png";

import { FloorImageProps, TFloor, TFloorSizes } from "./Floor.types.ts";

export const FloorImage = styled(CardMedia)<FloorImageProps>(({ floor }) => ({
  backgroundImage: `url('${
    floor === TFloor.BOTTOM_FLOOR
      ? BottomFloorImg
      : floor === TFloor.TOP_FLOOR
      ? TopFloorImg
      : FloorImg
  }')`,
  backgroundSize: "100% 100%",
  position: "absolute",
  height:
    floor === TFloor.BOTTOM_FLOOR
      ? TFloorSizes.BOTTOM_FLOOR
      : floor === TFloor.TOP_FLOOR
      ? TFloorSizes.TOP_FLOOR
      : TFloorSizes.FLOOR,
  width: "100%",
  zIndex: -1,
}));

export const FloorCard = styled(Card)<FloorImageProps>(({ floor }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-start",
  maxWidth: 345,
  position: "relative",
  background: "transparent",
  height:
    floor === TFloor.BOTTOM_FLOOR
      ? TFloorSizes.BOTTOM_FLOOR
      : floor === TFloor.TOP_FLOOR
      ? TFloorSizes.TOP_FLOOR
      : TFloorSizes.FLOOR,
}));
