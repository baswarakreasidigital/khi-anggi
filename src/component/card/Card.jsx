import React from "react";
import "./Card.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHouse,
  faMaximize,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Card = ({
  carousel,
  cardtitle,
  title,
  price,
  details,
  whatsappLink,
  sitelink,
}) => {
  const settings = {
    dots: carousel.length > 1,
    arrows: carousel.length > 1,
    infinite: carousel.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div className="card">
      <Slider {...settings}>
        {carousel.map((image, index) => (
          <img
            className="imgcarousel"
            key={index}
            src={image}
            alt={`Launching ${index + 1}`}
          />
        ))}
      </Slider>
      <div className="card-content">
        <div id={sitelink} className="cardtitle" alt="judul">
          {cardtitle}
        </div>
        <div className="title">{title}</div>
        <div className="card-price">{price}</div>
        <hr className="divider" />
        <div className="card-icon">
          <FontAwesomeIcon color="#086d44" icon={faMaximize} />
          <span>&nbsp; : {details.area} &nbsp;</span>
          <FontAwesomeIcon color="#086d44" icon={faHouse} />
          <span>&nbsp; : {details.buildingSize} &nbsp;</span>
          <FontAwesomeIcon color="#086d44" icon={faBed} />
          <span>&nbsp; : {details.bedrooms} &nbsp;</span>
          <FontAwesomeIcon color="#086d44" icon={faShower} />
          <span>&nbsp; : {details.bathrooms} &nbsp;</span>
        </div>
        <div className="card-button">
          <button
            className="button"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            &nbsp;Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
