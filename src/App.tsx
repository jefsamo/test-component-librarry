import React from "react";
import { Button } from "component-library";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div>
      <Button backgroundColor="green" color="white" style={{ padding: "20px" }}>
        Cool
      </Button>
    </div>
  );
};

export default App;
