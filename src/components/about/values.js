import React from "react";
import Heading from "./../common/heading";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../../styles/values.scss";

const Values = ({ values }) => {
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
  return (
    <section className="values section">
      <Heading
        subheading="Things we value"
        title="Believability at the core"
        description="As a remote team of independent thinkers, we share the same values that make things work like a charm."
      />
      <div className="things">
        {values.map((value, i) => {
          return (
            <div className="value" key={i}>
              <Img
                className="value-img"
                fluid={images[i]}
                style={value.style}
              />
              <h3>{value.heading}</h3>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
      <footer>
        <div>
          <p>
            For us customers really do come first because we help them not only
            grow their businesses but also educate them to understand the tech
            behind it.
          </p>
          <Link to="/careers" className="cta">
            Work with us!
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Values;
