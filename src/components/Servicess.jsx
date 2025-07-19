import React from "react";
import CardProject from "./card/CardProject";
import portfolioImg from "../assets/img/islamicexplore.png";
import portfolioLindungiHutan from "../assets/img/darmaputrakos.png";
import recything from "../assets/img/recything.png";

function Servicess() {
  return (
    <div id="project">
      <div className="px-20 pb-4">
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
          {/* Pastikan semua card memiliki tinggi penuh */}
          <div className="h-full">
            <CardProject
              image={portfolioImg}
              title="Islamic Explore"
              desc="Merupakan platform online yang menyediakan pembelajaran dan pelatihan agama, dapat mengakses berbagai kursus dan modul pembelajaran"
              link="https://github.com/naufalpratam4/IslamicExplore"
            />
          </div>
          <div className="h-full">
            <CardProject
              image={recything}
              title="Recything"
              desc="Recything merupakan website untuk lebih peduli dengan sampah yang ada di lingkungan masyarakat dengan menyediakan informasi terkait pengepul sampah dan terdapat gamifikasi berupa coin reward"
              link="https://github.com/RecyThing/RecyThing-Web"
            />
          </div>
          <div className="h-full">
            <CardProject
              image={portfolioLindungiHutan}
              title="Darma Putra Kos"
              desc="Website yang memberikan informasi terkait Darma Putra Kos yang merupakan kos putra, didalamnya terdapat fitur untuk menambahkan kamar, penghuni, dan pengingat tagihan kos"
              link="https://github.com/naufalpratam4/darma-putra-kos"
            />
          </div>
        </div>
      </div>

      {/* SVG footer */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFD4D0"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Servicess;
