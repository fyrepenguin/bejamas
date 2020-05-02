import React from "react";
import Layout from "./../layouts/index";
import Footer from "./../components/common/footer";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import WorkBenefits from "./../components/careers/workBenefits";
import Values from "./../components/about/values";
import "../styles/careers.scss";

const Template = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const values = [
    {
      style: { width: "192px", height: "168px" },
      heading: "Honesty",
      description:
        "We believe that working remotely calls for radical transparency and truthfulness - both to our clients and ourselves.",
    },
    {
      style: { width: "171px", height: "168px" },
      heading: "Open- mindedness",
      description:
        "Got any idea how something could be done better? Good. We love constructive feedback and improving our skills.",
    },
    {
      style: { width: "181px", height: "168px" },
      heading: "Responsibility",
      description:
        " We base our work culture on mutual trust. To make things work all of us need to be committed and feel responsible for our tasks.",
    },
    {
      style: { width: "173px", height: "168px" },
      heading: "Empathy",
      description:
        "We get that sometimes things don’t go the way we’d like them to. We talk and listen to each other to find the best solution.",
    },
  ];
  return (
    <>
      <Layout page="career-page">
        <section className="career section">
          <div className="career-content">
            <div className="role-desc">
              <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div className="apply-box">
              <h2>{frontmatter.title}</h2>
              <p>
                Deadline: ongoing
                <br />
                Remote-first
              </p>
              <Link to="/" className="cta">
                Apply
              </Link>
            </div>
          </div>
        </section>
        <WorkBenefits />
        <Values values={values} noFooter />
        <section className="join section">
          <h2>Ready to join</h2>
          <Link to="/" className="cta">
            Apply
          </Link>
        </section>
      </Layout>
      <Footer />
    </>
  );
};
export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        path
      }
    }
  }
`;
export default Template;
