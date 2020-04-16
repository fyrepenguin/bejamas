import React, { Component } from "react";
import "./../../styles/header.scss";

export default class Header extends Component {
  render() {
    return (
      <section className="hero container">
        <div>
          <div className="hero-content">
            <h3>JAMstack developers for hire</h3>
            <h1>Meet faster, more secure web.</h1>

            <p>
              Let us maximize your business potential with the latest and
              innovative technologies.
            </p>
            <a className="cta" href="/">
              Work with us!
            </a>
          </div>
          <div>
            <h3>TRUSTED BY INNOVATIVE COMPANIES</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <picture></picture>
        </div>
      </section>
    );
  }
}
