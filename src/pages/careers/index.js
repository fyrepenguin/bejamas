import React from "react";
import Layout from "./../../layouts";
import Footer from "./../../components/common/footer";
import { graphql, Link } from "gatsby";
import Header from "./../../components/common/header";
import Values from "./../../components/about/values";
import { Helmet } from "react-helmet";

const Careers = ({ data }) => {
  const { edges } = data.markdown;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careers</title>
      </Helmet>
      <Layout>
        <Header
          title="Work and live
your own way"
          subheading="Careers"
          cta="View oppurtunies"
          desc="Learn modern web building, join the remote team, and work from… wherever you want."
          hero={data.hero.fluid}
        />
        Mission
        <Values />
        WorkBenefits
        <section className="open-roles">
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
        </section>
      </Layout>
      <Footer />
    </>
  );
};
export const query = graphql`
  query CareerQuery {
    markdown: allMarkdownRemark(
      filter: { frontmatter: { content: { eq: "career" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
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
    hero: contentfulAsset(title: { eq: "become-one-of-us" }) {
      ...ImageContent
    }
  }
`;

export default Careers;
