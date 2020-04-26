import React from "react";
import Heading from "./heading";
import "../../styles/tech.scss";
import Img from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";

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
  return (
    <section className="tech section">
      <Heading
        description={desc}
        title="Beautifying the web"
        subheading="TECHNOLOGIES WE USE"
      />
      <div className="tool-types">
        <h3>Data Sources</h3>
        <div className="tool-images">
          <Img fluid={data.contentful.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.storyblok.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.sanity.fluid} style={{ maxWidth: "110px" }} />
          <Img fluid={data.forestry.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.dato.fluid} style={{ maxWidth: "120px" }} />
        </div>
      </div>
      <div className="tool-types">
        <h3>Build</h3>
        <div className="tool-images">
          <Img fluid={data.gatsby.fluid} style={{ maxWidth: "160px" }} />
          <Img fluid={data.next.fluid} style={{ maxWidth: "120px" }} />
          <Img fluid={data.hugo.fluid} style={{ maxWidth: "150px" }} />
          <Img fluid={data.react.fluid} style={{ maxWidth: "60px" }} />
          <Img fluid={data.node.fluid} style={{ maxWidth: "120px" }} />
        </div>
      </div>
      <div className="tool-types">
        <h3>Deploy & CDN</h3>
        <div className="tool-images">
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
