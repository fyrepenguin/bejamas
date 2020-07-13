import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../../layouts/index";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <Layout>Blog</Layout>
    </>
  );
};

export default BlogPage;
