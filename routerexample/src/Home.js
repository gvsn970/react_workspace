import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Home = () => {
    const name="Surya";
    let {search}=useLocation();
    const params=new URLSearchParams(search);
    console.log(search)
  return (
    <div>
      <h1>Welcome To Home page</h1>
      <Link to={`/dashboard?name=${name}$age=${27}`}>DashBoard</Link>{" "}
      <Link to={`/about/${name}`}>About </Link>
    </div>
  );
}

export default Home;
