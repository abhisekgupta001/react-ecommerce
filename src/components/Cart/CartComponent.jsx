import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useCart } from "../../Context/CartContext";
import { CartCards } from "../CartCards/CartCards";
import TotalCard from "../TotalCard/TotalCard";

import "./CartComponent.css";

const CartComponent = () => {
  const { productsInsideCart, totalCartItems } = useCart();

  return (
    <div className="app_cart-conatiner app_container">
      <div className="app_outer-conatiner fixed-container flex-center">
        <h2>My Shopping Cart({totalCartItems})</h2>
        {productsInsideCart.length > 0 ? (
          <div className="cart_wrapper flex-center">
            <div className="cart_cards-wrapper">
              {productsInsideCart.map((product) => (
                <CartCards product={product} key={product.id} />
              ))}
            </div>
            <TotalCard />
          </div>
        ) : (
          <div className="cartEmpty_message flex-center">
            <GiShoppingCart fontSize={"10rem"} className="emptyIcon" />
            <h2>Cart is Empty.</h2>
            <Link to="/products">
              <button className="flex-center">
                <AiOutlineDoubleLeft />
                Go Back to Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
