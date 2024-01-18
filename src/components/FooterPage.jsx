import React from "react";

import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa6";
function FooterComponent() {
  return (
    <>
      {/* component */}
      <div
        className="w-full pt-20 flex items-center justify-center bg-black"
        id="contact"
      >
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">
              How can i help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-gray-400">
              Do not hesitate to contact me if you have any questions, comments,
              or need further assistance. We are ready to help you with
              pleasure!
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 ease-in-out duration-100 px-10 py-3 flex items-center justify-center text-center rounded-lg"
              >
                <a href="">Contact</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <div>
                <span className="font-bold">NAUFAL PRATAMA</span>
              </div>

              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Project
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Certificate
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <a href="https://www.instagram.com/naufalpratam4/">
                  <FaInstagram />
                </a>

                <a href="https://www.linkedin.com/in/naufaldarma/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-gray-600">
              Copyright © 2024 Naufal Pratama
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
