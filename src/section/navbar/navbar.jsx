import React from "react";
import "./navbar.scss";
import logo from "../../asset/kotaharapanindah.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const navbar = () => {
  const wanavbar = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(https://marketing-kotaharapanindah.com/)%20?&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0";
    window.location.href = whatsappLink;
  };
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo-navbar">
          <img src={logo} alt="logo-cgs" />
        </div>
        <div className="buttonwa">
          <button onClick={wanavbar} className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            &nbsp;&nbsp; Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
