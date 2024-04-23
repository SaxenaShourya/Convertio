import React from "react";
import { NavBar } from "./components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="h-full w-full px-8 lg:px-20 bg-gradient-to-tr from-green-200 to-white">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
