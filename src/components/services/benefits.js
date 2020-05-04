import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";

import Heading from "./../common/heading";

const Benefits = () => {
  const data = useStaticQuery(graphql`
    query {
      performance: contentfulAsset(title: { eq: "JAM performance" }) {
        ...ImageContent
      }
      seo: contentfulAsset(title: { eq: "JAM seo" }) {
        ...ImageContent
      }
      safety: contentfulAsset(title: { eq: "JAM safety" }) {
        ...ImageContent
      }
      content: contentfulAsset(title: { eq: "JAM content" }) {
        ...ImageContent
      }
      uptime: contentfulAsset(title: { eq: "JAM uptime" }) {
        ...ImageContent
      }
    }
  `);
  const benefitsContent = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    column-gap: 3.1rem;
    row-gap: 1.55rem;
    align-items: flex-start;
    margin: 1.55rem auto 0;
    max-width: 72.075rem;
    margin-top: 0;
    header {
      text-align: left;
    }
    .benefit {
      color: var(--color-text-secondary);
      position: relative;
    }
    h3 {
      margin-top: 1.55rem;
      color: var(--color-text-primary);
      position: relative;
      z-index: 2;
    }
  `;
  return (
    <section className="benefits section">
      <div className={benefitsContent}>
        <Heading
          subheading={"Sites with Benefits"}
          title={"How JAMstack supports your marketing"}
        />
        <div className="benefit">
          <Img
            fluid={data.performance.fluid}
            style={{ width: "175px", height: "160px", display: "inline-block" }}
          />
          <h3>Excellent performance</h3>
          <p>
            No database means no time-consuming multiple queries. Static sites
            are faster sites, even up to 10x.
          </p>
        </div>
        <div className="benefit">
          <Img
            fluid={data.seo.fluid}
            style={{ width: "160px", height: "160px", display: "inline-block" }}
          />
          <h3>SEO Advantage</h3>
          <p>
            Going static also means better ranking possibilities, what equals
            more traffic and more $$$.
          </p>
        </div>
        <div className="benefit">
          <Img
            fluid={data.safety.fluid}
            style={{ width: "160px", height: "160px", display: "inline-block" }}
          />
          <h3>Safety</h3>
          <p>
            Static websites with no plugins or databases are like a fortress.
            Plus, more secure site means fewer security expenses.
          </p>
        </div>
        <div className="benefit">
          <Img
            fluid={data.content.fluid}
            style={{ width: "160px", height: "160px", display: "inline-block" }}
          />
          <h3>No-sweat content management</h3>
          <p>
            Headless CMSes let you build a website that is both easy to use and
            customize freely..
          </p>
        </div>
        <div className="benefit">
          <Img
            fluid={data.uptime.fluid}
            style={{ width: "160px", height: "160px", display: "inline-block" }}
          />
          <h3>Reliable uptime & lower costs</h3>
          <p>
            Traffic bigger than usual? Not an issue here. With JAMstack
            marketing websites uptime is anytime. And doesn’t cost a fortune.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
