import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./WishlistWrapper.css";

const WishlistWrapper = () => {
  return (
    <div className="app__container">
      <div className="app__wishlist-container fixed-container flex-center">
        <h3 className="wishlist-heading">My Wishlist</h3>
        <div className="wishlist_card-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default WishlistWrapper;
