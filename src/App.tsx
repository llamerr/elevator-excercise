import { useState } from "react";

import Floor from "@/components/Floor/Floor.tsx";
import DefaultLayout from "@/layouts/default.tsx";

const MIN_FLOORS = 3;
const MAX_FLOORS = 100;
const MIN_ELEVATORS = 1;
const MAX_ELEVATORS = 10;

function App() {
  const [floors, setFloors] = useState(7);
  const [elevators, setElevators] = useState(1);

  return (
    <>
      <DefaultLayout>
        <div className="card">
          {[...Array(floors + 1).keys()]
            .slice(1)
            .reverse()
            .map((floor, index) => (
              <Floor key={index} floor={floor} totalFloors={floors} />
            ))}
        </div>
      </DefaultLayout>
    </>
  );
}

export default App;
