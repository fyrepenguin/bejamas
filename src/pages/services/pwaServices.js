import React from "react";
import Layout from "../../layouts";
import Footer from "./../../components/common/footer";
import FooterCTA from "./../../components/common/footerCTA";
import Header from "./../../components/common/header";
import JamIntro from "./../../components/services/jamIntro";
import Benefits from "../../components/services/benefits";
import Testimonials from "../../components/common/testimonials";
import TechUsed from "./../../components/common/tech";
import Heading from "./../../components/common/heading";
import { useStaticQuery, graphql } from "gatsby";
import { dmitri, eppo, lotan } from "./../../components/images";
import "../../styles/pwa.scss";
import JAMworkflow from "./../../components/services/JAMworkflow";
import { Helmet } from "react-helmet";

const PWA = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: contentfulAsset(title: { eq: "hero-pwa" }) {
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
        <title>PWA Websites</title>
      </Helmet>
      <Layout page={"pwa-page"}>
        <Header
          subheading="Progressive Web App"
          title="A fast app-like experience in a browser"
          desc="Developing your business with Progressive Web App saves you money and time you’d spend on building native apps for multiple platforms. Going JAMstack way will give you low hosting costs and incredibly good performance, so you won’t lose any users."
          cta="View more"
          hero={data.hero.fluid}
        />
        <JamIntro />
        <Benefits />
        <Testimonials testimonials={testimonials} />
        <TechUsed />
        <JAMworkflow />
        <section className="section others">
          <Heading
            subheading="Looking for other services?"
            title="JAMstack Marketing Websites"
            description="Raise your website’s visibility and get more customers for your business with SEO-friendly websites."
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
export default PWA;
