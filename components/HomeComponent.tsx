import React, { Dispatch, SetStateAction } from "react";
import homeStyles from "../styles/Home.module.css";

type ShowPost = {
  showPost: boolean;
  setShowPost: Dispatch<SetStateAction<boolean>>;
};

const HomeComponent: React.FC<ShowPost> = ({ showPost, setShowPost }) => {
  const handleShowPost = () => {
    window.open("https://www.tokopedia.com/afloor", "_blank");
  };

  return (
    <div className={homeStyles.home}>
      <h1>
        welcome to <span>afloor</span>
      </h1>
      <p>
        Aksesoris lantai dan vinyl <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        rerum
      </p>
      <div className={homeStyles.btnContainer}>
        <button className={homeStyles.btn} onClick={handleShowPost}>
          Lihat toko
        </button>
      </div>
      <div className={homeStyles.imgContainer}>
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
      </div>
      {/* "https://i.ibb.co/9Hbh1Rh/various-color-variant.jpg"
"https://i.ibb.co/qRHft43/welcome-to-afloor.jpg" */}
    </div>
  );
};

export default HomeComponent;
