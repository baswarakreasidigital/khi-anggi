import React from "react";
import "./hero.scss";
import desktopImage from "../../asset/web-header.webp";
import Slider from "react-slick";
import heromobile from "../../asset/header/header.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-container">
      <img src={desktopImage} className="heroimage" alt="Hero" />
      <div className="slidermobile">
        <div className="center">
          <Slider {...settings}>
            {heromobile.map((slide, index) => (
              <img
                key={index}
                className="imgcontent"
                src={slide}
                alt="Surrounding"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
