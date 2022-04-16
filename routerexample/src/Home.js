import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Welcome To Home page</h1>
      <Link to='/dashboard'>DashBoard</Link>
    </div>
  );
}

export default Home;
