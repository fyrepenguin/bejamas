import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";

import Heading from "../common/heading";

const WorldMap = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "map-filled" }) {
        ...ImageContent
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
  const mapImg = css`
    margin: 4.65rem auto 0;
    position: relative;
    overflow: hidden;
    max-width: 64rem;
  `;
  return (
    <section className={`section secondaryBg`}>
      <Heading
        subheading="Bettering the web for clients from"
        title="14 countries, 5 continents"
        description={desc}
      />
      <div className={mapImg}>
        <Img fluid={data.contentfulAsset.fluid} />
      </div>
    </section>
  );
};
export default WorldMap;
