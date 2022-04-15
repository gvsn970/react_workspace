import React,{useState} from 'react';

const FunctionalAndClassComponet = () => {
    const [data,setData]=useState({
        name:"This is Functional Componet value state",
        age:"25"
    });
    const {name,age}=data;
  return (
    <div>
      {name}
    </div>
  );
}

export default FunctionalAndClassComponet;
