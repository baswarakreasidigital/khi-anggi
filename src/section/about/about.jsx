import React from "react";
import "./about.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";

const about = () => {
  const text =
    "Kota Harapan Indah adalah sebuah kawasan permukiman yang terletak di antara Cakung, Jakarta Timur. Kota Harapan Indah merupakan kota mandiri yang direncanakan dengan luas lahan sekitar 2.200 hektar Di kawasan ini terdapat supermarket, sekolah, klub olahraga, beberapa gedung perkantoran, dan rencana untuk mengembangkan pusat perbelanjaan baru Kota Harapan Indah memiliki berbagai macam tipe rumah, berikut beberapa tipe yang ada di Kota Harapan Indah : - Tera Damai Memiliki tipe 6 x 10 dengan Luas Tanah 60 dan Bangunan 33 dengan harga 500 juta - Ashera Nishi Memiliki tipe 5 x 12 dengan Luas Tanah 60 dan Bangunan 55 dengan harga 1.4 Miliar - Lavesh Memiliki Luas Tanah 75m dan Bangunan 55m dengan harga 1.5 Miliar - Nismara Memiliki tipe 6 x 11 dengan Luas Tanah 66 dan Bangunan 65 dengan harga 1.4 Miliar - Elora Memiliki tipe 7 x 10 dengan Luas Tanah 70 dan Bangunan 65 dengan harga 800 Miliar Terdapat juga beberapa fasilitas seperti Ace Hardware, Santika Premier Hotel, Carrefour, Lotte Mart, Courts Megastore, Esa Unggul University, BPK Penabur School, Sekolah Al Azhar, Transera Waterpark, Gramedia Book Store, RS Ananda Harapan Indah, RS Citra Harapan, Transera water-park, Harapan Indah sports club, apartment, dan Mall Harapan Indah";
  return (
    <div id="about" className="about">
      <div className="container-about">
        <div className="header">KOTA HARAPAN INDAH</div>
        <div className="aboutsubtitle">
          <ReactReadMoreReadLess
            charLimit={450}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {text}
          </ReactReadMoreReadLess>
        </div>
      </div>
    </div>
  );
};

export default about;
