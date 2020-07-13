import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

const JamIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "What is JAM" }) {
        ...ImageContent
      }
    }
  `);

  const jamIntroContent = css`
    margin: 1.55rem auto 0;
    align-items: center;
    max-width: 72.075rem;
    display: grid;
    column-gap: 3.1rem;
    row-gap: 4.65rem;
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 3.1rem;
    }
    p {
      margin-top: 2.325rem;
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
  `;
  const footer = css`
    text-align: center;
    margin-top: 1.55rem;
  `;
  return (
    <section className="jam-intro section">
      <div className={jamIntroContent}>
        <div>
          <h2>What is JAMstack</h2>
          <p>
            JAMstack means an alternative approach for building websites and web
            applications. The JAM here stands for JavaScript, APIs, and
            Markdown. For your progressive web application, it means lower
            costs, scalability, and incredibly good performance.
          </p>
          <p>
            Building our apps we use battle-tested technologies like GatsbyJS,
            NextJS, Contentful, AWS, Netlify, and others.
          </p>
        </div>
        <div className="jamintro-img">
          <Img
            fluid={data.contentfulAsset.fluid}
            style={{ maxWidth: "500px", margin: "0 0 0 auto" }}
          />
        </div>
      </div>
      <footer className={footer}>
        <Link className="cta" to="/blog">
          Read more
        </Link>
      </footer>
    </section>
  );
};

export default JamIntro;
