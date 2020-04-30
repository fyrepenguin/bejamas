import React from "react";
import Heading from "../common/heading";
import "../../styles/products.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Products = ({ description, subheading, pageName, jamDesc, pwaDesc }) => {
  const data = useStaticQuery(graphql`
    query {
      productJAM: contentfulAsset(title: { eq: "product-mw" }) {
        ...ImageContent
      }
      productPWA: contentfulAsset(title: { eq: "product-pwa" }) {
        ...ImageContent
      }
    }
  `);
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
            <Img fluid={data.productJAM.fluid} />
          </div>
          <h3>JAMstack Websites</h3>
          <p>{jamDesc}</p>
          <span>See more »</span>
        </a>
        <a href="/" className="card">
          <div className="card-img">
            <Img fluid={data.productPWA.fluid} />
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
