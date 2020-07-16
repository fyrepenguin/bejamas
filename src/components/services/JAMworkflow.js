import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

import Heading from "./../common/heading";

const JAMworkflow = () => {
  const data = useStaticQuery(graphql`
    query {
      icon1: contentfulAsset(title: { eq: "service icon 01" }) {
        ...ImageContent
      }
      icon2: contentfulAsset(title: { eq: "service icon 02" }) {
        ...ImageContent
      }
      icon3: contentfulAsset(title: { eq: "service icon 03" }) {
        ...ImageContent
      }

      icon5: contentfulAsset(title: { eq: "service icon 05" }) {
        ...ImageContent
      }
    }
  `);

  const workflowItems = css`
    margin: 1.55rem auto 0;
    margin-top: 4.65rem;
    display: grid;
    column-gap: calc(6vw + 3.1rem);
    row-gap: 4.65rem;
    max-width: 58.9rem;
    grid-template-columns: repeat(
      auto-fill,
      [col-start] minmax(16rem, 4fr) [col-end]
    );
    counter-reset: benefits;
    align-items: flex-start;
  `;
  const workflowItem = css`
    position: relative;
    color: var(--color-text-secondary);
    &::before {
      position: absolute;
      font-size: 10rem;
      top: 1rem;
      content: counter(benefits);
      color: #e3eef4;
      right: 5%;
      width: 50%;
      text-align: center;
      line-height: 1;
      font-weight: 700;
      counter-increment: benefits;
      pointer-events: none;
      z-index: 0;
      background: linear-gradient(
        180deg,
        var(--color-text-gradient-from) 0,
        var(--color-text-gradient-to) 85%
      );
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media (min-width: ${breakpoints.md}) {
        font-size: 18rem;
        top: -5rem;
      }
    }
    .gatsby-image-wrapper {
      display: inline-block;
    }
    h3 {
      margin-top: 1.55rem;
      color: var(--color-text-primary);
      z-index: 2;
      position: relative;
    }
  `;
  return (
    <section className="section workflow">
      <Heading subheading="workflow" title="Get your project a pro service" />
      <div className={workflowItems}>
        <div className={workflowItem}>
          <Img
            fluid={data.icon1.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Clear project goals</h3>
          <p>
            We’ll discuss what your business needs most to thrive, and focus on
            it during the whole project.
          </p>
        </div>
        <div className={workflowItem}>
          <Img
            fluid={data.icon2.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Perfect toolset</h3>
          <p>
            Thanks to our expertise we’ll offer you a couple of technologies,
            that will suit your interests best.
          </p>
        </div>
        <div className={workflowItem}>
          <Img
            fluid={data.icon3.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Transparent work environment</h3>
          <p>
            Slack workspace, Jira board, Github repository, you’ll get access to
            all of these to always be in the know how your project’s going on.
          </p>
        </div>

        <div className={workflowItem}>
          <Img
            fluid={data.icon5.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Afterproject relationship</h3>
          <p>
            Our team will be happy to stay with you even after the project ends,
            handling your feature requests and maintenance, so you can grow your
            business in peace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JAMworkflow;
