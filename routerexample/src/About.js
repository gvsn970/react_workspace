import React from 'react';
import {} from 'react-router-dom';
import { useParams } from 'react-router-dom';
const About = () => {
    const params=useParams();
  return (
    <div>
      <h1>Welcome To About page {params.name}</h1>
     
    </div>
  );
}

export default About;
