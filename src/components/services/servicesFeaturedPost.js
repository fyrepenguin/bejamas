import React from "react";
import Heading from "./../common/heading";
import Img from "gatsby-image";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { Link } from "gatsby";
const ServicesFeaturedPost = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "JAM case study" }) {
        ...ImageContent
      }
    }
  `);
  return (
    <section className="section featured-post-services">
      <div className="featured-content">
        <div className="featured-header">
          <Heading
            title={
              "GatsbyJS and Sanity headless CMS site for Just Technologies"
            }
            subheading={"Featured JAMstack Marketing Website"}
          />
          <Img fluid={data.contentfulAsset.fluid} />
        </div>
        <div className="featured-description">
          <p>
            Just is a fintech company that creates cloud-native software
            products for corporate clients to help them manage their FX
            operations, same as risk and liquidity.
          </p>
          <p>
            What they needed was a sharp and fast informative website for their
            prospects, job candidates, and investors, that is easy to edit and
            works in multiple languages.
          </p>
          <p>
            What we did was building a fast and easy-editable website with
            GatsbyJS, implementing Sanity headless CMS that enables custom
            configuration, and deploying the content with Netlify.
          </p>
          <Link to="/blog" className="cta">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeaturedPost;
