import { useState } from "react";
import { Hijo1 } from "./components/Hijo1";
import { Hijo2 } from "./components/Hijo2";
import { Hijo3 } from "./components/Hijo3";

function App() {
  return (
    <div>
      <h1>padre</h1>

      <Hijo1 />
      <Hijo2 />
      <Hijo3 />
    </div>
  );
}

export default App;
