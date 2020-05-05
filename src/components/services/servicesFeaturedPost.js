import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { css } from "linaria";

import Heading from "./../common/heading";

import "../../styles/jamstack.scss";

const ServicesFeaturedPost = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "JAM case study" }) {
        ...ImageContent
      }
    }
  `);
  const featuredContent = css`
    margin: 1.55rem auto 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 4.65rem;
    column-gap: 4.65rem;
    max-width: 58.9rem;
    margin-top: 4.65rem;
  `;
  const featuredHeader = css`
    .gatsby-image-wrapper {
      margin-top: 3.1rem;
    }
    header {
      text-align: left;
    }
  `;
  const featuredDescription = css`
    margin-top: -0.51666666rem;
    p {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
    a {
      margin-top: 1.0333333333333rem;
    }
  `;
  return (
    <section className="section featured-post-services">
      <div className={featuredContent}>
        <div className={featuredHeader}>
          <Heading
            title={
              "GatsbyJS and Sanity headless CMS site for Just Technologies"
            }
            subheading={"Featured JAMstack Marketing Website"}
          />
          <Img fluid={data.contentfulAsset.fluid} />
        </div>
        <div className={featuredDescription}>
          <p>
            Just is a fintech company that creates cloud-native software
            products for corporate clients to help them manage their FX
            operations, same as risk and liquidity.
          </p>
          <p>
            What they needed was a sharp and fast informative website for their
            prospects, job candidates, and investors, that is easy to edit and
            works in multiple languages.
          </p>
          <p>
            What we did was building a fast and easy-editable website with
            GatsbyJS, implementing Sanity headless CMS that enables custom
            configuration, and deploying the content with Netlify.
          </p>
          <Link to="/blog" className="cta">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeaturedPost;
