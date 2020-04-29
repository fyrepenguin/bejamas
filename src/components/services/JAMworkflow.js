import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Heading from "./../common/heading";
import "../../styles/service.scss";

const JAMworkflow = () => {
  const data = useStaticQuery(graphql`
    query {
      icon1: contentfulAsset(title: { eq: "service icon 01" }) {
        ...ImageContent
      }
      icon2: contentfulAsset(title: { eq: "service icon 02" }) {
        ...ImageContent
      }
      icon3: contentfulAsset(title: { eq: "service icon 03" }) {
        ...ImageContent
      }

      icon5: contentfulAsset(title: { eq: "service icon 05" }) {
        ...ImageContent
      }
    }
  `);
  return (
    <section className="section workflow">
      <Heading subheading="workflow" title="Get your project a pro service" />
      <div className="workflow-items">
        <div className="workflow-item">
          <Img
            fluid={data.icon1.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Clear project goals</h3>
          <p>
            We’ll discuss what your business needs most to thrive, and focus on
            it during the whole project.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon2.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Perfect toolset</h3>
          <p>
            Thanks to our expertise we’ll offer you a couple of technologies,
            that will suit your interests best.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon3.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Transparent work environment</h3>
          <p>
            Slack workspace, Jira board, Github repository, you’ll get access to
            all of these to always be in the know how your project’s going on.
          </p>
        </div>

        <div className="workflow-item">
          <Img
            fluid={data.icon5.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Afterproject relationship</h3>
          <p>
            Our team will be happy to stay with you even after the project ends,
            handling your feature requests and maintenance, so you can grow your
            business in peace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JAMworkflow;
