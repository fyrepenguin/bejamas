import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../layouts/index";
import FooterCTA from "../../components/common/footerCTA";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import Products from "../../components/home/products";
import Workflow from "./../../components/common/workflow";
import Testimonials from "./../../components/common/testimonials";
import Faq from "../../components/services/faq";

import "../../styles/service.scss";
import "../../styles/services.scss";
import { paolo, william, yan } from "./../../components/images";
import { Helmet } from "react-helmet";

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: contentfulAsset(title: { eq: "hero-services" }) {
        ...ImageContent
      }
      i24: contentfulAsset(title: { eq: "24" }) {
        ...ImageContent
      }
    }
  `);
  const shapes = (
    <Img
      fluid={data.i24.fluid}
      className="i24"
      style={{
        position: "absolute",
        width: "150px",
        height: "161px",
        display: "inline-block",
      }}
    />
  );
  const testimonials = [
    {
      name: "William Rudenmalm",
      img: `${william}`,
      desc:
        "Bejamas is highly proactive; they sought feedback early on and have adapted their workflow to our needs.",
      position: "CTO, Klira",
    },
    {
      name: "Yan Schuppli",
      img: `${yan}`,
      desc:
        "The successful switch to JAMstack has increased website and data security while also improving site performance and speed.",
      position: "Founder, Codevelop Technologies GmbH",
    },
    {
      name: "Paolo Stolfo",
      img: `${paolo}`,
      desc:
        "Bejamas’ responsiveness and ability to turn constructive feedback into implementable, on-time deliverables are hallmarks of their work. Their can-do attitude made them a valuable partner.",
      position: "Art Director, KREAM",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
      </Helmet>
      <Layout page={"services-page"}>
        <Header
          subheading="services"
          title="Raise your page loading speed up to 10 times with static site generators"
          desc="Website performance is what makes or breaks businesses nowadays. We can help you build a modern website, or PWA, that will bring you customers and and stay on top of your competition."
          cta="Let's talk"
          hero={data.hero.fluid}
          shapes={shapes}
        />
        <Products
          subheading="what we do"
          pageName="services"
          jamDesc="Get your website an unfair advantage in SERP rankings."
          pwaDesc="Build a fast and scalable web app with all the native app's features."
        />
        <Workflow />
        <Testimonials testimonials={testimonials} />
        <Faq />
      </Layout>
      <Footer>
        <FooterCTA />
      </Footer>
    </>
  );
};
export default Services;
