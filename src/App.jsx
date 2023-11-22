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
    <div id="app">
      <Navigation />
      {/* <Hero />
      <About /> */}
      <Experience />
    </div>
  );
}

export default App;
