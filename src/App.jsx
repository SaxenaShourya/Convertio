import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        toastClassName="max-[480px]:w-[250px] sm:w-[22rem] rounded-lg text-sm sm:text-base font-outfit max-[480px]:top-0 max-[480px]:left-[calc(50%-125px)]"
      />
      <div className="h-full w-full px-8 lg:px-20 bg-gradient-to-tr from-green-200 to-white">
        <NavBar />
        <HomePage />
      </div>
    </>
  );
};

export default App;
