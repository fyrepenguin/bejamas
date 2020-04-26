import React from "react";
import Layout from "../../layouts/index";
import FooterCTA from "../../components/common/footerCTA";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import Products from "../../components/home/products";
import "../../styles/services.scss";
import Workflow from "./../../components/common/workflow";
import Testimonials from "./../../components/common/testimonials";
import Faq from "../../components/services/faq";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const data = useStaticQuery(graphql`
    fragment ImageContent on ContentfulAsset {
      title
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    query {
      contentfulAsset(title: { eq: "hero-services" }) {
        ...ImageContent
      }
    }
  `);
  return (
    <>
      <Layout>
        <Header
          subheading="services"
          title="Raise your page loading speed up to 10 times with static site generators"
          desc="Website performance is what makes or breaks businesses nowadays. We can help you build a modern website, or PWA, that will bring you customers and and stay on top of your competition."
          cta="Let's talk"
          hero={data.contentfulAsset.fluid}
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
