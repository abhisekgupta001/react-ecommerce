import React from "react";
import CartComponent from "../components/Cart/CartComponent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartComponent />
      <Footer />
    </div>
  );
};

export default Cart;
