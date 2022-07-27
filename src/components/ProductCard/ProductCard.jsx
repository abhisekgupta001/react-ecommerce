import React, { useState } from "react";
import "./ProductCard.css";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({
  imgSrc,
  title,
  subtitle,
  price,
  MRP,
  discount,
  inStock,
}) => {
  const [isWhistlisted, setIsWhistlisted] = useState(false);

  const toastMe = (toastMsg) => {
    toast(toastMsg, {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const WishlistUpdateFn = () => {
    if (isWhistlisted) {
      setIsWhistlisted(false);
      toastMe("Removed from Wishlist");
    } else {
      setIsWhistlisted(true);
      toastMe("Added to Wishlist");
    }
  };

  return (
    <div className="product_card">
      <div className="card_img-wrapper grid-center">
        <img src={imgSrc} alt={subtitle} />
        {!inStock && (
          <div className="card_outOfStock grid-center">OUT OF STOCK</div>
        )}
      </div>
      <div className="card_details-wrapper">
        <div className="card_detail-name_wrapper">
          <h5 className="card_title">{title}</h5>
          <p className="card_subtitle">{subtitle}</p>
        </div>
        <div className="card_detail-price_wrapper">
          <p className="card_price">
            Rs. {price} <span className="discount_price"> Rs. {MRP}</span>
            <span className="discount_percent"> ({discount}% OFF)</span>
          </p>
        </div>
        <div className="card_detail-button_wrapper grid-center">
          <button
            className="card_btn btn_addToCart"
            onClick={() => (inStock ? toastMe("Added to Cart") : "")}>
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
        <div className="whistlist_icon-wrapper" onClick={WishlistUpdateFn}>
          {isWhistlisted ? (
            <BsFillHeartFill className="whistlist_icon" />
          ) : (
            <BsHeart className="whistlist_icon" />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
