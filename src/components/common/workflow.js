import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";

import Heading from "./heading";
import breakpoints from "../utils/breakpoints";

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
  const workflowItem = css`
    position: relative;
    color: var(--color-text-secondary);
    &::before {
      position: absolute;
      font-size:10rem;
      top: 1rem;
      content: counter(benefits);
      color: #e3eef4;
      right: 5%;
      width: 50%;
      text-align: center;
      line-height: 1;
      font-weight: 700;
      counter-increment: benefits;
      pointer-events: none;
      z-index: 0;
      background: linear-gradient(
        180deg,
        var(--color-text-gradient-from) 0,
        var(--color-text-gradient-to) 85%
      );
      -webkit-text-fill-color: transparent;
      background-clip: text;
      
      @media(min-width:${breakpoints.md}) {
        font-size: 18rem;
        top:-5rem;
      }
    }
    .gatsby-image-wrapper {
      display: inline-block;
    }
    h3 {
      margin-top: 1.55rem;
      color: var(--color-text-primary);
      z-index: 2;
      position: relative;
    }
    
    }`;
  const workflowItems = css`
    margin: 1.55rem auto 0;
    margin-top: 4.65rem;
    display: grid;
    column-gap: calc(6vw + 3.1rem);
    row-gap: 4.65rem;
    max-width: 58.9rem;
    grid-template-columns: repeat(
      auto-fill,
      [col-start] minmax(16rem, 4fr) [col-end]
    );
    counter-reset: benefits;
    align-items: flex-start;
    @media (min-width: ${breakpoints.sm}) {
      margin-top: 3.1rem;
    }

    @media (min-width: ${breakpoints.md}) {
      margin-top: 4.65rem;
      & > .workflow-item:nth-child(2) {
        margin-top: 23.25rem;
      }
      & > .workflow-item:nth-child(odd):not(:first-child) {
        margin-top: -9.3rem;
      }
      & > .workflow-item:nth-child(2n):not(:nth-child(2)) {
        margin-top: 12.4rem;
      }
    }
  `;
  return (
    <section className="section workflow">
      <Heading subheading="workflow" title="Get your project a pro service" />
      <div className={workflowItems}>
        <div className={`${workflowItem} workflow-item`}>
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
        <div className={`${workflowItem} workflow-item`}>
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
        <div className={`${workflowItem} workflow-item`}>
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
        <div className={`${workflowItem} workflow-item`}>
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
        <div className={`${workflowItem} workflow-item`}>
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
