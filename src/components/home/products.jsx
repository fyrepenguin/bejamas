import React, { Component } from "react";
import Heading from "./../common/heading";
import { productJam, productPWA } from "./../../images";

export default class Products extends Component {
  render() {
    return (
      <section>
        ============================== Products ==============================
        <Heading
          description="Best things since sliced bread. Shaped with diligence and the highest software-craftsmanship."
          title="Perfect for SMBs and enterprise"
          subtitle="PRODUCTS WE CRAFT"
        />
        <div className="cards">
          <div className="card">
            <div>
              <img src={productJam} alt="" />
            </div>
            <h3>JAMstack Websites</h3>
            <p>
              Get new customers with a faster website with higher SEO chances.
              We build them with proven technologies: GatsbyJS, Hugo, Netlify,
              and many others.
            </p>
            <a href="/">See more</a>
          </div>
          <div className="card">
            <div>
              <img src={productPWA} alt="" />
            </div>
            <h3>Progressive Web Applications</h3>
            <p>
              Save time and money with a progressive web app instead of native
              apps for multiple platforms. JAMstack PWA means great performance
              and low hosting costs.
            </p>
            <a href="/">See more</a>
          </div>
        </div>
        ============================== Products ==============================
      </section>
    );
  }
}