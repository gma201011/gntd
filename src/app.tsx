import React, { useState } from "react";
import Alert, { AlertType } from "./components/Alert/alert";
import Input from "./components/Input/input";

const App = (props: any) => {
  const [value, setValue] = useState("");
  const ControlledInput = () => {

  }
  return (
    <div style={{ margin: "30px" }}>
      <Input value={value} onChange={(e) => {setValue(e.target.value)}}></Input>
      <Input style={{ width: "300px" }} />
      <Input size='lg' style={{ width: "300px" }} defaultValue={"defaultValue"} prepend={"https://"} />
      <Input size='sm' style={{ width: "300px" }} append={".com"} />
      <Input disabled style={{ width: "300px" }} defaultValue={"disabled"} />
    </div>
  );
};

export default App;
