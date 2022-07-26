import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPanel.css";
import { products } from "../../constants/productDB";

const ProductPanel = () => {
  return (
    <main className="productPanel">
      <div className="product_heading-wrapper">
        <h3 className="product_heading">Showing All Products</h3>
        <span className="product_count">(20 products)</span>
      </div>
      <div className="product_grid">
        {products.map((props) => (
          <ProductCard {...props} key={props.id} />
        ))}
      </div>
    </main>
  );
};

export default ProductPanel;
