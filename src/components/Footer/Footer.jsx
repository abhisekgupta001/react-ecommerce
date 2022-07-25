import React from "react";
import "./Footer.css";
import { BiArrowToTop } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="app__container footer-outer-container">
      <div className="app__footer fixed-container flex-center">
        <div className="app__footer-socialColumn">
          <a href="#" className="footer-logo">
            Pehnawa
          </a>
          <p className="footer-heading">Get In Touch</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noopener"
                target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dev_abhi_js"
                rel="noopener"
                target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/its.abhi.shake/"
                rel="noopener"
                target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-categoryColumn">
          <p className="footer-heading">Categories</p>
          <ul>
            <li>
              <Link to="/products">Shirts</Link>
            </li>
            <li>
              <Link to="/products">T-Shirts</Link>
            </li>
            <li>
              <Link to="/products">Jeans</Link>
            </li>
            <li>
              <Link to="/products">Wallets</Link>
            </li>
            <li>
              <Link to="/products">Shoes</Link>
            </li>
          </ul>
        </div>
        <div className="app__footer-contactColumn">
          <p className="footer-heading">Contact Us</p>
          <ul>
            <li>
              <a href="#">Ph.no.: 987-654-3210</a>
            </li>
            <li>
              <a href="#">Email: pehnawa@gmail.com</a>
            </li>
            <li>
              <a href="#">
                Address: 34/H, Sector 32, <span>Noida, Uttar Pradesh</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-scrollToTop">
          <a href="#">
            <BiArrowToTop className="footer-icon" />
            <p>Scroll to top</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
