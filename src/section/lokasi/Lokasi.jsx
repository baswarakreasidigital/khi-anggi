import React from "react";
import "./Lokasi.scss";
import map from "./maps.jpeg";

const Lokasi = () => {
  return (
    <div className="lokasi-container" id="lokasi">
      <div className="lokasi-inner">
        <div className="lokasi-map">
          <img className="image-map" src={map} alt="Grand Wisata Bekasi" />
        </div>
        <div className="lokasi-title">Lokasi</div>
        <div className="lokasi-list">
          <li>Near RS Eka Hospital</li>
          <li>Near Univ Esa Unggul</li>
          <li>Near Wisma BCA</li>
          <li>Near Sekolah BPK Penabur & Al Azhar</li>
          <li>10 menit ke Tol JORR</li>
          <li>10 menit ke Aeon Mall & IKEA</li>
          <li>15 menit Kelapa Gading</li>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
