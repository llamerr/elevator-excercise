import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import { MotionProps } from "framer-motion";

import { ElevatorBoxProps } from "@/components/Elevator/Elevator.types.ts";

const ELEVATOR_SCALE_SIZE = 0.7;

interface ImgProps {
  alt: string;
  src: string;
}

export const ElevatorBox = styled(Box)<
  BoxProps & ImgProps & ElevatorBoxProps & MotionProps
>(({ right, top, floor }) => ({
  position: "absolute",
  right: right,
  top: top,
  maxHeight: `${floor * ELEVATOR_SCALE_SIZE}px`,
}));
