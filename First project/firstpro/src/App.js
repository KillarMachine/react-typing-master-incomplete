import "./App.css";
import NavBar from "./components/Navbar";
import Content from "./components/Content.js";
import Statistics from "./components/Statistics.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const change = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    console.log("change");
  };
  return (
    <>
      <Router>
        <NavBar
          imgSrc="images/logo.png"
          btn1="Home"
          btn2="statistics"
          btn3="offers"
          btn4="contact Us"
          title="Typing Master"
          darkMode={darkMode}
          change={change}
        />
        <Routes>
          <Route path="/" element={<Content darkMode={darkMode} />}></Route>
          <Route path="home" element={<Content darkMode={darkMode} />}></Route>
          <Route
            path="/statistics"
            element={<Statistics darkMode={darkMode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
