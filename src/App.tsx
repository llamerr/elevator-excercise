import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Elevator from "@/components/Elevator/Elevator.tsx";
import { TPosition } from "@/components/Elevator/Elevator.types.ts";
import Floor from "@/components/Floor/Floor.tsx";
import DefaultLayout from "@/layouts/default.tsx";

const MIN_FLOORS = 3;
const MAX_FLOORS = 100;
const MIN_ELEVATORS = 1;
const MAX_ELEVATORS = 10;

function App() {
  const [floors, setFloors] = useState(7);
  const [elevators, setElevators] = useState(1);
  const lastFloorRef = useRef();

  const [elevatorPosition, setElevatorPosition] = useState<TPosition>({
    floor: floors,
    position: 0,
  });

  useEffect(() => {
    if (lastFloorRef.current) {
      const offsetTop =
        lastFloorRef.current.offsetTop +
        lastFloorRef.current.parentNode.parentNode.offsetTop;
      setElevatorPosition({ floor: floors, position: offsetTop });
    }
  }, [lastFloorRef]);

  const handleCall = ({ floor, position }) => {
    setElevatorPosition({ floor, position });
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
