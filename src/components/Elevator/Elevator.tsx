import { usePrevious } from "@uidotdev/usehooks";
import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

import ElevatorImage from "/elevator.png";
import { ElevatorBox } from "@/components/Elevator/Elevator.styles.tsx";
import { ElevatorProps } from "@/components/Elevator/Elevator.types.ts";
import { TFloorSizes } from "@/components/Floor/Floor.types.ts";

const FLOOR_MOVEMENT_DURATION = 2;

const Elevator: React.FC<ElevatorProps> = ({
  number,
  position,
  queue,
  setElevatorPosition,
}) => {
  const [scope, animate] = useAnimate();
  const previousPosition = usePrevious(position.position);
  const previousFloor = usePrevious(position.floor);

  useEffect(() => {
    const duration =
      Math.abs(position.floor - (previousFloor ?? position.floor)) *
      FLOOR_MOVEMENT_DURATION;
    console.log(`Processing item: ${position.floor}`);
    position.isProcessed = true;
    animate(
      scope.current,
      { top: position.position },
      {
        duration: duration,
        onComplete: () => {
          console.log(`Done processing item: ${position.floor}`);
          queue.dequeue(position);
          position.isProcessed = false;
          const newPosition = queue.processQueue();
          if (newPosition) setElevatorPosition(newPosition);
        },
      },
    );
  }, [position, previousFloor, scope, animate]);

  return (
    <ElevatorBox
      component="img"
      ref={scope}
      animate={{ top: position.position }}
      transition={{
        ease: "linear",
        duration: FLOOR_MOVEMENT_DURATION,
      }}
      right={number * 100 + 100}
      top={previousPosition}
      floor={parseInt(TFloorSizes.FLOOR)}
      alt="Elevator"
      src={ElevatorImage}
    />
  );
};

export default Elevator;
