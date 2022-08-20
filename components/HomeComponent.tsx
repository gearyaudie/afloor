import React, { Dispatch, SetStateAction } from "react";
import homeStyles from "../styles/Home.module.scss";

const HomeComponent: React.FC = () => {
  const handleShowPost = () => {
    window.open("https://www.tokopedia.com/afloor", "_blank");
  };

  const [product, setProduct] = React.useState([
    {
      img: "https://i.ibb.co/cNMJnFQ/vinyl.jpg",
      name: "Lantai vinyl / PVC motif kayu",
      link: "https://www.tokopedia.com/afloor/lantai-vinyl-pvc-motif-kayu",
    },
    {
      img: "https://i.ibb.co/JzvgNwh/afloor-accessories-2.jpg",
      name: "Stepnosing untuk tangga lantai kayu, vinyl",
      link: "https://www.tokopedia.com/afloor/sn-20-stepnosing-accesories-untuk-tangga-lantai-kayu-dan-vinyl-l-8",
    },
    {
      img: "https://i.ibb.co/KzR7WJL/afloor-plin2.jpg",
      name: "Skirting / plin untuk tangga lantai kayu, vinyl",
      link: "https://www.tokopedia.com/afloor/skirting-plin-d076-accessories-untuk-lantai-kayu-parket-vinyl",
    },
    {
      img: "https://i.ibb.co/RpHXNyM/afloor-endmolding2.jpg",
      name: "End molding untuk lantai kayu, parket, vinyl",
      link: "https://www.tokopedia.com/afloor/end-molding-l-8-accessories-untuk-lantai-kayu-parket-dan-vinyl",
    },
    {
      img: "https://i.ibb.co/PwbvS9B/afloor-glue.jpg",
      name: "Lem / Perkat lantai vinyl dan karpet (1 kg)",
      link: "https://www.tokopedia.com/afloor/lem-perkat-untuk-lantai-vinyl-dan-karpet-isi-1-kg",
    },
  ]);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className={homeStyles.bg}>
      <div className={homeStyles.home}>
        <div className={homeStyles.flex}>
          <div className={homeStyles.homeWelcome}>
            <h1>
              welcome to a<span className={homeStyles.textPrimary}>floor</span>
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
              alt="afloor-homepage-img"
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
            alt="afloor-tokopedia-logo"
            className={homeStyles.logoImg}
            onClick={() => openLink("https://www.tokopedia.com/afloor")}
          />
          <img
            src="https://i.ibb.co/SQ9MKXG/PXPNG-COM-SHOPEE-WHITE-LOGO-TRANSPARENT-1550x767.png"
            alt="afloor-shopee-logo"
            className={homeStyles.logoImg}
            onClick={() => openLink("https://shopee.co.id/afloor88")}
          />
          <img
            src="https://i.ibb.co/fGsXwjg/lazada-white-noloho.png"
            alt="afloor-lazada-logo"
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
              <img
                src="https://i.ibb.co/s5RG01W/wood-1.png"
                alt="afloor aksesoris lantai dan vinyl"
                className={homeStyles.icon}
              />
              <button
                onClick={() =>
                  openLink(
                    "https://www.tokopedia.com/afloor/etalase/aksesoris-parketvinyl"
                  )
                }
              >
                Lihat
              </button>
            </div>
          </div>
          <div className={[homeStyles.card, homeStyles.card2].join(" ")}>
            <div className={homeStyles.flexCenter}>
              <p>Amplop bubble</p>
              <img
                src="https://i.ibb.co/sQp6mrL/email.png"
                alt="afloor amplop bubble"
                className={homeStyles.icon}
              />
              <button
                onClick={() =>
                  openLink(
                    "https://www.tokopedia.com/afloor/etalase/amplop-bubble"
                  )
                }
              >
                Lihat
              </button>
            </div>
          </div>
          <div className={[homeStyles.card, homeStyles.card3].join(" ")}>
            <div className={homeStyles.flexCenter}>
              <p>Lem vinyl/PVC flooring</p>
              <img
                src="https://i.ibb.co/Kxppwx0/bucket.png"
                alt="afloor lem untuk vinyl dan lem pvc flooring"
                className={homeStyles.icon}
              />
              <button
                onClick={() =>
                  openLink("https://www.tokopedia.com/afloor/etalase/lem")
                }
              >
                Lihat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.productSection}>
        <div className={homeStyles.container}>
          <h1>Produk kami</h1>
          <div className={homeStyles.cardContainer}>
            {product &&
              product.map((x, i) => (
                <div className={homeStyles.card} key={i}>
                  <img
                    src={x.img}
                    alt="afloor produk"
                    className={homeStyles.productImg}
                  />
                  <p>{x.name}</p>
                  <button onClick={() => openLink(x.link)}>Kunjungi</button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={homeStyles.productImgSection}>
        <div className={homeStyles.flex}>
          <div>
            <img
              src="https://i.ibb.co/tLv4T7x/sample.jpg"
              alt="afloor banner"
              className={homeStyles.productImg}
            />
          </div>
          <div className={homeStyles.flexColumn}>
            <img
              src="https://i.ibb.co/hy0w3Ww/welcome-750.jpg"
              alt="afloor banner"
              className={homeStyles.productImgSub}
            />
            <img
              src="https://i.ibb.co/9Hbh1Rh/various-color-variant.jpg"
              alt="afloor banner"
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
      <div className={homeStyles.reviewContainer}>
        <div className={homeStyles.reviewBg}></div>
        <div className={homeStyles.overlay}>
          <div className={homeStyles.reviewContent}>
            <h1>Leave a review for us</h1>
            <div>
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  src="https://i.ibb.co/j3BSYPQ/pngfind-com-white-stars-png-297637.png"
                  alt="afloor review stars"
                  className={homeStyles.reviewIcon}
                  key={i}
                />
              ))}
            </div>

            <button
              onClick={() =>
                openLink("https://g.page/r/CUlQnkKr61YoEAg/review")
              }
            >
              Write a review
            </button>
          </div>
        </div>
      </div>

      <div className={homeStyles.footer}>
        <div className={homeStyles.footerContent}>
          <h1>
            a<span className={homeStyles.textPrimary}>floor</span>
          </h1>
          <p>
            Call: 0856-1153-725 | WhatsApp: +62 856-1153-725 | email:
            rachman_saleh@yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
