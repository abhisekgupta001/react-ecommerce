import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { totalCartValue, productsInsideCart } = useCart();

  return (
    <div>
      <Navbar />
      <p> total value : {totalCartValue}</p>
      {productsInsideCart.map((props) => (
        <ProductCard {...props} key={props.id} />
      ))}
    </div>
  );
};

export default Cart;
