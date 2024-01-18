import { Button } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <div className="flex justify-center ">
      <div className="text-sm ">
        <ul className="flex pt-6 justify-center font-semibold  p-4">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li className="px-9">About Me</li>
          </a>
          <a href="#project">
            <li className="pe-9 ">Project</li>
          </a>
          <a href="#Certificate">
            <li className="pe-9">Certificate</li>
          </a>
          <a href="#contact">
            <li>Contact Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
