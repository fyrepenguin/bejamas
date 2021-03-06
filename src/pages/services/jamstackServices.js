import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { dmitri, eppo, lotan } from "./../../components/images";

import Layout from "./../../layouts/index";
import JAMworkflow from "./../../components/services/JAMworkflow";

import FooterCTA from "./../../components/common/footerCTA";
import Header from "../../components/common/header";
import JamIntro from "./../../components/services/jamIntro";
import Benefits from "./../../components/services/benefits";
import ServicesFeaturedPost from "./../../components/services/servicesFeaturedPost";
import TechUsed from "./../../components/common/tech";
import Testimonials from "./../../components/common/testimonials";
import Heading from "../../components/common/heading";
import "../../styles/jamstack.scss";
const JAM = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "hero-jamstack" }) {
        ...ImageContent
      }
    }
  `);

  const testimonials = [
    {
      img: `${lotan}`,
      desc:
        "Our website previously was static, and we wanted enhancements to the presentation layer. Thankfully, Bejamas knows how to build a good website.",
      name: "Benjamin Lotan,",
      position: "Senior Marketing Manager at Newfront Insurance",
    },
    {
      img: `${eppo}`,
      desc:
        "Having worked intensively with Bejamas on multiple projects, our partnership has been a professional and productive experience with impressive results to date. The team is responsive, full of ideas and delivers on their commitments. I can highly recommend Bejamas as a serious partner in modern web development projects involving JAMstack and React.",
      name: "Eppo Heemstra,",
      position: "Marketing Operations Manager at Mambu",
    },
    {
      img: `${dmitri}`,
      desc:
        "Bejamas stood out as experts on the JAMstack products that are available and recommended Storyblok CMS which was not on our radar previously. That kind of guidance, approachability and subject matter expertise is what we were looking for. I am very happy with our decision.",
      name: "Dmitry Terner,",
      position: "Website Manager at Avenues",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JAMstack Websites</title>
      </Helmet>
      <Layout page={"jamstack-service-page"} footerCta={<FooterCTA />}>
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
        <TechUsed light />
        <JAMworkflow />
        <Testimonials testimonials={testimonials} />
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
    </>
  );
};
export default JAM;
