import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        toastClassName="font-outfit"
      />
      <div className="h-full w-full px-8 lg:px-20 bg-gradient-to-tr from-green-200 to-white">
        <NavBar />
        <HomePage />
      </div>
    </>
  );
};

export default App;
