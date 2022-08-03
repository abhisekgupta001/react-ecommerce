import React from "react";
import "./CartCards.css";
import { useCart } from "../../Context/CartContext";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartCards = ({
  props: { id, imgSrc, title, subtitle, price, MRP, discount },
}) => {
  const { removeFromCart } = useCart();

  const handleClick = () => {
    const selectedProduct = {
      id,
      imgSrc,
      title,
      subtitle,
      price,
      MRP,
      discount,
    };
    removeFromCart(selectedProduct);
  };
  return (
    <div className="cart_card flex-center">
      <div className="card_image-wrapper flex-center">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card_detail-wrapper flex-center">
        <div className="product_Titles">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
        <div className="product_Price-Wrapper">
          <p className="product_Price">
            Rs. {price} <span className="product_MRP">Rs. {MRP} </span>{" "}
            <span className="product_Discount">({discount}% OFF)</span>
          </p>
        </div>
        <div className="product_Quantity-Wrapper">
          <label>
            Quantity:
            <AiFillMinusCircle fontSize={"1rem"} />
            <input type="number" />
            <AiFillPlusCircle fontSize={"1rem"} />
          </label>
        </div>
        <div className="product_btns-wrapper flex-center">
          <button className="removeFromCart" onClick={handleClick}>
            Remove From Cart
          </button>
          <button className="moveToWishlist">Move To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { CartCards };
