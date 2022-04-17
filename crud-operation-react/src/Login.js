import React from "react";
import { useState } from "react";
const Login = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });
  // const[email,password]=logindata;
  const onChangeLigin = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(logindata);
    fetch("https://test-api-8f383-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: {
        "Content-type": "application/json charset=UTF-8",
      },
    })
      .then((response) => {
        alert("Data Post")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid">
      <h1>Medium Grid</h1>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form onSubmit={onSubmitLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                onChange={onChangeLigin}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                name="password"
                onChange={onChangeLigin}
                className="form-control"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
