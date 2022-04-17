import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class PageNotFount extends Component {
  render() {
    return (
      <div>
        <h1>Page not Fount</h1>
        <h3><Link to='/'>Gudda musikoni Home ki Velli{" "}</Link></h3>
      </div>
    );
  }
}
