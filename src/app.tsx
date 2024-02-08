import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App = () => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large
        </Button>
        <Button>Normal</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small
        </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>
          disabled
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://www.google.com"
          size={ButtonSize.Large}
        >
          Google
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="www.google.com"
          size={ButtonSize.Small}
          disabled
        >
          Disabled Google
        </Button>
      </div>
    </>
  );
};

export default App;
