import React, { Component } from "react";
import Layout from "./../layouts/index";
import FooterCTA from "./../components/common/footerCTA";
import Footer from "./../components/common/footer";
export default class Services extends Component {
  render() {
    return (
      <>
        <Layout>Sevices</Layout>
        <Footer>
          <FooterCTA />
        </Footer>
      </>
    );
  }
}
