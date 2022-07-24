import React from "react";
import images from "../../constants/images";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="app__container banner-outer-container">
      <div className="app__banner-container fixed-container flex-center">
        <div className="app__banner-left flex-center">
          <p className="app__banner-subHeading">
            Experience shopping the right way
          </p>
          <h1 className="app__banner-heading">Winter Sale</h1>
          <h2 className="app__banner-heading_2">50% OFF</h2>
          <button className="app__banner-cta">SHOP NOW</button>
        </div>
        <div className="app__banner-right flex-center">
          <img
            src={images.heroImg}
            alt="banner img"
            className="app__banner-heroImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
