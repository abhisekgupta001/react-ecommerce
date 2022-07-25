import React from "react";
import { categoriesData } from "../../constants/data";
import "./Categories.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="app__container" style={{ backgroundColor: "#fff" }}>
      <SectionHeading title="Popular Categories" />
      <div className="categories-outer-wrapper fixed-container">
        {categoriesData.map((item) => {
          return (
            <div key={item.id} className="app__category-card">
              <Link to="/products">
                <img src={item.imgUrl} className="app__category-card_img" />
                <p className="app__category-card_text">{item.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
