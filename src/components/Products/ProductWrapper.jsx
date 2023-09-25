import React, { useState } from "react";
import FilterPanel from "../FilterPanel/FilterPanel";
import ProductPanel from "../ProductPanel/ProductPanel";
import { FiFilter, FiX } from "react-icons/fi";
import "./ProductWrapper.css";
import { useFilter } from "../../Context/FilterContext";
import { products } from "../../constants/productDB";
import { filterProducts } from "../../constants/filterProducts";

const ProductWrapper = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filterState } = useFilter();
  const filteredProductData = filterProducts(filterState, products);

  const filterBtnHandler = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="app__productPage-outer app__container">
      <div className="app__productPage-container fixed-container">
        {showFilter && (
          <div className="mobile-filter">
            <FilterPanel />
          </div>
        )}
        <div className="desktop_filter-panel">
          <FilterPanel />
        </div>
        <button className="filter_icon" onClick={filterBtnHandler}>
          {showFilter ? <FiX /> : <FiFilter />}
        </button>
        <ProductPanel filteredProductData={filteredProductData} />
      </div>
    </div>
  );
};

export default ProductWrapper;
