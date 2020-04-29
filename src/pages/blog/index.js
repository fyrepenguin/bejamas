import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../../layouts/index";
import Footer from "./../../components/common/footer";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <Layout>Blog</Layout>
      <Footer />
    </>
  );
};

export default BlogPage;
