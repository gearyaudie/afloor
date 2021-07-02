import React from "react";
import AboutStyles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <div className={AboutStyles.about}>
        <h1>WHAT'S UP</h1>
        <p>with this seemingly useless website.</p>
        <p>well, that is a good question and it is a </p>
        <p>template to be used for future projects.</p>
      </div>
      <div className={AboutStyles.CheckUs}>
        <div className={AboutStyles.container}>
          <>
            <img src="/images/posts/img5.jpg" alt="" />
          </>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              accusantium at accusamus, odio ducimus facilis vero expedita
              necessitatibus porro natus. Iusto, veniam.
            </p>
            <button className={AboutStyles.btn}>
              <a href="/">Learn More</a>
            </button>
          </div>
        </div>
      </div>
      <div className={AboutStyles.ThirdSection}>
        <h1>CONTACT US</h1>
        <p>
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
          <a href="gearyaudie.com">gearyaudie.com</a>
        </p>
      </div>
    </>
  );
};

export default about;
