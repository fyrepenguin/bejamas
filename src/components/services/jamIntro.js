import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const JamIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "What is JAM" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  return (
    <section className="jam-intro section">
      <div>
        <h2>What is JAMstack</h2>
        <p>
          JAMstack means an alternative approach for building websites and web
          applications. The JAM here stands for JavaScript, APIs, and Markdown.
          For your progressive web application, it means lower costs,
          scalability, and incredibly good performance.
        </p>
        <p>
          Building our apps we use battle-tested technologies like GatsbyJS,
          NextJS, Contentful, AWS, Netlify, and others.
        </p>
      </div>
      <div className="jamintro-img">
        <Img fluid={data.contentfulAsset.fluid} />
      </div>
      <Link className="cta" to="/blog">
        Read more
      </Link>
    </section>
  );
};

export default JamIntro;
