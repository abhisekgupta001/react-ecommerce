import { React, useState, useEffect } from "react";
import "./CartCards.css";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useToast } from "../../Context/ToastContext";
import { useNavigate } from "react-router-dom";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartCards = ({ product }) => {
  const { id, imgSrc, title, subtitle, price, MRP, discount, quantity } =
    product;
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { addToWishlist, productsInWishlist, removeFromWishlist } =
    useWishlist();
  const [isWhistlisted, setIsWhistlisted] = useState(false);
  const { toastFn } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const productIsInWishlist = productsInWishlist.find(
      (currentProduct) => currentProduct.id === id
    );

    if (productIsInWishlist) {
      setIsWhistlisted(true);
    } else {
      setIsWhistlisted(false);
    }
  }, [productsInWishlist, id]);

  const WishlistUpdateFn = () => {
    if (isWhistlisted) {
      navigate("/wishlist");
    } else {
      addToWishlist(product);
      toastFn("Add to wishlist");
    }
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
            <AiFillMinusCircle
              fontSize={"1rem"}
              onClick={() => decrementQuantity({ id })}
            />
            <input type="number" placeholder={quantity} />
            <AiFillPlusCircle
              fontSize={"1rem"}
              onClick={() => incrementQuantity({ id })}
            />
          </label>
        </div>
        <div className="product_btns-wrapper flex-center">
          <button
            className="removeFromCart"
            onClick={() => {
              removeFromCart(product);
              toastFn("Removed from Cart");
            }}>
            Remove From Cart
          </button>
          <button className="moveToWishlist" onClick={WishlistUpdateFn}>
            {isWhistlisted ? "Go To Wishlist" : "Add To Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCards };
