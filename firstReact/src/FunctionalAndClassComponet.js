import React, { useState } from "react";
import PropsForFunctionalComponet from "./PropsForFunctionalComponet";

const FunctionalAndClassComponet = () => {
  const [data, setData] = useState({
    name: "This is Functional Componet value state",
    age: "25",
  });
  const { name, age } = data;
  return <div><center><PropsForFunctionalComponet thisValueProps={name} thisVlaueage={age}/></center></div>;
};

export default FunctionalAndClassComponet;
