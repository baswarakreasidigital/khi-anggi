import React from "react";
import "./home.scss";
import Navbar from "../../section/navbar/navbar";
import Hero from "../../section/hero/hero";
import About from "../../section/about/about.jsx";
import Promo from "../../section/promo/Promo.jsx";
import Product from "../../section/produk/Product.jsx";
import SecondHero from "../../section/secondhero/SecondHero.jsx";
import Surrounding from "../../section/surrounding/surrounding.jsx";
import Lokasi from "../../section/lokasi/Lokasi.jsx";
import Footer from "../../section/footer/footer.jsx";
import ScrollToHashElement from "./ScrollToHashElement.js";
import Newlaunch from "../../section/newlaunching/newlaunch.jsx";

const home = () => {
  return (
    <div className="home">
      <ScrollToHashElement />
      <Navbar />
      <Hero />
      <About />
      <Newlaunch />
      <Promo />
      <Product />
      <SecondHero />
      <Surrounding />
      <Lokasi />
      <Footer />
    </div>
  );
};

export default home;
