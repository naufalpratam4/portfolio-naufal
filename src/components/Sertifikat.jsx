import React from "react";
import CardProject from "./card/CardProject";
import sertifAlterra from "../assets/img/SertifikatAlterra.png";
import sertifKrenova from "../assets/img/SertifikatKrenova.jpeg";
import sertifDimasTI from "../assets/img/SertifikatDimasTi.png";
import CardPortfolio from "./card/CardPortfolio";

function Sertifikat() {
  return (
    <div
      style={{ background: "#FFD4D0" }}
      className="px-20 pb-16"
      id="Certificate"
    >
      <div
        className="text-center text-3xl font-bold"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Certificate
      </div>
      <div
        className="grid md:grid-cols-3 gap-4 pt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <CardPortfolio
          image={sertifAlterra}
          title="Alterra Academy"
          desc="2023 Complete Front-End Engineer Career with ReactJS"
          modalImg={sertifAlterra}
        />
        <CardPortfolio
          image={sertifKrenova}
          title="Krenova"
          desc="JUARA 2 Kreativitas dan Inovasi Masyarakat (Krenova) Kota Semarang"
          modalImg={sertifKrenova}
        />
        <CardPortfolio
          image={sertifDimasTI}
          title="Dimas TI"
          desc="JUARA 1 CABANG LOMBA PEMROGRAMAN KELAS B"
          modalImg={sertifDimasTI}
        />
      </div>
    </div>
  );
}

export default Sertifikat;
