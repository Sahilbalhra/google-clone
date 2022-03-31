import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100">
        App
      </div>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
