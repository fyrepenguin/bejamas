import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";

import Heading from "../common/heading";

const JamUses = () => {
  const data = useStaticQuery(graphql`
    query {
      swift: contentfulAsset(title: { eq: "swift-icon" }) {
        ...ImageContent
      }
      safe: contentfulAsset(title: { eq: "safe-icon" }) {
        ...ImageContent
      }
      stable: contentfulAsset(title: { eq: "stable-icon" }) {
        ...ImageContent
      }
      scalable: contentfulAsset(title: { eq: "scalable-icon" }) {
        ...ImageContent
      }
    }
  `);
  const jamstackBenefits = css`
    background-color: var(--color-bg-secondary);
    border-radius: 16px;
  `;
  const benefits = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18.6rem, 1fr));
    row-gap: 3.1rem;
    column-gap: calc(6vw + 3.1rem);
    align-items: flex-start;
    max-width: 58.9rem;
    margin: 1.55rem auto 0;
    margin-top: 4.65rem;
    counter-reset: benefits;
  `;
  const benefit = css`
    position: relative;
    color: var(--color-text-secondary);
    &::before {
      content: counter(benefits);
      font-weight: 700;
      font-size: 18rem;
      top: -5rem;
      color: #e3eef4;
      position: absolute;
      right: 5%;
      width: 50%;
      line-height: 1;
      text-align: center;
      counter-increment: benefits;
      background: linear-gradient(
        180deg,
        var(--color-text-gradient-from) 0,
        var(--color-text-gradient-to) 85%
      );
      pointer-events: none;
      z-index: 0;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  const benefitImg = css`
    position: relative;
    overflow: hidden;
    display: inline-block;
    .gatsby-image-wrapper {
      height: 160px;
    }
  `;
  const h3 = css`
    z-index: 2;
    color: var(--color-text-primary);
    margin-top: 1.55rem;
    position: relative;
  `;
  return (
    <section className={`${jamstackBenefits} section`}>
      <Heading
        subheading="Site with benefits"
        title="How JAMstack supports your business"
        description="We use the power of JAMstack and server-side rendering to ship value to our customers."
      />
      <div className={benefits}>
        <div className={benefit}>
          <div className={benefitImg}>
            <Img fluid={data.swift.fluid} style={{ width: "152px" }} />
          </div>
          <h3 className={h3}>Swift</h3>
          <p>
            We don’t use databases, so there’s no time-consuming multiple
            queries. Static sites are even up to 10x faster, with benefits for
            the UX and SERP rankings.
          </p>
        </div>
        <div className={benefit}>
          <div className={benefitImg}>
            <Img fluid={data.safe.fluid} style={{ width: "179px" }} />
          </div>
          <h3 className={h3}>Safe</h3>
          <p>
            73.2% of the most popular WordPress installations are opened to
            vulnerabilities. Statically rendered websites with no plugins are a
            fortress and let you save money on security.
          </p>
        </div>
        <div className={benefit}>
          <div className={benefitImg}>
            <Img fluid={data.stable.fluid} style={{ width: "209px" }} />
          </div>
          <h3 className={h3}>Stable</h3>
          <p>
            Traffic bigger than usual? Not an issue with the JAMstack sites -
            you host your websites’ static files in a multi-cloud environment on
            a CDN with no traffic limitations.
          </p>
        </div>
        <div className={benefit}>
          <div className={benefitImg}>
            <Img fluid={data.scalable.fluid} style={{ width: "195px" }} />
          </div>
          <h3 className={h3}>Scalable</h3>
          <p>
            Implementing new features to your project? Serverless architecture
            scales automatically as your usage or user base extends, so you can
            scale your app or site without hassle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JamUses;
