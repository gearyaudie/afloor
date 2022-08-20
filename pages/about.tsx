import React from "react";
import Link from "next/link";
import AboutStyles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <div className={AboutStyles.about}>
        <h1>
          about <span>afloor</span>
        </h1>
        {/* <p>with this seemingly useless website.</p>
        <p>well, that is a good question and it is a </p>
        <p>template to be used for future projects.</p> */}
      </div>
      <div className={AboutStyles.CheckUs}>
        <div className={AboutStyles.container}>
          <div className={AboutStyles.imgContainer}>
            <img
              src="https://i.ibb.co/9Hbh1Rh/various-color-variant.jpg"
              alt="afloor"
            />
          </div>
          <div>
            <p>
              Aksesoris lantai Parket PVC / Vinyl dengan beragam variasi warna
            </p>
            <button className={AboutStyles.btn}>
              <Link href="https://www.tokopedia.com/afloor/etalase/aksesoris-parketvinyl">
                Lihat di toko
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={AboutStyles.ThirdSection}>
        <h1>CONTACT US</h1>
        <Link href="/">
          <button className={AboutStyles.contactBtn}>Whatsapp</button>
        </Link>
        {/* <p>
          <span className={AboutStyles.special}>mobile: </span>0143133567
        </p>
        <p>
          {" "}
          <span className={AboutStyles.special}>email: </span>
          <a href="mailto:gearyaudie.ga@gmail.com">gearyaudie.ga@gmail.com</a>
        </p>
        <p>
          {" "}
          <span className={AboutStyles.special}>web: </span>{" "}
          <a href="https://www.gearyaudie.com">gearyaudie.com</a>
        </p> */}
      </div>
    </>
  );
};

export default about;
