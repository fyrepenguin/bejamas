import React from "react";
import Layout from "./../layouts/index";
import Footer from "./../components/common/footer";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <Layout>Contact</Layout>
      <Footer />
    </>
  );
};
export default Contact;
