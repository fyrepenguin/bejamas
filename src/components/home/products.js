import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import Img from "gatsby-image";

import Heading from "../common/heading";
import breakpoints from "../utils/breakpoints";

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
  const cards = css`
    margin: 1.55rem auto 0;
    margin-top: 4.65rem;
    display: grid;
    row-gap: 3.1rem;
    column-gap: 3.1rem;
    max-width: 58.9rem;
    align-items: flex-start;
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const card = css`
    display: flex;
    flex-direction: column;
    color: currentColor;
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: transparent;
    position: relative;
    &::before {
      content: "";
      width: calc(100% + 3.1rem);
      height: calc(100% + 3.1rem);
      position: absolute;
      top: -1.55rem;
      left: -1.55rem;
      display: block;
      z-index: -1;
      visibility: hidden;
      border-radius: 8px;
      background-color: var(--color-bg-hover);
      background-color: var(--color-bg);
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      box-shadow: 0 9px 60px 0 rgba(218, 54, 84, 0.15);
    }
    &:hover {
      transform: translateY(-0.19375rem);
      &::before {
        opacity: 1;
        visibility: visible;
      }
    }
  `;
  const cardImg = css`
    position: relative;
    overflow: hidden;
    img {
      border-radius: 8px 8px 0 0;
    }
  `;
  const pwaTitle = css`
    margin-top: 1.55rem;
  `;
  const pwaDes = css`
    color: var(--color-text-secondary);
    margin-bottom: 2.325rem;
  `;
  const cardSpan = css`
    margin-top: auto;
    color: var(--color-cta);
  `;
  return (
    <section className={classes}>
      <Heading
        description={description}
        title="Perfect for SMBs and enterprise"
        subheading={subheading}
      />
      <div className={cards}>
        <a href="/" className={card}>
          <div className={cardImg}>
            <Img fluid={data.productJAM.fluid} />
          </div>
          <h3 className={pwaTitle}>JAMstack Websites</h3>
          <p className={pwaDes}>{jamDesc}</p>
          <span className={cardSpan}>See more »</span>
        </a>
        <a href="/" className={card}>
          <div className={cardImg}>
            <Img fluid={data.productPWA.fluid} />
          </div>
          <h3 className={pwaTitle}>Progressive Web Applications</h3>
          <p className={pwaDes}>{pwaDesc}</p>
          <span className={cardSpan}>See more »</span>
        </a>
      </div>
    </section>
  );
};
export default Products;
