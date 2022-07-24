import React from "react";
import "./Footer.css";
import { BiArrowToTop } from "react-icons/bi";

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
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="app__footer-categoryColumn">
          <p className="footer-heading">Categories</p>
          <ul>
            <li>
              <a href="#">Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">Jeans</a>
            </li>
            <li>
              <a href="#">Wallets</a>
            </li>
            <li>
              <a href="#">Shoes</a>
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
