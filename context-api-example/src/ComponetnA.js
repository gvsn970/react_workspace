import React,{useContext} from 'react';
import {store} from './App'

const ComponetnA = () => {
    const [data,setData]=useContext(store)
  return (
    <div>
       <h1>Componet A {data}</h1>
    </div>
  );
}

export default ComponetnA;
