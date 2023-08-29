import { useState } from "react";
import "./App.css";
import DefaultLayout from "./layouts/default.tsx";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DefaultLayout>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </DefaultLayout>
    </>
  );
}

export default App;
