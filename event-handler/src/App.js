import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [name,setName]=useState("Surya");
  const [data,setData]=useState({
    email:"",
    password:""
  });
const changeHandler=e=>{
  setData({...data,[e.target.name]:e.target.value})
}
const submitHandler=e=>{
  e.preventDefault();
  console.log(data)
  if(data.password.length<5){
    alert("password length should be greterthen ")
  }
}
  return (
    <div>
      <h1>{name}</h1>
      <center>
        <button className="btn btn-primary"
          onClick={() => {
            alert("Clicked");
          }}
        >
          OnClickButton
        </button>
        <br />
        <input type="texrt" name="name"  onChange={(e)=>{setName(e.target.value)}}/>
      </center>
      <center>
        <h1 style={{'color':'blue','fontFamily':'Tahoma'}}>Login Form</h1>
        <form onSubmit={submitHandler}>
          <label >email:</label>
          <input type="text" name="email"  onChange={changeHandler} /><br/>
          <label>Password:</label>
          <input type="password" name="password" onChange={changeHandler} /><br/>
          <input type="submit" value="submit"/>
        </form>
      </center>
    </div>
  );
}

export default App;
