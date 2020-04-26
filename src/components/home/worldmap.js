import React from "react";
import Heading from "../common/heading";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const WorldMap = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "map-filled" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  const desc = (
    <>
      We’re an international-ready team.
      <br />
      Worked in sync with customers in 7 different time-zones.
    </>
  );
  return (
    <section className="section map">
      <Heading
        subheading="Bettering the web for clients from"
        title="14 countries, 5 continents"
        description={desc}
      />
      <div className="map-img">
        <Img fluid={data.contentfulAsset.fluid} />
      </div>
    </section>
  );
};
export default WorldMap;
