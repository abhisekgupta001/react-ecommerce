import React, { useState } from "react";
import { BiSearchAlt2, BiGridAlt, BiXCircle } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [verticalMenu, setVerticalMenu] = useState(false);
  const handleHamburger = () => {
    setVerticalMenu((prev) => !prev);
  };
  return (
    <>
      <div className="app__container nav-outer-container">
        <nav className="app__navbar flex-center">
          <a href="#" className="app__navbar-logo">
            Pehnawa
          </a>

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
              <a href="#products">Products</a>
            </li>

            <li className="app__navbar-link">
              <a href="#wishlist">Wishlist</a>
            </li>

            <li className="app__navbar-link">
              <a href="#cart">Cart</a>
            </li>

            <li className="app__navbar-link">
              <a href="#account">Account</a>
            </li>

            <li className="app__navbar-link">
              <a href="#login">Login</a>
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
              <a href="#products" onClick={handleHamburger}>
                Products
              </a>
            </li>

            <li className="app__verticalMenu-link">
              <a href="#wishlist" onClick={handleHamburger}>
                Wishlist
              </a>
            </li>

            <li className="app__verticalMenu-link">
              <a href="#cart" onClick={handleHamburger}>
                Cart
              </a>
            </li>

            <li className="app__verticalMenu-link">
              <a href="#account" onClick={handleHamburger}>
                Account
              </a>
            </li>

            <li className="app__verticalMenu-link">
              <a href="#login" onClick={handleHamburger}>
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
