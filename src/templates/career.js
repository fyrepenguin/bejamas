import React from "react";
import Layout from "./../layouts/index";
import Footer from "./../components/common/footer";
import { graphql } from "gatsby";

const Template = ({ path }) => {
  /*  const { data } = props;
  const { markdownRemark } = data;
  const { frontmatter, html } = allMarkdownRemark;
  console.log(data.markdownRemark.frontmatter); */
  return (
    <>
      <Layout>
        <div className="career">
          {/*   <h1>{frontmatter.title}</h1>
          <div
            className="career-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
          {path}
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;
export default Template;
