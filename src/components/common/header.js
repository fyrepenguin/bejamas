import React from "react";
import "./../../styles/header.scss";
import Img from "gatsby-image";
import { Link } from "gatsby";
const Header = ({ subheading, title, cta, desc, hero, extra, shapes }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="main-text">
            <h3>{subheading}</h3>
            <h1>{title}</h1>
            <p>{desc}</p>
            <Link href="/" className="cta">
              {cta}
            </Link>
          </div>
          {extra}
        </div>
      </div>
      <div className="hero-img-container">
        <Img fluid={hero} alt="" />
      </div>
      {shapes}
    </section>
  );
};

export default Header;
