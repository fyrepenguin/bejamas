import React from "react";
import Heading from "../common/heading";
import "../../styles/JAMuses.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const JamUses = () => {
  const data = useStaticQuery(graphql`
    fragment Icon on ContentfulAsset {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    query {
      swift: contentfulAsset(title: { eq: "swift-icon" }) {
        ...Icon
      }
      safe: contentfulAsset(title: { eq: "safe-icon" }) {
        ...Icon
      }
      stable: contentfulAsset(title: { eq: "stable-icon" }) {
        ...Icon
      }
      scalable: contentfulAsset(title: { eq: "scalable-icon" }) {
        ...Icon
      }
    }
  `);
  return (
    <section className="jamstack-benefits section">
      <Heading
        subheading="Site with benefits"
        title="How JAMstack supports your business"
        description="We use the power of JAMstack and server-side rendering to ship value to our customers."
      />
      <div className="benefits">
        <div className="benefit">
          <div className="benefit-img">
            <Img fluid={data.swift.fluid} style={{ width: "152px" }} />
          </div>
          <h3>Swift</h3>
          <p>
            We don’t use databases, so there’s no time-consuming multiple
            queries. Static sites are even up to 10x faster, with benefits for
            the UX and SERP rankings.
          </p>
        </div>
        <div className="benefit">
          <div className="benefit-img">
            <Img fluid={data.safe.fluid} style={{ width: "179px" }} />
          </div>
          <h3>Safe</h3>
          <p>
            73.2% of the most popular WordPress installations are opened to
            vulnerabilities. Statically rendered websites with no plugins are a
            fortress and let you save money on security.
          </p>
        </div>
        <div className="benefit">
          <div className="benefit-img">
            <Img fluid={data.stable.fluid} style={{ width: "209px" }} />
          </div>
          <h3>Stable</h3>
          <p>
            Traffic bigger than usual? Not an issue with the JAMstack sites -
            you host your websites’ static files in a multi-cloud environment on
            a CDN with no traffic limitations.
          </p>
        </div>
        <div className="benefit">
          <div className="benefit-img">
            <Img fluid={data.scalable.fluid} style={{ width: "195px" }} />
          </div>
          <h3>Scalable</h3>
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
