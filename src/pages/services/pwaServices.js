import React from "react";
import Layout from "../../layouts";
import Footer from "./../../components/common/footer";
import FooterCTA from "./../../components/common/footerCTA";
import Header from "./../../components/common/header";
import { pwaHero } from "./../../components/images";
import JamIntro from "./../../components/services/jamIntro";
import Benefits from "../../components/services/benefits";
import Testimonials from "../../components/common/testimonials";
import TechUsed from "./../../components/common/tech";
import Workflow from "../../components/common/workflow";
import Heading from "./../../components/common/heading";

const PWA = () => {
  return (
    <>
      <Layout>
        <Header
          subheading="Progressive Web App"
          title="A fast app-like experience in a browser"
          desc="Developing your business with Progressive Web App saves you money and time you’d spend on building native apps for multiple platforms. Going JAMstack way will give you low hosting costs and incredibly good performance, so you won’t lose any users."
          cta="View more"
          hero={pwaHero}
        />
        <JamIntro />
        <Benefits />
        <Testimonials />
        <TechUsed />
        <Workflow />
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
