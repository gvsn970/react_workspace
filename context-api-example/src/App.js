import React, { createContext, useState } from "react";
import Display from "./Display";
import Count from "./Count";

export const store = createContext();
const App = () => {
  const [data, setData] = useState([
    { brandName: "Real me" },
    { brandName: "i Phone" },
    { brandName: "Appo" },
  ]);
  return (
    <div>
      <store.Provider value={[data, setData]}>
        <center>
          <Count />
          <Display />
        </center>
      </store.Provider>
    </div>
  );
};

export default App;
