import React from "react";
import NavBar from "./NavBar";
import naufal from "../assets/img/naufal.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
function Hero() {
  const backgroundStyle = {
    background: "#FFD4D0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="bg-cover bg-center" style={backgroundStyle}>
      <NavBar />
      <div className="grid md:grid-cols-2 gap-4 ps-9  ">
        <div
          className="flex items-end  md:align-baseline md:order-2 order-1"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src={naufal} alt="" className="w-full" />
        </div>

        <div className=" md:py-32 md:ps-32 md:order-1 order-2 ">
          <div
            className="text-xl md:text-2xl font-semibold"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Web Developer{" "}
          </div>
          <div
            className="text-3xl md:text-5xl font-bold pt-1 md:pt-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Hi There, I’m
          </div>
          <div
            className="text-3xl md:text-5xl font-bold text-red-500 md:pt-2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Naufal Pratama
          </div>
          <div
            className=" pt-3 md:text-xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </div>

          <div
            className="flex pt-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div>
              <a href="https://www.instagram.com/naufalpratam4/">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="ps-1">
              <a href="https://www.linkedin.com/in/naufaldarma/">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="pt-4 flex pb-4">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <button className="py-2 px-6 rounded-xl bg-stone-900 text-white hover:bg-stone-700">
                Contact Me
              </button>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              <button className="py-2 px-6 rounded-xl bg-white text-stone-900 hover:bg-gray-200 ms-2">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
