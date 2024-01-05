import { Button } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <div className="flex justify-center ">
      <div className="text-sm ">
        <ul className="flex pt-6 justify-center  p-4">
          <a href="" className="font-bold">
            <li>Home</li>
          </a>
          <a href="">
            <li className="px-9">Portfolio</li>
          </a>
          <a href="">
            <li className="pe-9 ">About</li>
          </a>
          <a href="">
            <li className="pe-9">Project</li>
          </a>
          <a href="">
            <li>Contact Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
