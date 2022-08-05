import React, { useEffect, useState } from "react";
import { BsFillHeartFill, BsStarFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { useToast } from "../../Context/ToastContext";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({ product }) => {
  const {
    id,
    imgSrc,
    title,
    subtitle,
    price,
    MRP,
    discount,
    inStock,
    category,
    rating,
  } = product;
  const { removeFromWishlist } = useWishlist();
  const { removeFromCart, addToCart, productsInsideCart } = useCart();
  const { toastFn } = useToast();
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const productIsInCart = productsInsideCart.find(
      (currentProduct) => currentProduct.id === id
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [productsInsideCart, id]);

  const handleBtnClick = () => {
    if (inStock) {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(product);
        toastFn("Added to cart");
      }
    }
  };

  return (
    <div className="product_card">
      <div className="card_img-wrapper grid-center">
        <img src={imgSrc} alt={subtitle} />
        {!inStock && (
          <div className="card_outOfStock grid-center">OUT OF STOCK</div>
        )}
        <div className="category_wrapper">
          <span>{category}</span>
          <span>
            {rating} <BsStarFill style={{ color: "orange" }} />
          </span>
        </div>
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
            disabled={!inStock}
            className="card_btn btn_addToCart"
            onClick={handleBtnClick}>
            {inStock
              ? isInCart
                ? "Go to Cart"
                : "Move to Cart"
              : "Out of Stock"}
          </button>
        </div>
        <div
          className="whistlist_icon-wrapper"
          onClick={() => {
            removeFromWishlist(product);
            toastFn("Removed from Wishlist");
          }}>
          <BsFillHeartFill className="whistlist_icon" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WishlistCard;
