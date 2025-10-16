import React from "react";
import "./footer.scss";
import logo from "../../asset/kotaharapanindah.webp";

const footer = () => {
  return (
    <div className="container-footer">
      <div className="container-atas">
        <div className="container-logo">
          <img className="gambar-logo" src={logo} alt="logo-pik" />
        </div>
        <div className="container-deskripsi">
          <div className="alamat">
            <h2>Marketing Gallery</h2>
            <h1>KOTA HARAPAN INDAH</h1>
            <p>
              Medan Satria, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17131
            </p>
          </div>
          <div className="contact">Contact Us : +6287876666122</div>
          <div className="privasi"></div>
        </div>
      </div>
      <div className="container-bawah">KOTA HARAPAN INDAH</div>
    </div>
  );
};

export default footer;
