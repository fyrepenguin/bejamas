import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";

import Heading from "./../common/heading";
import Member from "./member";
import membersList from "../../content/team/members.json";
import breakpoints from "../utils/breakpoints";

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { description: { eq: "member" } }
        sort: { order: ASC, fields: title }
      ) {
        edges {
          node {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `);
  const team = css`
    @media (min-width: ${breakpoints.md}) {
      border-radius: 16px;
    }
    @media (min-width: ${breakpoints.xxl}) {
      padding: 4.65rem 3.1rem;
    }
    background-color: var(--color-bg-secondary);
  `;
  const teamMembers = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(10vw + 4.5rem), 4fr));
    row-gap: 1.55rem;
    column-gap: 1.55rem;
    max-width: 68.2rem;
    align-items: flex-start;
    margin: 1.55rem auto 0;
    @media (min-width: ${breakpoints.sm}) {
      margin-top: 3.1rem;
    }
    @media (min-width: ${breakpoints.md}) {
      margin-top: 4.65rem;
    }
  `;
  const { edges } = data.allContentfulAsset;
  return (
    <section id="team" className={`${team} section secondaryBg`}>
      <Heading
        subheading="We are"
        title="Bejamas Team"
        description="Working from all around the world to build the Web of tomorrow."
      />

      <div className={teamMembers}>
        {edges.map((edge, i) => {
          const { title, fluid } = edge.node;
          return (
            <Member
              key={title}
              name={membersList[i].name}
              position={membersList[i].position}
              image={fluid}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Team;
