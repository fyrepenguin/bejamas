import React from "react";
import Layout from "./../../layouts/index";
import Footer from "./../../components/common/footer";
import FooterCTA from "./../../components/common/footerCTA";
import Header from "../../components/common/header";
import JamIntro from "./../../components/services/jamIntro";
import Benefits from "./../../components/services/benefits";
import ServicesFeaturedPost from "./../../components/services/servicesFeaturedPost";
import TechUsed from "./../../components/common/tech";
import Workflow from "./../../components/common/workflow";
import Testimonials from "./../../components/common/testimonials";
import Heading from "../../components/common/heading";
import { useStaticQuery, graphql } from "gatsby";
const JAM = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "hero" }) {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  return (
    <>
      <Layout>
        <Header
          subheading="jamstack"
          title="Get more customers with SEO-friendly marketing websites"
          desc="There’s a thing Google and your customers have in common. They both like fast sites. Try JAMstack approach to get ranked higher and gain new visitors. Then, let your website turn them into customers."
          cta="View more"
          hero={data.contentfulAsset.fluid}
        />
        <JamIntro />
        <Benefits />
        <ServicesFeaturedPost />
        <TechUsed />
        <Workflow />
        <Testimonials />
        blog posts
        <section className="section others">
          <Heading
            subheading="Looking for other services?"
            title="Progressive Web Apps"
            description="Build a fast and scalable web JAMstack app
with all the native app’s features"
            cta="Read more"
          />
        </section>
      </Layout>
      <Footer>
        <FooterCTA />
      </Footer>
    </>
  );
};
export default JAM;
