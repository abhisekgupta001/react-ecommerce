import React from "react";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductPanel from "../ProductPanel/ProductPanel";
import "./ProductWrapper.css";

const ProductWrapper = () => {
  return (
    <div className="app__productPage-outer app__container">
      <div className="app__productPage-container fixed-container">
        <FilterPanel />
        <ProductPanel />
      </div>
    </div>
  );
};

export default ProductWrapper;
