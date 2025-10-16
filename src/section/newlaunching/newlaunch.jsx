import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCheckDouble,
  faHouse,
  faMaximize,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./newlaunch.scss";
import navara from "./Anggi.png";
import promoNewMobile from "../../asset/KHI promo deals (1).webp";
import promoNewDesktop from "../../asset/KHI promo deals (2).webp";

const newlaunch = () => {
  const wapromo = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Exclusive+Deals)%20(https://marketing-kotaharapanindah.com/)%20?&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0";
    window.location.href = whatsappLink;
  };
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20produk%20(Navara)%20https://marketing-kotaharapanindah.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  return (
    <div className="newlaunch">
      <div className="container-new-promo" id="promo-exclusive">
        <h2 className="promo-title"> PROMO EXCLUSIVE DEALS</h2>
        <img
          className="promo-new-mobile"
          src={promoNewMobile}
          alt="Promo New Mobile"
        />
        <img
          className="promo-new-desktop"
          src={promoNewDesktop}
          alt="Promo New Desktop"
        />
        <div className="buttonwa">
          <button onClick={wapromo} className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            &nbsp;&nbsp; Whatsapp
          </button>
        </div>
      </div>
      <div id="navara" className=" containerNew3">
        <div className="containercontent">
          <div className="header">
            <h1>
              NEW LAUNCHING NAVARA
              <br /> <span>Cicilan 8 Juta/Bulan</span>
            </h1>
            <div className="gridspek">
              <FontAwesomeIcon icon={faMaximize} />
              <span> : 66m²</span>
              <FontAwesomeIcon icon={faHouse} />
              <span> : 101m²</span>
              <FontAwesomeIcon icon={faBed} />
              <span>: 4</span>
              <FontAwesomeIcon icon={faShower} />
              <span>: 3</span>
            </div>
          </div>
          <div className="pointNew3">
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>
                &nbsp;&nbsp;Rumah 3 Lantai pertama di Harapan Indah{" "}
              </span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>&nbsp;&nbsp;Subsidi DP</span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>
                &nbsp;&nbsp;Subsidi Biaya BPHTB
              </span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>
                &nbsp;&nbsp;Subsidi Biaya Jaminan KPR
              </span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>
                &nbsp;&nbsp;Free Voucher Belanja 10 Juta
              </span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>
                &nbsp;&nbsp;Free Smart door lock
              </span>
            </div>
            <div className="New3poin">
              <FontAwesomeIcon icon={faCheckDouble} />
              <span style={{ color: "black" }}>&nbsp;&nbsp;Free CCTV</span>
            </div>
          </div>
          <div className="disclaimer">*Disclaimer</div>
          <button className="buttonNew3" onClick={handleConsultationClick}>
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </button>
        </div>
        <div className="containergambar">
          <img className="New3gambar" src={navara} />
        </div>
      </div>
    </div>
  );
};

export default newlaunch;
