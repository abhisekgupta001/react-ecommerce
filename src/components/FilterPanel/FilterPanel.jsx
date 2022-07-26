import React from "react";
import "./FilterPanel.css";
import { categoriesData, ratingData, sortingData } from "../../constants/data";

const FilterHeading = ({ heading }) => (
  <h3 className="filter_heading">{heading}</h3>
);

const FilterPanel = () => {
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
            />{" "}
            {rating.title}
          </label>
        ))}
      </div>

      <div className="filter_sort-wrapper filter_wrapper">
        <FilterHeading heading={"Sort by"} style={{ color: "red" }} />
        {sortingData.map((sort) => (
          <label key={sort.id}>
            <input
              type="radio"
              className="filterbar-radio"
              name="filter-sort-radio"
            />{" "}
            {sort.type} - {sort.value}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterPanel;
