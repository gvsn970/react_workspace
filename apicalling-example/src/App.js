import React, { useState } from "react";

const App = () => {
  const [data, setdata] = useState({
    name: "",
    age: "",
  });
  const changehandler = (e) => {

    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onsubmitChangehandler=(e)=>{
    console.log(e)
    e.preventDefault();
    fetch('https://test-api-8f383-default-rtdb.firebaseio.com/data.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-type':'application/json charset=UTF-8'
      }
    }).then(response =>alert("Data post")).catch(error=>{alert(error)})
  }
  return (
    <div>
      <center>
        <form onSubmit={onsubmitChangehandler}> 
          <label>name:</label>
          <input type="text" name="name" onChange={changehandler} />
          <br />
          <label>age:</label>
          <input type="text" name="age" onChange={changehandler} />
          <br />
          <input type="submit" value="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;
