import React, { Component } from "react";
import Layout from "../../layouts/index";
import FooterCTA from "../../components/common/footerCTA";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import { servicesHero } from "./../../components/images";
export default class Services extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header
            subheading="services"
            title="Raise your page loading speed up to 10 times with static site generators"
            desc="Website performance is what makes or breaks businesses nowadays. We can help you build a modern website, or PWA, that will bring you customers and and stay on top of your competition."
            cta="Let's talk"
            hero={servicesHero}
          />
        </Layout>
        <Footer>
          <FooterCTA />
        </Footer>
      </>
    );
  }
}
