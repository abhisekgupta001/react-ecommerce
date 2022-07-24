import React from "react";
import images from "../../constants/images";
import "./GenderCardWrapper.css";

const GenderCard = ({ img, title }) => {
  return (
    <>
      <a href="#">
        <div className="app__genderCard flex-center">
          <img src={img} className="app__genderCard-img" />
          <h2 className="app__genderCard-title">{title}</h2>
        </div>
      </a>
    </>
  );
};

const GenderCardWrapper = () => {
  return (
    <div className="app__container">
      <div className="genderCard-outer-container fixed-container flex-center">
        <GenderCard img={images.womenImg} title={"Women Section"} />
        <GenderCard img={images.newImg} title={"New Arrival"} />
        <GenderCard img={images.menImg} title={"Men Section"} />
      </div>
    </div>
  );
};

export default GenderCardWrapper;
