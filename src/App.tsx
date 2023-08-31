import { useState } from "react";

import Building from "@/components/Building/Building.tsx";
import DefaultLayout from "@/layouts/default.tsx";

function App() {
  const [buildings, setBuildings] = useState([]);
  return (
    <>
      <DefaultLayout>
        <Building elevatorsCount={2} />
        <Building floorsCount={9} elevatorsCount={4} />
        <Building floorsCount={5} elevatorsCount={3} />
      </DefaultLayout>
    </>
  );
}

export default App;
