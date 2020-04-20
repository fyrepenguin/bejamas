import React from "react";
import Heading from "../common/heading";
import { productJam, productPWA } from "../images";
import "../../styles/products.scss";

const Products = ({ description, subheading, pageName, jamDesc, pwaDesc }) => {
  let classes;
  if (pageName === "services") classes = "products-services section";
  else {
    classes = "products section";
  }

  return (
    <section className={classes}>
      <Heading
        description={description}
        title="Perfect for SMBs and enterprise"
        subheading={subheading}
      />
      <div className="cards">
        <a href="/" className="card">
          <div className="card-img">
            <img src={productJam} alt="" />
          </div>
          <h3>JAMstack Websites</h3>
          <p>{jamDesc}</p>
          <span>See more »</span>
        </a>
        <a href="/" className="card">
          <div className="card-img">
            <img src={productPWA} alt="" />
          </div>
          <h3>Progressive Web Applications</h3>
          <p>{pwaDesc}</p>
          <span>See more »</span>
        </a>
      </div>
    </section>
  );
};
export default Products;
