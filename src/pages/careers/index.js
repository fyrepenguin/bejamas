import React from "react";
import Layout from "./../../layouts";
import Footer from "./../../components/common/footer";
import { graphql, Link } from "gatsby";

const Careers = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <Layout>
        Careers
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={`/careers/${frontmatter.path}`}>
                {frontmatter.title}
              </Link>
            </div>
          );
        })}
      </Layout>
      <Footer />
    </>
  );
};
export const query = graphql`
  query CareerQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          id
        }
      }
    }
  }
`;

export default Careers;
