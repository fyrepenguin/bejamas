import React from "react";
import { Link } from "gatsby";

import Heading from "./../common/heading";

const Opportunities = ({ edges }) => {
  return (
    <section className="section open-roles">
      <Heading subheading="Open Roles" title="Career Opportunities" />
      <div className="roles">
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Link key={frontmatter.path} to={`/careers/${frontmatter.path}`}>
              <div className="op-content">
                <h3>{frontmatter.title}</h3>
                <p>Remote</p> <div className="status">Ongoing</div>
                <span className="cta">View Job Offer</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Opportunities;
