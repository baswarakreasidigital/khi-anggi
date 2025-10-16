import React from "react";
import "./Product.scss";
import Card from "../../component/card/Card";
import teradamai from "../../asset/Tera Damai/index.js";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import data from "./cardproduct.json";
import viola from "../../asset/Viola/index.js";
import elora from "../../asset/Elora/index.js";
import nismara from "../../asset/Nismara/index.js";
import lavesh from "../../asset/Lavesh/index.js";
import nishi from "../../asset/Nishi/index.js";
import ruko from "../../asset/ruko asera/rukoasera.js";
import hoshi from "../../asset/hoshi/hoshi.js";
import aseraosImages from "../../asset/asera one south/asera.js";
import danishaImages from "../../asset/danisha/danisha.js";
import segaraImages from "../../asset/segaracity/segaracity.js";

const imageMap = {
  teradamai,
  elora,
  nismara,
  nishi,
  lavesh,
  viola,
  hoshi,
  ruko,
  aseraosImages,
  danishaImages,
  segaraImages,
};

const Product = () => {
  return (
    <div className="productcontainer">
      <div className="c">
        <div id="rumah" className="producttitle">
          OUR HOME
        </div>
        <div className="productcard">
          {data.cards.map((card, index) => {
            // Determine the logo dynamically

            return (
              <Card
                key={index}
                carousel={imageMap[card.imagesKey]}
                cardtitle={card.cardtitle} // Dynamically import logo images
                title={card.title}
                harga={card.harga}
                price={card.price}
                subprice={card.subprice}
                details={card.details}
                whatsappLink={card.whatsappLink}
                iconcard={faBed} // Pass the WhatsApp link
              />
            );
          })}
        </div>
        <div className="productcard1">
          {data.cards1.map((card, index) => {
            // Determine the logo dynamically

            return (
              <Card
                key={index}
                carousel={imageMap[card.imagesKey]}
                cardtitle={card.cardtitle} // Dynamically import logo images
                title={card.title}
                harga={card.harga}
                price={card.price}
                subprice={card.subprice}
                details={card.details}
                whatsappLink={card.whatsappLink}
                iconcard={faBed} // Pass the WhatsApp link
              />
            );
          })}
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Product;
