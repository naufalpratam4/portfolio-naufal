import React from "react";
import ImgAbout from "../assets/img/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutMe() {
  return (
    <div className="md:pt-20 bg-stone-900 text-white  ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="mb-9"
      >
        <div className="text-center text-3xl font-bold pt-5 ">About Me</div>
        <div className="md:px-80 text-center text-md font-normal pt-8 mb-8">
          {aboutMe}
        </div>
        {/* <div className="grid md:grid-cols-3 md:px-32 md:gap-8 pt-4 text-center">
          <div>
            <div className="text-rose-200 text-6xl font-bold pb-2">10+</div>
            <div>Projects Done</div>
          </div>
          <div>
            <div className="text-rose-200 text-6xl font-bold pb-2">10+</div>
            <div>Years of Experience</div>
          </div>
          <div>
            <div className="text-rose-200 text-6xl font-bold pb-2">273+</div>
            <div>Clients Served.</div>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center pt-16 ">
        <img src={ImgAbout} alt="" className="" />
      </div>
    </div>
  );
}

const aboutMe =
  "Hello! I am a web developer who is an expert in React JS and also a photography freelancer. My combined passion for web development and photography creates a unique experience that I bring to every project. I believe that technical acumen and visual creativity are a powerful combination. Thank you for visiting my page, and let's collaborate to create something amazing!";
export default AboutMe;
