import React from "react";
import "./DealWrapper.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const DealWrapper = () => {
  return (
    <div className="app__container">
      <div className="dealWrapper-outer-container fixed-container ">
        <SectionHeading title="Deal of The Day" />
        <div className="app__dealWrapper flex-center">
          <div className="dealCard">
            <h1 className="dealCard-title">50% OFF*</h1>
            <p className="dealCard-subtitle">Grab the best deal of all times</p>
            <span className="dealCard-coupon">USE CODE: 50OFF</span>
          </div>
          <div className="dealCard">
            <h1 className="dealCard-title">FREE DELIVERY</h1>
            <p className="dealCard-subtitle">On purchase of above Rs. 2000</p>
            <span className="dealCard-coupon">USE CODE: FREEDEL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealWrapper;
