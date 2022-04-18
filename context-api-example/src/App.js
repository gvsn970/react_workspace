import React, { createContext,useState } from "react";
import ComponentB from "./ComponentB";
import ComponetnA from "./ComponetnA";

export const store = createContext();
const App = () => {
  const[data, setData] = useState(0);
  return (
    <div>
      <store.Provider value={[data,setData]}>
      <center>
        <ComponetnA />
        <ComponentB />
      </center>
      </store.Provider>
      <button onClick={()=>{setData(data+1)}}>Click</button>
    </div>
  );
};

export default App;
