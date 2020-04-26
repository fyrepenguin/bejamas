import React from "react";
import Heading from "../common/heading";
import { dmitri, quote } from "../images";
import "./../../styles/caseStudy.scss";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const CaseStudy = () => {
  const data = useStaticQuery(graphql`
    query {
      avenues: contentfulAsset(title: { eq: "avenues-case-study" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      quotes: contentfulAsset(title: { eq: "quotes" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      dmitry: contentfulAsset(title: { eq: "dmitry-terner" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  return (
    <section className="case-study section">
      <Heading
        subheading="featured jamstack case study"
        title="JAMstack in Services of Better education: Avenues, the World School."
      />
      <div className="case-study-content">
        <div className="case-study-hero">
          <div className="img-container">
            <div className="img-wrapper">
              <Img fluid={data.avenues.fluid} />
            </div>
          </div>
        </div>
        <div>
          <blockquote className="case-study-quote">
            <div className="quote-img">
              <Img fluid={data.quotes.fluid} />
            </div>
            For us, the benefits (of JAMstack) are straight forward. Cost is an
            obvious win as well as the ease of implementing enhancements and
            inherent security improvements.
            <div className="user">
              <div className="user-img">
                <Img fluid={data.dmitry.fluid} />
              </div>
              <div className="user-info">
                <div className="user-name">Dmitry Terner</div>
                <div className="user-position">Website Manager at Avenues</div>
              </div>
            </div>
          </blockquote>
          <div className="stats">
            <div className="stat-container">
              <h3>781</h3>
              <p>static pages</p>
            </div>
            <div className="stat-container">
              <h3>80k</h3>
              <p>traffic, 0 downtime</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <a href="/" className="cta">
            Read full case study
          </a>
          <div className="divider"></div>
          <a href="/" className="read-more">
            See 7 more case studies »
          </a>
        </div>
      </footer>
    </section>
  );
};

export default CaseStudy;
