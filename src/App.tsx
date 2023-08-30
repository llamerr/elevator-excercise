import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Elevator from "@/components/Elevator/Elevator.tsx";
import { TPosition } from "@/components/Elevator/Elevator.types.ts";
import {
  DynamicQueue,
  TProcessCallback,
} from "@/components/ElevatorController/ElevatorController.ts";
import Floor from "@/components/Floor/Floor.tsx";
import { FloorProps } from "@/components/Floor/Floor.types.ts";
import DefaultLayout from "@/layouts/default.tsx";

const MIN_FLOORS = 3;
const MAX_FLOORS = 100;
const MIN_ELEVATORS = 1;
const MAX_ELEVATORS = 10;

function App() {
  const [floors, setFloors] = useState(7);
  const [elevators, setElevators] = useState(1);
  const lastFloorRef = useRef();
  const queue = useRef(new DynamicQueue(1, processItem));

  // Example processing callback
  function processItem(item: string) {
    console.log(`Processing item: ${item}`);
    // Simulate processing time (replace with actual processing logic)
    return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      console.log(`Processed item: ${item}`);
    });
  }

  const [elevatorPosition, setElevatorPosition] = useState<TPosition>({
    floor: floors,
    position: 0,
  });

  useEffect(() => {
    if (lastFloorRef.current) {
      const targetButton = lastFloorRef.current as HTMLButtonElement;
      const offsetTop =
        targetButton.offsetTop +
        (targetButton.parentNode?.parentNode as HTMLDivElement).offsetTop;
      setElevatorPosition({ floor: floors, position: offsetTop });
    }
  }, [lastFloorRef]);

  const handleCall: FloorProps["onCallElevator"] = ({ floor, position }) => {
    setElevatorPosition({ floor, position });
    queue.current.enqueue(`floor ${floor}`);
  };

  return (
    <>
      <DefaultLayout>
        <Box sx={{ position: "relative", width: "fit-content" }}>
          <Elevator position={elevatorPosition} />
          {[...Array(floors + 1).keys()]
            .slice(1)
            .reverse()
            .map((floor, index) => (
              <Floor
                key={index}
                {...(index == 0 ? { ref: lastFloorRef } : {})}
                floor={floor}
                totalFloors={floors}
                onCallElevator={handleCall}
              />
            ))}
        </Box>
      </DefaultLayout>
    </>
  );
}

export default App;
