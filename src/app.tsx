import React from "react";
import Alert, { AlertType } from "./components/Alert/alert";

const App = () => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Alert title="This is success alert title" discription="Success discription, this is a discription. " alertType={AlertType.Success} />
        <Alert discription="Only discription test"  alertType={AlertType.Danger} />
        <Alert title="This is warning alert title" discription="Warning discription"  alertType={AlertType.Warning} />
        <Alert title="This is default alert title" discription="Default discription" alertType={AlertType.Default} />
      </div>
    </>
  );
};

export default App;
