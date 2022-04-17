import React,{useState} from "react";
import firebaseDb from './Firebasr'
const Register = () => {
  const [data,setData]=useState({
    firstName:"",
    lastname:"",
    email:"",
    password:"123"
  });
  const onChangehandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const onSubmithandler=(e)=>{
    e.preventDefault();
    console.log(data);
    // firebaseDb.child("register").push(data,error=>{
    //   if(error){
    //     alert("error ocureed");
    //   }else{
    //     alert("data saved succefully..")
    //   }
    // })
    
  }
  return (
    
    <div className="container-fluid">
      <h1>Medium Grid</h1>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form onSubmit={onSubmithandler}>
            <div className="form-group">
              <label htmlFor="firtstName">FirstName:</label>
              <input type="text" name="firstName" onChange={onChangehandler}className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" onChange={onChangehandler} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" onChange={onChangehandler} className="form-control" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Register;
