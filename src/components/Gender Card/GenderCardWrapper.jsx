import React from "react";
import images from "../../constants/images";
import "./GenderCardWrapper.css";
import { Link } from "react-router-dom";

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
        <Link to="/products">
          <GenderCard img={images.womenImg} title={"Women Section"} />
        </Link>
        <Link to="/products">
          <GenderCard img={images.newImg} title={"New Arrival"} />
        </Link>
        <Link to="/products">
          <GenderCard img={images.menImg} title={"Men Section"} />
        </Link>
      </div>
    </div>
  );
};

export default GenderCardWrapper;
