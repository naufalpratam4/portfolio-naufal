import React from "react";
import ImgAbout from "../assets/img/about.png";
function AboutMe() {
  return (
    <div className="md:pt-8 bg-stone-900 text-white">
      <div className="text-center text-3xl font-bold pt-5">About Me</div>
      <div className="md:px-80 text-center text-sm font-normal pt-8">
        I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
        visually stunning digital experiences. With a passion for user-centric
        design, I transform ideas into functional and beautiful interfaces.
        Let's collaborate and shape the future of design together.
      </div>
      <div className="grid md:grid-cols-3 md:px-32 md:gap-8 pt-4 text-center">
        <div>
          <div className="text-rose-200 text-6xl font-bold pb-2">502</div>
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
      </div>
      <div className="flex justify-center pt-9 ">
        <img src={ImgAbout} alt="" className="" />
      </div>
    </div>
  );
}

export default AboutMe;
