import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6287876666122&text=Halo%20Kota%20Harapan%20Indah%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(https://www.marketing-kotaharapanindah.com/)%20?&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0"
      >
        <FloatingWhatsApp />
      </a>
    </div>
  );
};

export default App;
