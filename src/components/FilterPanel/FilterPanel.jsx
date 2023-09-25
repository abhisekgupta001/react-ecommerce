import React from "react";
import "./FilterPanel.css";
import { categoriesData, ratingData } from "../../constants/data";
import { useFilter } from "../../Context/FilterContext";

const FilterHeading = ({ heading }) => (
  <h3 className="filter_heading">{heading}</h3>
);

const FilterPanel = () => {
  const { filterDispatch, filterState } = useFilter();
  const { sortBy, ratingBy } = filterState;
  return (
    <aside className="filterPanel">
      <div className="filter_title-wrapper filter_wrapper">
        <FilterHeading heading={"Filters"} />
        <button className="filter_btn-clear">Clear</button>
      </div>

      <div className="filter_slider-wrapper filter_wrapper">
        <FilterHeading heading={"Price"} />
        <div className="slider-wrapper">
          <label className="slider-label">
            <span>100</span>
            <span>2000+</span>
          </label>
          <input
            className="slider-bar"
            type="range"
            name="slider"
            id="slider"
            min="100"
            max="2000"
            step="100"
          />
        </div>
      </div>

      <div className="filter_gender-wrapper filter_wrapper">
        <FilterHeading heading={"Gender"} />
        <label>
          <input type="checkbox" className="gender-checkbox" /> Men Clothing
        </label>
        <label>
          <input type="checkbox" className="gender-checkbox" /> Women Clothing
        </label>
      </div>

      <div className="filter_category-wrapper filter_wrapper">
        <FilterHeading heading={"Category"} />
        {categoriesData.map((category) => (
          <label key={category.id}>
            <input type="checkbox" className="category-checkbox" />{" "}
            {category.title}
          </label>
        ))}
      </div>

      <div className="filter_ratings-wrapper filter_wrapper">
        <FilterHeading heading={"Rating"} />
        {ratingData.map((rating) => (
          <label key={rating.id}>
            <input
              type="radio"
              className="filterbar-radio"
              name="filter-star-radio"
              checked={ratingBy === rating.title[0]}
              onChange={() =>
                filterDispatch({ type: "RATING", payload: rating.title[0] })
              }
            />{" "}
            {rating.title}
          </label>
        ))}
      </div>

      <div className="filter_sort-wrapper filter_wrapper">
        <FilterHeading heading={"Sort by"} />
        <label>
          <input
            type="radio"
            className="filterbar-radio"
            name="filter-sort-radio"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
            }
          />{" "}
          Price - Low to High
        </label>

        <label>
          <input
            type="radio"
            className="filterbar-radio"
            name="filter-sort-radio"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
            }
          />{" "}
          Price - High to Low
        </label>
      </div>
    </aside>
  );
};

export default FilterPanel;
