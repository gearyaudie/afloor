import React, { Dispatch, SetStateAction } from "react";
import homeStyles from "../styles/Home.module.scss";

type ShowPost = {
  showPost: boolean;
  setShowPost: Dispatch<SetStateAction<boolean>>;
};

const HomeComponent: React.FC<ShowPost> = ({ showPost, setShowPost }) => {
  const handleShowPost = () => {
    window.open("https://www.tokopedia.com/afloor", "_blank");
  };

  return (
    <div className={homeStyles.bg}>
      {/* <img src="https://i.ibb.co/nshmNyb/bg.jpg" alt="" /> */}
      <div className={homeStyles.home}>
        <div className={homeStyles.flex}>
          <div className={homeStyles.homeWelcome}>
            <h1>
              welcome to <span>afloor</span>
            </h1>
            <p>
              Menjual berbagai jenis aksesoris lantai, pvc dan vinyl. Klik
              tombol dibawah dan kunjungi toko online kami sekarang.
            </p>
            <div className={homeStyles.btnContainer}>
              <button className={homeStyles.btn} onClick={handleShowPost}>
                Lihat toko
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/rQg80m2/pexels-maksim-goncharenok-4352247.webp"
              alt=""
              className={homeStyles.mainImg}
            />
          </div>
        </div>
      </div>
      <div className={homeStyles.storesSection}>
        <div>{/* <p>Layanan toko kita tersedia juga di : </p> */}</div>
        <div className={homeStyles.imgContainer}>
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/871069d8.png"
            alt=""
            className={homeStyles.logoImg}
          />
          <img
            src="https://i.ibb.co/SQ9MKXG/PXPNG-COM-SHOPEE-WHITE-LOGO-TRANSPARENT-1550x767.png"
            alt=""
            className={homeStyles.logoImg}
          />
          <img
            src="https://i.ibb.co/fGsXwjg/lazada-white-noloho.png"
            alt=""
            className={homeStyles.logoImg}
          />
        </div>
      </div>
      <div className={homeStyles.subProductSection}>
        <h1>Etalase produk</h1>
        <p>Cari produk yang anda butuhkan berdasarkan etalase</p>
        <div className={homeStyles.cardContainer}>
          <div className={homeStyles.card}>
            <div className={homeStyles.flexCenter}>
              <p>Aksesoris parket / vinyl</p>
              <button>Lihat</button>
            </div>
          </div>
          <div className={[homeStyles.card, homeStyles.card2].join(" ")}>
            <div className={homeStyles.flexCenter}>
              <p>Lantai vinyl / parket</p>
              <button>Lihat</button>
            </div>
          </div>
          <div className={[homeStyles.card, homeStyles.card3].join(" ")}>
            <div className={homeStyles.flexCenter}>
              <p>Lem vinyl/PVC flooring</p>
              <button>Lihat</button>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.productImgSection}>
        <div className={homeStyles.flex}>
          <div>
            <img
              src="https://i.ibb.co/tLv4T7x/sample.jpg"
              className={homeStyles.productImg}
            />
          </div>
          <div className={homeStyles.flexColumn}>
            <img
              src="https://i.ibb.co/hy0w3Ww/welcome-750.jpg"
              className={homeStyles.productImgSub}
            />
            <img
              src="https://i.ibb.co/9Hbh1Rh/various-color-variant.jpg"
              className={homeStyles.productImgSub}
            />
          </div>
        </div>
        <div className={homeStyles.contentContainer}>
          <h1>
            Beragam <span className={homeStyles.textPrimary}>warna</span>
          </h1>
          <p>
            Beragam warna untuk seleksi produk lantai vinyl, parquet / PVC dan
            aksesoris
          </p>
        </div>
        <div></div>
      </div>

      <div className={homeStyles.footer}>
        <div className={homeStyles.footerContent}>
          <h1>
            a<span className={homeStyles.textPrimary}>floor</span>
          </h1>
          <p>
            Call: +60143133567 | WhatsApp: +60143133567 | email:
            rachmansaleh@yahoo.com
          </p>
        </div>
      </div>

      {/* <div className={homeStyles.imgContainer}>
        <a href="https://www.tokopedia.com/afloor/etalase/aksesoris-parketvinyl">
          <img
            src="https://i.ibb.co/ZJGDwr7/aksesoris-lantai.jpg"
            alt="test"
            className={homeStyles.img}
          />
        </a>
        <a href="https://www.tokopedia.com/afloor/etalase/lem">
          <img
            src="https://i.ibb.co/7p8Spsb/lem.webp"
            alt=""
            className={homeStyles.img}
          />
        </a>
      </div>
      <div className={homeStyles.imgContainer}>
        <a href="https://www.tokopedia.com/afloor/etalase/amplop-bubble">
          <img
            src="https://i.ibb.co/ZMMvRDY/surat.webp"
            alt=""
            className={homeStyles.img}
          />
        </a>
      </div> */}
      {/* "https://i.ibb.co/9Hbh1Rh/various-color-variant.jpg"
"https://i.ibb.co/qRHft43/welcome-to-afloor.jpg" */}
    </div>
  );
};

export default HomeComponent;
