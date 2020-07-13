import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

import Heading from "./../common/heading";

const Nomads = () => {
  const data = useStaticQuery(graphql`
    query {
      city: contentfulAsset(title: { eq: "malaga-city" }) {
        ...ImageContent
      }
      landscape: contentfulAsset(title: { eq: "malaga-landscape" }) {
        ...ImageContent
      }
      pool: contentfulAsset(title: { eq: "malaga-pool" }) {
        ...ImageContent
      }
      tree: contentfulAsset(title: { eq: "malaga-pink-tree" }) {
        ...ImageContent
      }
      breakfast: contentfulAsset(title: { eq: "malaga-breakfast" }) {
        ...ImageContent
      }
    }
  `);
  const nomadsText = css`
      display: grid;
      row-gap: 0rem;
      column-gap: calc(6vw + 3.1rem);
      align-items: flex-start;
      margin: 1.55rem auto 0;
      max-width: 58.9rem;
      @media (min-width: ${breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: ${breakpoints.md}) {
        margin-top: 4.65rem;
      }
      header {
        text-align: left;
      }
      div {
        color: var(--color-text-secondary);
        @media (min-width: ${breakpoints.md}) {
          margin-top: 3.875rem;
        }
      }
    `,
    retreatImages = css`
      display: grid;

      row-gap: 1.55rem;
      column-gap: 1.55rem;
      margin-top: 3.1rem;
      grid-template-columns: 1fr 1fr;
      @media (min-width: ${breakpoints.md}) {
        grid-template-columns: repeat(4, 1fr);
      }
      .gatsby-image-wrapper {
        border-radius: 16px;
        width: 100%;
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        margin-left: 0;

        &:hover {
          transform: scale(1.1);
        }
        @media (max-width: ${breakpoints.md}) {
          max-width: 100% !important;
        }
      }
      .tree {
        display: none;
      }

      @media (min-width: ${breakpoints.md}) {
        .city {
          grid-column: 2/4;
        }
        .breakfast {
          grid-column: 4;
        }
        .landscape {
          grid-column: 1/3;
        }
        .pool {
          grid-column: 3;
          margin-top: -4.65rem !important;
        }
        .tree {
          display: block;
          grid-column: 2;
          margin-top: -6.2rem !important;
        }
      }
      @media (min-width: ${breakpoints.lg}) {
        margin-left: 7.75rem !important;
        margin-top: 1.55rem !important;
      }
    `;
  return (
    <section className="section nomads primaryBg">
      <div className={nomadsText}>
        <Heading
          subheading="digital nomads"
          title="Behind the scenes of remote work"
          description="Who said we have to work from one office to be a close-knit team?"
        />
        <div>
          <p>
            The mere fact we’re all different and have different lifestyles
            gives us a chance to be more open and inspires us to make progress.
            We don’t believe in the nine-to-five work routine, being tied up to
            the desk, or forcing new employees to relocate.
          </p>
          <p>
            We see the jobs of the future more our way - being ourselves, being
            free, and living our dreams. There are things Slack can’t help with,
            that’s why we regularly take trips, coming from different parts of
            the world and having real fun.
          </p>
        </div>
      </div>
      <div className={retreatImages}>
        <Img
          className="city"
          fluid={data.city.fluid}
          style={{ margin: "0 auto 0 0", maxWidth: "445px" }}
        />
        <Img
          className="breakfast"
          fluid={data.breakfast.fluid}
          style={{ margin: "auto auto 0 0", maxWidth: "160px" }}
        />
        <Img
          className="landscape"
          fluid={data.landscape.fluid}
          style={{ margin: "0 auto 0 0", maxWidth: "254px" }}
        />
        <Img
          className="pool"
          fluid={data.pool.fluid}
          style={{ margin: "0 auto auto", maxWidth: "254px" }}
        />
        <Img
          className="tree"
          fluid={data.tree.fluid}
          style={{ margin: "0 auto", maxWidth: "160px" }}
        />
      </div>
    </section>
  );
};

export default Nomads;
