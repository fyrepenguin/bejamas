import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Heading from "../common/heading";

const Mission = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: contentfulAsset(title: { eq: "our-mission" }) {
        ...ImageContent
      }
      arek: contentfulAsset(title: { eq: "04.arek-gorecki" }) {
        ...ImageContent
      }
      quotes: contentfulAsset(title: { eq: "quotes" }) {
        ...ImageContent
      }
    }
  `);
  return (
    <section className="section mission">
      <Heading
        title="Help build the web of tomorrow"
        subheading="Our mission"
      />
      <main>
        <div className="mission-content">
          <p>
            Bejamas is home to independent souls and visionary thinkers. A
            lion’s share of today’s web is tedious and vulnerable. We believe it
            needs a fresh approach and that’s what we offer. It requires a
            creative environment to make creative people thrive. We want our
            jobs our way - being free, living our dreams, and just being
            ourselves.
          </p>
          <blockquote>
            <span></span>
            <p>
              We believe that work is something that needs to be done, not a
              place where people need to go. Bejamas gives me the freedom to
              decide when and where I do the best work I can, so it's even more
              impactful.
            </p>
            <div className="cite">
              <div className="img">
                <Img
                  fluid={data.arek.fluid}
                  style={{ width: "45px", height: "45px" }}
                />
              </div>
              <p>Arek Gorecki, Front-end Lead</p>
            </div>
          </blockquote>
        </div>
        <div className="mission-img">
          <Img className="mission-hero" fluid={data.hero.fluid} />
        </div>
      </main>
    </section>
  );
};

export default Mission;
