import React, { useState } from "react";
import Alert, { AlertType } from "./components/Alert/alert";
import DatePicker from "./components/DatePicker/datePicker";
import Input from "./components/Input/input";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App = (props: any) => {
  const [value, setValue] = useState("");
  const ControlledInput = () => {

  }
  return (
    <div style={{ margin: "30px" }}>
      <Button
        btnType={ButtonType.Link}
        href="www.google.com"
        size={ButtonSize.Small}
        // disabled
      >
        Disabled Google
      </Button>
    </div>
  );
};

export default App;
