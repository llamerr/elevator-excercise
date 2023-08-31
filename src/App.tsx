import { useState } from "react";

import Building from "@/components/Building/Building.tsx";
import DefaultLayout from "@/layouts/default.tsx";

function App() {
  const [buildings, setBuildings] = useState([]);
  return (
    <>
      <DefaultLayout>
        <Building elevatorsCount={2} />
      </DefaultLayout>
    </>
  );
}

export default App;
