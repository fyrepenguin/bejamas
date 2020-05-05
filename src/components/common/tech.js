import React from "react";
import Img from "gatsby-image";
import { css } from "linaria";
import { Link, useStaticQuery, graphql } from "gatsby";

import Heading from "./heading";

const TechUsed = ({ cta }) => {
  const data = useStaticQuery(graphql`
    fragment ImagesContent on ContentfulAsset {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    query {
      contentful: contentfulAsset(title: { eq: "contentful" }) {
        ...ImagesContent
      }
      storyblok: contentfulAsset(title: { eq: "storyblok" }) {
        ...ImagesContent
      }
      sanity: contentfulAsset(title: { eq: "sanity" }) {
        ...ImagesContent
      }
      forestry: contentfulAsset(title: { eq: "forestry" }) {
        ...ImagesContent
      }
      dato: contentfulAsset(title: { eq: "dato" }) {
        ...ImagesContent
      }
      gatsby: contentfulAsset(title: { eq: "gatsby" }) {
        ...ImagesContent
      }
      next: contentfulAsset(title: { eq: "nextjs" }) {
        ...ImagesContent
      }
      hugo: contentfulAsset(title: { eq: "hugo" }) {
        ...ImagesContent
      }
      react: contentfulAsset(title: { eq: "react" }) {
        ...ImagesContent
      }
      node: contentfulAsset(title: { eq: "nodejs" }) {
        ...ImagesContent
      }
      netlify: contentfulAsset(title: { eq: "netlify" }) {
        ...ImagesContent
      }
      now: contentfulAsset(title: { eq: "now-black" }) {
        ...ImagesContent
      }
      firebase: contentfulAsset(title: { eq: "firebase" }) {
        ...ImagesContent
      }
      aws: contentfulAsset(title: { eq: "aws" }) {
        ...ImagesContent
      }
    }
  `);

  const desc =
    "Every project is a new story, yet some things stay the same. We pick a dedicated set of tools for each one, for the best performance possible.";

  const tech = css`
    text-align: center;
    border-radius: 16px;
    background-color: var(--color-bg-secondary);
  `;
  const toolTypes = css`
    margin-top: 4.65rem;
    h3 {
      font-size: 0.875rem;
      margin-bottom: 2.325rem;
      letter-spacing: 0.1875rem;
      font-family: Poppins, sans-serif;
      text-transform: uppercase;
      color: var(--color-text-secondary);
    }
  `;
  const toolImages = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .gatsby-image-wrapper {
      margin: 0 2.325rem 1.55rem;
      max-width: 140px;
      width: 100%;
      filter: invert(0);
      opacity: 0.3;
    }
  `;
  return (
    <section className={`${tech} tech section`}>
      <Heading
        description={desc}
        title="Beautifying the web"
        subheading="TECHNOLOGIES WE USE"
      />
      <div className={toolTypes}>
        <h3>Data Sources</h3>
        <div className={toolImages}>
          <Img fluid={data.contentful.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.storyblok.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.sanity.fluid} style={{ maxWidth: "110px" }} />
          <Img fluid={data.forestry.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.dato.fluid} style={{ maxWidth: "120px" }} />
        </div>
      </div>
      <div className={toolTypes}>
        <h3>Build</h3>
        <div className={toolImages}>
          <Img fluid={data.gatsby.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.next.fluid} style={{ maxWidth: "120px" }} />
          <Img fluid={data.hugo.fluid} style={{ maxWidth: "150px" }} />
          <Img fluid={data.react.fluid} style={{ maxWidth: "60px" }} />
          <Img fluid={data.node.fluid} style={{ maxWidth: "120px" }} />
        </div>
      </div>
      <div className={toolTypes}>
        <h3>Deploy & CDN</h3>
        <div className={toolImages}>
          <Img fluid={data.netlify.fluid} style={{ maxWidth: "130px" }} />
          <Img fluid={data.now.fluid} style={{ maxWidth: "50px" }} />
          <Img fluid={data.firebase.fluid} style={{ maxWidth: "150px" }} />
          <Img fluid={data.aws.fluid} style={{ maxWidth: "70px" }} />
        </div>
      </div>

      {cta && (
        <Link
          to="estimate-project"
          className="cta"
          style={{ marginTop: "4.65rem" }}
        >
          {cta}
        </Link>
      )}
    </section>
  );
};
export default TechUsed;
