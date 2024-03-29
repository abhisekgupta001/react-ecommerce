import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { BsFillHeartFill, BsHeart, BsStarFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useToast } from "../../Context/ToastContext";

const ProductCard = ({ product }) => {
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

  const { productsInsideCart, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { productsInWishlist, addToWishlist, removeFromWishlist } =
    useWishlist();
  const [isWhistlisted, setIsWhistlisted] = useState(false);
  const { toastFn } = useToast();

  useEffect(() => {
    const productIsInCart = productsInsideCart.find(
      (currentProduct) => currentProduct.id === id
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

    const productIsInWishlist = productsInWishlist.find(
      (currentProduct) => currentProduct.id === id
    );

    if (productIsInWishlist) {
      setIsWhistlisted(true);
    } else {
      setIsWhistlisted(false);
    }
  }, [productsInsideCart, productsInWishlist, id]);

  const handleClick = () => {
    if (inStock) {
      if (isInCart) {
        removeFromCart(product);
        toastFn("Removed from cart");
      } else {
        addToCart(product);
        toastFn("Added to cart");
      }
    }
  };

  const WishlistUpdateFn = () => {
    if (isWhistlisted) {
      removeFromWishlist(product);
      toastFn("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toastFn("Added to wishlist");
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
            onClick={() => {
              handleClick();
            }}>
            {inStock
              ? isInCart
                ? "Remove from Cart"
                : "Add to Cart"
              : "Out of Stock"}
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
    </div>
  );
};

export default ProductCard;
