import React, { useState } from "react";
import Alert, { AlertType } from "./components/Alert/alert";
import DatePicker from "./components/DatePicker/datePicker";
import Input from "./components/Input/input";

const App = (props: any) => {
  const [value, setValue] = useState("");
  const ControlledInput = () => {

  }
  return (
    <div style={{ margin: "30px" }}>
      <DatePicker />
    </div>
  );
};

export default App;
