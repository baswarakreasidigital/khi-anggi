import React from "react";
import "./surrounding.scss";
import Slider from "react-slick";
import surroundingimg from "../../asset/surrounding/surrounding";

const surrounding = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="surrounding">
      <div className="container-surrounding">
        <div id="surrounding" className="header">
          SURROUNDING AREA
        </div>
        <div className="carousel-surrounding">
          <Slider {...settings}>
            {surroundingimg.map((item, index) => (
              <img
                className="cluster-image"
                key={index}
                src={item}
                alt={`galery ${index + 1}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default surrounding;
