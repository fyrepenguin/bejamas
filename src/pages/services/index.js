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

import "../../styles/services.scss";

const Services = () => {
  const data = useStaticQuery(graphql`
    fragment ImageContent on ContentfulAsset {
      title
      fluid {
        ...GatsbyContentfulFluid
      }
    }
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
  return (
    <>
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
        <Testimonials />
        <Faq />
      </Layout>
      <Footer>
        <FooterCTA />
      </Footer>
    </>
  );
};
export default Services;
