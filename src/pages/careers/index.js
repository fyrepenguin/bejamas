import React from "react";
import Layout from "./../../layouts";
import { graphql } from "gatsby";
import Header from "./../../components/common/header";
import Values from "./../../components/about/values";
import { Helmet } from "react-helmet";
import WorkBenefits from "./../../components/careers/workBenefits";
import Mission from "../../components/careers/mission";
import Opportunities from "../../components/careers/opportunities";

const Careers = ({ data }) => {
  const { edges } = data.markdown,
    values = [
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careers</title>
      </Helmet>
      <Layout>
        <Header
          title="Work and live your own way"
          subheading="Careers"
          cta="View oppurtunies"
          desc="Learn modern web building, join the remote team, and work from… wherever you want."
          hero={data.hero.fluid}
        />
        <Mission />
        <Values values={values} noFooter />
        <WorkBenefits />
        <Opportunities edges={edges} />
      </Layout>
    </>
  );
};
export const query = graphql`
  query CareerQuery {
    markdown: allMdx(
      filter: { frontmatter: { content: { eq: "career" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          body
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
