import React from "react";

function Child(props) {
  return <button onClick={() => props.callback("Seyma")}>button</button>;
}

export default Child;
