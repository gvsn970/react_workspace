import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import React, { Component } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PageNotFount from "./PageNotFount";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
         
            <Routes>
              <Route exact path="/"  element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFount />} />
            </Routes>
          
        </div>
      </div>
    );
  }
}
