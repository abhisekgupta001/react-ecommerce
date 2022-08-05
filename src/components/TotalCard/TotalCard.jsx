import React, { useState } from "react";
import "./TotalCard.css";
import { useCart } from "../../Context/CartContext";

const TotalCard = () => {
  const { totalCartValue, totalCartItems } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const applyCouponFn = () => {
    if (coupon === "free50") {
      setCouponApplied(true);
      setDiscount(500);
    } else {
      setCouponApplied(false);
      setCoupon("");
      setDiscount(0);
    }
  };
  return (
    <div className="total_card flex-center">
      <div className="coupon_wrapper flex-center">
        <input
          type="text"
          className="coupon_field"
          placeholder="Try 'FREE50'"
          onChange={(e) => setCoupon(e.target.value)}
          value={coupon}
        />
        <button className="btn-apply-coupon" onClick={applyCouponFn}>
          Apply Coupon
        </button>
      </div>

      <span className="coupon_message">
        {couponApplied
          ? "Congrats!!! Coupon successfully applied."
          : "Apply a valid coupon, get heavy discount."}
      </span>

      <div className="price_detail">
        <h4>Price Details</h4>
      </div>
      <div className="price_wrapper">
        <span>
          <p>Price ({totalCartItems} items) </p>
          <p>Rs. {totalCartValue}</p>
        </span>
        <span>
          <p>Discount</p>
          <p>-Rs. {discount}</p>
        </span>
        <span>
          <p>Delivery Charges</p>
          <p>Rs. 99</p>
        </span>
      </div>
      <div className="total_wrapper">
        <h4>Total Amount</h4>
        <h4>Rs. {totalCartValue + 99 - discount}</h4>
      </div>
      <p>You will save Rs {discount} on this order</p>
      <button className="btn-place-order">Place Order</button>
    </div>
  );
};

export default TotalCard;
