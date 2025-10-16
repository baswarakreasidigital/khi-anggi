import React from "react";
import "./Secondhero.scss";
import contentlogo from "../../asset/kotaharapanindah.webp";
import kiriatas from "../../asset/second/S__3964973_0.webp";
import kiribawah from "../../asset/second/S__3965046_0.webp";
import kananatas from "../../asset/second/1-2.webp";
import kananbawah from "../../asset/second/S__3981386_0.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SecondHero = () => {
  const wahero = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(promo)%20(https://marketing-kotaharapanindah.com/)%20?&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0";
    window.location.href = whatsappLink;
  };
  const promoitem = [
    "Cluster Asia Tropis",
    "Cluster Samata",
    "Cluster Adara",
    "Cluster Asera (East, West, South)",
    "Cluster Arana",
    "Cluster Greenara",
    "Cluster Kana",
  ];
  return (
    <div className="secondherocontainer">
      <div className="secondmiddle">
        <div id="around" className="leftcontent">
          <div className="contentjudul">
            Dapatkan Penawaran Terbaru Rumah Siap Huni
          </div>
          <img src={contentlogo} className="leftlogo" />

          <div className="item">
            {promoitem.map((slide, index) => (
              <div className="itempoin">
                <FontAwesomeIcon icon={faCheckDouble} /> {slide}
              </div>
            ))}
          </div>
          <div className="buttonwa">
            <button onClick={wahero} className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
              &nbsp;&nbsp; Whatsapp
            </button>
          </div>
        </div>

        <div className="rightcontent">
          <div className="leftpicture">
            <div className="kiriatas">
              <img src={kiriatas} className="satu" />
            </div>
            <div className="kiribawah">
              <img src={kiribawah} className="dua" />
            </div>
          </div>
          <div className="rightpicture">
            <div className="kananatas">
              <img src={kananatas} className="tiga" />
            </div>
            <div className="kananbawah">
              <img src={kananbawah} className="empat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
