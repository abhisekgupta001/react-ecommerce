import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  imgSrc,
  title,
  subtitle,
  price,
  MRP,
  discount,
  inStock,
}) => {
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
          <button className="card_btn btn_addToCart">
            {inStock ? "Add to Cart" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
