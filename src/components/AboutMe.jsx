import React from "react";
import ImgAbout from "../assets/img/about.png";

import "aos/dist/aos.css";
function AboutMe() {
  return (
    <div className="md:pt-20 bg-stone-900 text-white" id="about">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="mb-9"
      >
        <div className="text-center text-3xl font-bold pt-5 ">About Me</div>
        <div className="md:px-72 text-center text-md font-normal pt-8 mb-8">
          {aboutMe}
        </div>
      </div>
      <div className="flex justify-center pt-16 ">
        <img src={ImgAbout} alt="" className="" />
      </div>
    </div>
  );
}

const aboutMe =
  "Computer Science graduate with a strong interest in web development and backend systems. Experienced as a Backend Developer Intern, involved in the planning and development of several Laravel and MySQL-based projects. Accustomed to working in a team, understanding software development workflows, and able to adapt quickly to a technology-based work environment. Interested in continuous learning and contributing to creating efficient and impactful digital solutions.";
export default AboutMe;
