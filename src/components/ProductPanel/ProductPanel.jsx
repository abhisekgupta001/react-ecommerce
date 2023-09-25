import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPanel.css";
import { products } from "../../constants/productDB";

const ProductPanel = ({ filteredProductData }) => {
  return (
    <main className="productPanel">
      <div className="product_heading-wrapper">
        <h3 className="product_heading">Showing All Products</h3>
        <span className="product_count">
          ({filteredProductData.length} products)
        </span>
      </div>
      <div className="product_grid">
        {filteredProductData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default ProductPanel;
