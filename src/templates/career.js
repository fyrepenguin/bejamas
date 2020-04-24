import React from "react";
import Layout from "./../layouts/index";
import Footer from "./../components/common/footer";
import { graphql } from "gatsby";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  return (
    <>
      <Layout>
        <div className="career">
          <h1>{frontmatter.title}</h1>
          <div
            className="career-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;
export default Template;
