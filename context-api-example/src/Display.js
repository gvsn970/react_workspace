import React,{useContext,useState} from 'react';
import { store } from './App';
const Display = () => {
    const[data,setData]=useContext(store);
    const [name,setName]=useState("");
    const onsubmitchange=(e)=>{
        e.preventDefault();
        setData([...data,{name:name}]);
    }
  return (
    <div>
      {data.map((item)=><h1>{item.brandName}</h1>)}
      <form onSubmit={onsubmitchange}>
      <input type="text" name="name"onChange={(e)=>setName(e.target.value)}  /><input type="submit" value="add"/>
      </form>
     
    </div>
    
  );
}

export default Display;
