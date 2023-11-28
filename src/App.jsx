import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="main-content">
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
