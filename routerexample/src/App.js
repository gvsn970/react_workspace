import React, { useEffect ,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";

const App = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about/:name" element={<About />} />
        </Routes>
      </BrowserRouter>
      {data.map((item)=><p>{item.title}</p>)}
    </div>
  );
};

export default App;
