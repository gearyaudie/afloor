import React, { Dispatch, SetStateAction } from "react";
import homeStyles from "../styles/Home.module.css";

type ShowPost = {
  showPost: boolean;
  setShowPost: Dispatch<SetStateAction<boolean>>;
};

const HomeComponent: React.FC<ShowPost> = ({ showPost, setShowPost }) => {
  const handleShowPost = () => {
    setShowPost(!showPost);
  };

  return (
    <div className={homeStyles.home}>
      <h1>STATIC NEXT</h1>
      <p>
        Some thoughts statically displayed through Next JS <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        rerum
      </p>
      <div className={homeStyles.btnContainer}>
        <button className={homeStyles.btn} onClick={handleShowPost}>
          LET'S GO
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
