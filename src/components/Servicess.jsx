import React from "react";
import CardProject from "./card/CardProject";
import portfolioImg from "../assets/img/portfolio.png";
import portfolioLindungiHutan from "../assets/img/lindungiHutan.png";
import portfolioCLIC from "../assets/img/CLIC.png";
function Servicess() {
  return (
    <div className="">
      <div className=" px-20 pb-4 ">
        <div
          className="font-bold text-3xl pt-16 text-center pb-4"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          Project
        </div>
        <div
          className="grid md:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <CardProject
              image={portfolioImg}
              title="Portfolio"
              desc="Website portfolio"
            />
          </div>
          <div>
            <CardProject
              image={portfolioCLIC}
              title="Web UKM CLIC"
              desc="Website Unit Kegiatan Mahasiswa CLIC"
            />
          </div>
          <div>
            <CardProject
              image={portfolioLindungiHutan}
              title="Lindungi Hutan"
              desc="Clone UI Website Lindungi Hutan "
            />
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFD4D0"
            fill-opacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Servicess;
