import React from "react";
import "./WishlistWrapper.css";
import { useWishlist } from "../../Context/WishlistContext";
import WishlistCard from "../WishlistCard/WishlistCard";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const WishlistWrapper = () => {
  const { productsInWishlist } = useWishlist();
  return (
    <div className="app__container">
      <div className="app__wishlist-container fixed-container flex-center">
        <h3 className="wishlist-heading">My Wishlist</h3>
        {productsInWishlist.length > 0 ? (
          <div className="wishlist_card-container">
            {productsInWishlist.map((product) => (
              <WishlistCard product={product} />
            ))}
          </div>
        ) : (
          <div className="cartEmpty_message flex-center">
            <BsBag fontSize={"10rem"} className="emptyIcon" />
            <h2>Wishlist is Empty.</h2>
            <Link to="/products">
              <button className="flex-center">
                <AiOutlineDoubleLeft />
                Lets go shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistWrapper;
