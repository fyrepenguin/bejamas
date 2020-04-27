import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "./../layouts";
import Header from "./../components/common/header";
import Footer from "../components/common/footer";
import Team from "../components/about/team";
import TechUsed from "../components/common/tech";
import Nomads from "../components/about/nomads";
import Values from "./../components/about/values";

import "../styles/about.scss";

/**
 * TODO: Make it responsive
 */

const About = () => {
  const data = useStaticQuery(graphql`
    fragment ImageContent on ContentfulAsset {
      title
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    query {
      hero: contentfulAsset(title: { eq: "hero-about" }) {
        ...ImageContent
      }
      i1: contentfulAsset(title: { eq: "1" }) {
        ...ImageContent
      }
      i4: contentfulAsset(title: { eq: "4" }) {
        ...ImageContent
      }
      footer: contentfulAsset(title: { eq: "become-one-of-us" }) {
        ...ImageContent
      }
    }
  `);

  const subheading = `About Us`,
    title = `We are Bejamas`,
    desc = `Not your everyday web dev shop but a partner that will help your business grow with modern tools more than you thought it's possible.`,
    cta = `Meet the Team`,
    shapes = (
      <>
        <Img
          className="i4"
          fluid={data.i1.fluid}
          style={{
            position: "absolute",
            display: "inline-block",
            width: "160px",
            height: "160px",
          }}
        />
        <Img
          className="i1"
          fluid={data.i4.fluid}
          style={{
            position: "absolute",
            display: "inline-block",
            width: "160px",
            height: "160px",
          }}
        />
      </>
    );
  return (
    <>
      <Layout page={"about-page"}>
        <Header
          subheading={subheading}
          title={title}
          desc={desc}
          cta={cta}
          hero={data.hero.fluid}
          shapes={shapes}
        ></Header>
        <section className="about-us section">
          <header>
            <h2>Client-focused, forward-thinking people</h2>
            <p>
              We are a team of passionate web developers who share the vision of
              websites, that are high-performing, safe, and easy to maintain. We
              make this vision happen by building serverless Progressive Web
              Apps and websites on the JAMstack architecture.
            </p>
          </header>
        </section>
        <Team />
        <Values />
        <TechUsed cta={`Consult your project`} />
        <Nomads />
      </Layout>
      <Footer>
        <section className="footer-cta">
          <div>
            <h2>Become one of us</h2>
            <p>
              Do you want to join our team and work remotely from anywhere you'd
              like? We can't wait to hear from you!
            </p>
            <Link to="/careers" className="cta">
              Check Careers
            </Link>
          </div>
          <Img className="footer-cta-img" fluid={data.footer.fluid} />
        </section>
      </Footer>
    </>
  );
};
export default About;
