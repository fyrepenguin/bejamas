import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import { css } from "linaria";

import Layout from "./../layouts";
import Header from "./../components/common/header";
import Team from "../components/about/team";
import TechUsed from "../components/common/tech";
import Nomads from "../components/about/nomads";
import Values from "./../components/about/values";

/**
 * TODO: Make it responsive
 */

const About = () => {
  const data = useStaticQuery(graphql`
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
            bottom: 0,
            right: "50%",
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
            bottom: "-6%",
            right: "14%",
          }}
        />
      </>
    ),
    values = [
      {
        style: { width: "229px", height: "200px" },
        heading: "Transparency and Truthfulness",
        description:
          "We communicate with each other honestly, even if the truth violates one's ego. We believe that in the long term only through good and honest communication with each other we can generate added value for our clients.",
      },
      {
        style: { width: "204px", height: "200px" },
        heading: "Openness of mind",
        description:
          "In our case transparency means that everyone's opinion is open for discussion by anyone on the team. That is why it is so important for us to keep our mind open and treat every feedback with humility, a chance to look at things from another perspective, and as an opportunity to improve our skills.",
      },
      {
        style: { width: "215px", height: "200px" },
        heading: "Commitment and Responsibility",
        description:
          " Remote work gives great possibilities, but comes with great responsibility. At Bejamas, each team member is responsible for a certain part of a project and it’s on them to deliver the best solution for it. For us it’s crucial to keep things this way and run projects as a well-oiled machine.",
      },
      {
        style: { width: "206px", height: "200px" },
        heading: "Empathy and Unselfishness",
        description:
          "Those are two very important factors at Bejamas. We believe that every person deserves valuable relationships with other people and a pleasant work environment. We try to help each other and give as much as we take ourselves.",
      },
    ];
  const aboutUs = css`
    padding-top: 6.2rem;
    text-align: center;
    background-color: var(--color-bg);
    header {
      max-width: 43.4rem;
      margin: 0 auto;

      p {
        margin-top: 2.325rem;
        font-size: 1.25rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
      }
    }
  `;
  const footerCta = css`
    display: grid;
    align-items: center;
    margin: 0 auto 3.1rem;
    row-gap: 3.1rem;
    padding-left: 6.5875rem;
    grid-template-columns: auto 513px;
    column-gap: 9.3rem;
    p {
      font-size: 1.25rem;
      line-height: 1.8;
    }
  `;
  const FooterCTA = (
    <section className={footerCta}>
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
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Layout page={"about-page"} footerCta={FooterCTA}>
        <Header
          subheading={subheading}
          title={title}
          desc={desc}
          cta={cta}
          hero={data.hero.fluid}
          shapes={shapes}
        ></Header>
        <section className={`${aboutUs} section`}>
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
        <Values values={values} />
        <TechUsed cta={`Consult your project`} />
        <Nomads />
      </Layout>
    </>
  );
};
export default About;
