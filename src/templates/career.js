import React from "react";
import Layout from "./../layouts/index";
import Footer from "./../components/common/footer";
import { graphql, Link } from "gatsby";
import WorkBenefits from "./../components/careers/workBenefits";
import Values from "./../components/about/values";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const values = [
    {
      style: { width: "229px", height: "200px" },
      heading: "Honesty",
      description:
        "We believe that working remotely calls for radical transparency and truthfulness - both to our clients and ourselves.",
    },
    {
      style: { width: "204px", height: "200px" },
      heading: "Open- mindedness",
      description:
        "Got any idea how something could be done better? Good. We love constructive feedback and improving our skills.",
    },
    {
      style: { width: "215px", height: "200px" },
      heading: "Responsibility",
      description:
        " We base our work culture on mutual trust. To make things work all of us need to be committed and feel responsible for our tasks.",
    },
    {
      style: { width: "206px", height: "200px" },
      heading: "Empathy",
      description:
        "We get that sometimes things don’t go the way we’d like them to. We talk and listen to each other to find the best solution.",
    },
  ];
  return (
    <>
      <Layout>
        <section className="career">
          <div
            className="career-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside>
            <h2>{frontmatter.title}</h2>
            <p>Deadline:ongoing</p>
            <p>Remote-first</p>
            <Link to="/" className="cta">
              Apply
            </Link>
          </aside>
        </section>
        <WorkBenefits />
        <Values values={values} />
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
