import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";

import Heading from "./../common/heading";

const Values = ({ values, noFooter }) => {
  const data = useStaticQuery(graphql`
    query {
      transparency: contentfulAsset(title: { eq: "01 Transparency Icon" }) {
        ...ImageContent
      }
      openness: contentfulAsset(title: { eq: "02 Openness of Mind Icon" }) {
        ...ImageContent
      }
      commitment: contentfulAsset(
        title: { eq: "03 Commitment Responsibility Icon" }
      ) {
        ...ImageContent
      }
      empathy: contentfulAsset(title: { eq: "04 Empathy Icon" }) {
        ...ImageContent
      }
    }
  `);
  const images = [
    data.transparency.fluid,
    data.openness.fluid,
    data.commitment.fluid,
    data.empathy.fluid,
  ];

  const things = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    column-gap: calc(6vw + 3.1rem);
    row-gap: 4.65rem;
    align-items: flex-start;
    margin: 1.55rem auto 0;
    max-width: 58.9rem;
    margin-top: 4.65rem;
  `;
  const value = css`
    position: relative;
    color: var(--color-text-secondary);
  `;
  const valueImg = css`
    display: inline-block;
  `;
  const valueTitle = css`
    color: var(--color-text-primary);
    z-index: 2;
    position: relative;
    margin-top: 1.55rem;
  `;

  const valueFooter = css`
    margin-top: 4.65rem;
    text-align: center;
  `;
  const footerContent = css`
    max-width: 40.3000000000000004rem;
    margin: 0 auto;
  `;
  const footerDesc = css`
    margin-top: 2.325rem;
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
  `;
  return (
    <section className="values section">
      <Heading
        subheading="Things we value"
        title="Believability at the core"
        description="As a remote team of independent thinkers, we share the same values that make things work like a charm."
      />
      <div className={things}>
        {values.map((v, i) => {
          return (
            <div className={value} key={i}>
              <Img className={valueImg} fluid={images[i]} style={v.style} />
              <h3 className={valueTitle}>{v.heading}</h3>
              <p>{v.description}</p>
            </div>
          );
        })}
      </div>

      {noFooter ? (
        ""
      ) : (
        <footer className={valueFooter}>
          <div className={footerContent}>
            <p className={footerDesc}>
              For us customers really do come first because we help them not
              only grow their businesses but also educate them to understand the
              tech behind it.
            </p>
            <Link to="/careers" className="cta">
              Work with us!
            </Link>
          </div>
        </footer>
      )}
    </section>
  );
};

export default Values;
