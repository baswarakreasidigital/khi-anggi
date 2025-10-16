import React from "react";
import promoimg from "../../asset/promo.png";
import "./Promo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const promo = () => {
  const wapromo = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(promo)%20(https://marketing-kotaharapanindah.com/)%20?&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0";
    window.location.href = whatsappLink;
  };
  const promoitem = [
    "Free PPN 50%-100%",
    "Free DP",
    "Free BPHTB",
    "Free AJB & PPJB",
    "Free Biaya KPR",
    "Free Internet 12 Bulan",
    "Free Canopy",
    "Free Kitchen Set",
    "Voucher Furniture",
  ];

  return (
    <div className="promocontainer">
      <div id="promo" className="promo">
        <div className="promoimg">
          <img className="sinar" src={promoimg} />
        </div>
        <div className="promoitem">
          <div className="promotitle">
            Promo Terbaru <br />
            Kota Harapan Indah:
          </div>
          <div className="item">
            {promoitem.map((slide, index) => (
              <div className="itempoin">
                <FontAwesomeIcon icon={faCheckDouble} /> {slide}
              </div>
            ))}
          </div>
          <div className="buttonwa">
            <button onClick={wapromo} className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
              &nbsp;&nbsp; Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default promo;
