import React from "react";
import "./../../styles/header.scss";

const Header = ({ subheading, title, cta, desc, hero, extra, shapes }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="main-text">
            <h3>{subheading}</h3>
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href="/" className="cta">
              {cta}
            </a>
          </div>
          {extra}
        </div>
      </div>
      <div className="hero-img-container">
        <div className="img-wrapper">
          <picture>
            <img src={hero} alt="" />
          </picture>
        </div>
      </div>
      {shapes}
    </section>
  );
};

export default Header;
