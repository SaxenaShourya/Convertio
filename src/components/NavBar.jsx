import React from "react";
import { Button } from "@nextui-org/react";
import "boxicons";

import logo from "/logo.svg";

const NavBar = () => {
  return (
    <nav className="h-[10vh] w-full flex justify-between items-center border-b-1 border-primary">
      <div className="flex items-end gap-1">
        <img
          src={logo}
          alt="Convertio logo"
          className="hidden min-[400px]:block w-[50px]"
        />
        <h2 className="text-2xl lg:text-3xl">Convertio.</h2>
      </div>
      <a
        href="https://www.linkedin.com/in/shouryasaxena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          color="primary"
          startContent={<box-icon name="log-in-circle" color="#fff" />}
          className="hidden min-[330px]:flex hover:underline text-md md:text-lg"
        >
          Contact me
        </Button>
      </a>
    </nav>
  );
};

export default NavBar;
