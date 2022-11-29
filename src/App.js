// import Form from "./components/Form";
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
      {/* <Form /> */}
      {name}
    </div>
  );
}

export default App;
