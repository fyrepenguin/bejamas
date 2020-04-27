import React from "react";
import Heading from "./../common/heading";
import Member from "./member";
import membersList from "../../content/team/members.json";
import { useStaticQuery, graphql } from "gatsby";
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
  const { edges } = data.allContentfulAsset;
  return (
    <section className="team section">
      <Heading
        subheading="We are"
        title="Bejamas Team"
        description="Working from all around the world to build the Web of tomorrow."
      />

      <div className="team-members">
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
