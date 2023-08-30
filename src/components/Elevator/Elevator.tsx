import { Box } from "@mui/material";
import { usePrevious } from "@uidotdev/usehooks";
import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

import ElevatorImage from "/elevator.png";
import { ElevatorProps } from "@/components/Elevator/Elevator.types.ts";
import { TFloorSizes } from "@/components/Floor/Floor.types.ts";

const FLOOR_MOVEMENT_DURATION = 2;
const ELEVATOR_SCALE_SIZE = 0.7;

const Elevator: React.FC<ElevatorProps> = ({ position }) => {
  const [scope, animate] = useAnimate();
  const previousPosition = usePrevious(position.position);
  const previousFloor = usePrevious(position.floor);

  useEffect(() => {
    const duration =
      Math.abs(position.floor - (previousFloor ?? position.floor)) *
      FLOOR_MOVEMENT_DURATION;
    animate(scope.current, { top: position.position }, { duration: duration });
  }, [position, previousFloor, scope, animate]);

  return (
    <Box
      component="img"
      ref={scope}
      animate={{ top: position.position }}
      transition={{
        ease: "linear",
        duration: FLOOR_MOVEMENT_DURATION,
      }}
      sx={{
        position: "absolute",
        right: 80,
        top: previousPosition,
        maxHeight: {
          xs: `${parseInt(TFloorSizes.FLOOR) * ELEVATOR_SCALE_SIZE}px`,
        },
      }}
      alt="Elevator"
      src={ElevatorImage}
    />
  );
};

export default Elevator;
