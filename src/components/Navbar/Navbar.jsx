import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiSearchAlt2, BiGridAlt, BiXCircle } from "react-icons/bi";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import "./Navbar.css";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const [verticalMenu, setVerticalMenu] = useState(false);
  const { totalCartItems } = useCart();
  const { productsInWishlist } = useWishlist();

  const handleHamburger = () => {
    setVerticalMenu((prev) => !prev);
  };

  const activeNav = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid var(--color-light)" : "",
    };
  };

  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="app__container nav-outer-container">
        <nav className="app__navbar fixed-container flex-center">
          <Link to="/" className="app__navbar-logo">
            Pehnawa
          </Link>

          <div className="app__navbar-search_container flex-center">
            <input
              type="text"
              className="app__navbar-search_input"
              placeholder="Search..."
            />
            <BiSearchAlt2 className="app__navbar-search_icon" />
          </div>

          <ul className="app__navbar-links flex-center">
            <li className="app__navbar-link">
              <NavLink to="/products" style={activeNav}>
                Products
              </NavLink>
            </li>

            <li className="app__navbar-link">
              <NavLink to="/wishlist" style={activeNav}>
                Wishlist
                {productsInWishlist.length > 0 ? (
                  <span style={{ margin: "3px" }}>
                    [{productsInWishlist.length}]
                  </span>
                ) : (
                  ""
                )}
              </NavLink>
            </li>

            <li className="app__navbar-link">
              <NavLink to="/cart" style={activeNav}>
                Cart
                {totalCartItems > 0 ? (
                  <span style={{ margin: "3px" }}>[{totalCartItems}]</span>
                ) : (
                  ""
                )}
              </NavLink>
            </li>

            <li className="app__navbar-link">
              <NavLink to="/account" style={activeNav}>
                Account
              </NavLink>
            </li>

            <li className="app__navbar-link">
              <NavLink to="/login" style={activeNav}>
                {isLoggedIn ? "Logout" : "Login"}
              </NavLink>
            </li>
          </ul>
          <BiGridAlt
            className="navbar-icon hamburger-icon"
            onClick={handleHamburger}
          />
        </nav>
      </div>
      {verticalMenu && (
        <div className="app__verticalMenu-container flex-center slide-bottom">
          <BiXCircle
            className="navbar-icon close-icon"
            onClick={handleHamburger}
          />
          <ul className="app__verticalMenu-links flex-center">
            <li className="app__verticalMenu-link">
              <NavLink
                to="/products"
                onClick={handleHamburger}
                style={activeNav}>
                Products
              </NavLink>
            </li>

            <li className="app__verticalMenu-link">
              <NavLink
                to="/wishlist"
                onClick={handleHamburger}
                style={activeNav}>
                Wishlist
                {productsInWishlist.length > 0 ? (
                  <span>[{productsInWishlist.length}]</span>
                ) : (
                  ""
                )}
              </NavLink>
            </li>

            <li className="app__verticalMenu-link">
              <NavLink to="/cart" onClick={handleHamburger} style={activeNav}>
                Cart {totalCartItems > 0 ? <span>[{totalCartItems}]</span> : ""}
              </NavLink>
            </li>

            <li className="app__verticalMenu-link">
              <NavLink
                to="/account"
                onClick={handleHamburger}
                style={activeNav}>
                Account
              </NavLink>
            </li>

            <li className="app__verticalMenu-link">
              <NavLink
                to="/login"
                onClick={() => {
                  setVerticalMenu(false);
                }}
                style={activeNav}>
                {isLoggedIn ? "Logout" : "Login"}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
