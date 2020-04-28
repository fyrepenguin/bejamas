import React from "react";
import Heading from "./heading";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Workflow = () => {
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
      icon4: contentfulAsset(title: { eq: "service icon 04" }) {
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
          <h3>Settling up for the project’s goals</h3>
          <p>
            You want your web product to hit the highest performance scores? Be
            as secure as it possibly can? Or you want to scale it to multiple
            languages in a blink of an eye? We got your back! We’ll get to know
            what’s most important for your success and have it in mind when
            choosing the best tech set.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon2.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Picking the right tools for the job</h3>
          <p>
            Once we understand your project wants and needs it’s time to swim
            through the sea of technologies and choose the best for your
            project. We’ll propose you a couple of options with their possible
            upsides and downsides. We leave the final decision to you, but we’ll
            always be close to help with advice.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon3.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Setting up a work environment</h3>
          <p>
            When you give us the thumbs up, we’ll set up the project management
            environment to keep you in the loop as we work on the project.
            You’ll get an access to our Slack workspace, Asana, Github
            repository, and all other tools used during the development stage.
            You also get to choose how often you’d like to receive project
            updates from us and in what form should they be in.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon4.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>Transparent project management</h3>
          <p>
            Transparency is our core value and it mirrors in our practice.
            Throughout the project you’ll be able to access the code repository
            we’re working on and see what we’ve put together in real time.
            You’ll also have access to our time tracking app for your project to
            see how much time each task consumed.
          </p>
        </div>
        <div className="workflow-item">
          <Img
            fluid={data.icon5.fluid}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>No need to say goodbye</h3>
          <p>
            Rarely we see our work ending with the deployment. In most cases, we
            stay with our clients for a long time after developing the product.
            We handle their additional feature requests and ongoing web
            architecture maintenance, so they could focus on growing their
            business.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
