import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { BuildingProps } from "@/components/Building/Building.types.ts";
import Elevator from "@/components/Elevator/Elevator.tsx";
import { TPosition } from "@/components/Elevator/Elevator.types.ts";
import { DynamicQueue } from "@/components/ElevatorController/ElevatorController.ts";
import Floor from "@/components/Floor/Floor.tsx";
import { FloorProps } from "@/components/Floor/Floor.types.ts";

const Building: React.FC<BuildingProps> = ({
  floorsCount = 7,
  elevatorsCount = 1,
}) => {
  const [floors, setFloors] = useState(floorsCount);
  const [elevators, setElevators] = useState(elevatorsCount);
  const lastFloorRef = useRef();
  const queue = useRef(new DynamicQueue());

  // TODO: useReducer for complex state? https://www.robinwieruch.de/react-usereducer-vs-usestate/
  // useReducer gives us more predictable state transitions than useState. This becomes much more important when state changes
  // are more complex and you want to have one place -- the reducer function -- to reason about them. A well designed reducer
  // function encapsulates this logic perfectly.
  const [elevatorPosition, setElevatorPosition] = useState<TPosition[]>(
    Array(elevators).fill(
      {
        floor: floors,
        position: 0,
        isProcessed: false,
      },
      0,
      elevators,
    ),
  );

  useEffect(() => {
    if (lastFloorRef.current) {
      const targetButton = lastFloorRef.current as HTMLButtonElement;
      const offsetTop =
        targetButton.offsetTop +
        (
          (targetButton.parentNode?.parentNode as HTMLDivElement)
            .parentNode as HTMLDivElement
        ).offsetTop;
      setElevatorPosition(
        Array(elevators).fill(
          {
            floor: floors,
            position: offsetTop,
            isProcessed: true,
          },
          0,
          elevators,
        ),
      );
    }
  }, [lastFloorRef, elevators, floors]);

  const handleCall: FloorProps["onCallElevator"] = (item) => {
    queue.current.enqueue(item);
    // check current processed number, if it's less than number of elevators, find closest non-processed in positions and replace it with new from queue
    const nextPosition = queue.current.processQueue();
    if (queue.current.processedNumber() < elevatorsCount && nextPosition) {
      const newPositions = [...elevatorPosition];
      let nonProcessedIndex = newPositions.findIndex(
        (item) => !item.isProcessed,
      );
      let nonProcessedMinWeight = floors + 1;
      newPositions.map((elevatorCurrentItem, index) => {
        console.log("checking", JSON.stringify(elevatorCurrentItem));
        if (!elevatorCurrentItem.isProcessed) {
          const weight = Math.abs(elevatorCurrentItem.floor - item.floor);
          if (
            nonProcessedIndex === undefined ||
            weight < nonProcessedMinWeight
          ) {
            nonProcessedIndex = index;
            nonProcessedMinWeight = weight;
          }
        }
      });
      console.log("non-processed", nonProcessedIndex, nonProcessedMinWeight);
      newPositions.splice(nonProcessedIndex, 1, nextPosition);
      console.log(
        "start processing after adding new item",
        newPositions.map((item) => JSON.stringify(item)),
      );
      console.log("processing now", queue.current.processedNumber());
      console.log("setting new positions", newPositions);
      setElevatorPosition(newPositions);
    }
  };

  console.log(
    "elevatorPosition",
    elevatorPosition.map((item) => JSON.stringify(item)),
  );

  return (
    <Box sx={{ position: "relative", width: "fit-content", padding: "0 20px" }}>
      {[...Array(elevators) as number].map((_, index) => (
        <Elevator
          key={index}
          number={index}
          position={elevatorPosition[index]}
          queue={queue.current}
          setElevatorPosition={(newPosition) => {
            const newPositions = [...elevatorPosition];
            const processedIndex = newPositions.findIndex(
              (item) => item.floor == newPosition.floor,
            );
            newPositions.splice(processedIndex, 1, newPosition);
            setElevatorPosition(newPositions);
          }}
        />
      ))}
      {[...Array(floors + 1).keys()]
        .slice(1)
        .reverse()
        .map((floor, index) => {
          const hasFloorInQueue = !!queue.current.queue.find(
            (item) => item.floor === floor,
          );
          const hasElevatorAtTheFloor = elevatorPosition.find(
            (item) => item.floor === floor && !item.isProcessed,
          );
          //TODO: isCalled not working yet since I'm triggering isProcessed change by link, so react not detecting it
          return (
            <Floor
              isCalled={hasFloorInQueue && !hasElevatorAtTheFloor}
              key={index}
              {...(index == 0 ? { ref: lastFloorRef } : {})}
              floor={floor}
              totalFloors={floors}
              elevatorsCount={elevators}
              onCallElevator={handleCall}
            />
          );
        })}
    </Box>
  );
};

export default Building;
