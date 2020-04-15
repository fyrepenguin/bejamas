import React from "react";
import { logoNav } from "../../../images/index";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="nav-logo">
        <a href="/">
          <img src={logoNav} alt="" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="cta">
        <a href="/" className="cta">
          Work with us!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
