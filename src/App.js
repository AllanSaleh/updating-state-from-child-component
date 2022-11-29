import Child from "./components/Child";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");

  const callback = (value) => {
    setName(value);
  };

  return (
    <div>
      <Child callback={callback} />
      {name}
    </div>
  );
}

export default App;
