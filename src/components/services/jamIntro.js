import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "../../styles/jamstack.scss";

const JamIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "What is JAM" }) {
        ...ImageContent
      }
    }
  `);
  return (
    <section className="jam-intro section">
      <div className="jam-intro-content">
        <div>
          <h2>What is JAMstack</h2>
          <p>
            JAMstack means an alternative approach for building websites and web
            applications. The JAM here stands for JavaScript, APIs, and
            Markdown. For your progressive web application, it means lower
            costs, scalability, and incredibly good performance.
          </p>
          <p>
            Building our apps we use battle-tested technologies like GatsbyJS,
            NextJS, Contentful, AWS, Netlify, and others.
          </p>
        </div>
        <div className="jamintro-img">
          <Img
            fluid={data.contentfulAsset.fluid}
            style={{ maxWidth: "500px", margin: "0 0 0 auto" }}
          />
        </div>
      </div>
      <footer>
        <Link className="cta" to="/blog">
          Read more
        </Link>
      </footer>
    </section>
  );
};

export default JamIntro;
