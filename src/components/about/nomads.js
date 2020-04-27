import React from "react";
import Heading from "./../common/heading";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Nomads = () => {
  const data = useStaticQuery(graphql`
    query {
      city: contentfulAsset(title: { eq: "malaga-city" }) {
        ...ValueImg
      }
      landscape: contentfulAsset(title: { eq: "malaga-landscape" }) {
        ...ValueImg
      }
      pool: contentfulAsset(title: { eq: "malaga-pool" }) {
        ...ValueImg
      }
      tree: contentfulAsset(title: { eq: "malaga-pink-tree" }) {
        ...ValueImg
      }
      breakfast: contentfulAsset(title: { eq: "malaga-breakfast" }) {
        ...ValueImg
      }
    }
  `);
  return (
    <section className="section nomads">
      <div className="nomads-text">
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
      <div className="retreat-images">
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
