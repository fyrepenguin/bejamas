import React from "react";
import { Link } from "gatsby";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

import Heading from "./../common/heading";

const Opportunities = ({ edges }) => {
  const roles = css`
    display: grid;
    column-gap: 3.1rem;
    max-width: 72.075rem;
    row-gap: 4.6rem;
    align-items: flex-start;
    margin: 1.55rem auto 0;
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 3.1rem;
    }
    @media (min-width: ${breakpoints.md}) {
      margin-top: 4.65rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(auto-fill, minmax(calc(10vw + 8rem), 4fr));
    }
    a {
      border: 1px solid var(--color-border-light);
      padding: 3rem;
      color: currentColor;
      border-radius: 18px;
      transition: all 0.3s cubic-bezier(0, 0.89, 0.44, 1);
      backface-visibility: hidden;
      background-color: transparent;
      &:hover {
        box-shadow: 0 9px 60px 0 var(--color-bg-shadow);
        transform: translate3d(0, -4px, 0);
        .cta {
          outline: 0;
          &::before {
            transform: scale(1.05);
          }
          &::after {
            opacity: 1;
          }
        }
      }
    }
  `;
  const opContent = css`
    @media (min-width: ${breakpoints.lg}) {
      min-height: 6.975rem;
    }
    h3 {
      margin-bottom: 0.775rem;
    }
    p {
      margin-top: 0;
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
    .status {
      margin-top: 0;
      margin-bottom: 2.325rem;
      color: var(--color-cta);
    }
  `;
  return (
    <section id="opportunities" className="section open-roles">
      <Heading subheading="Open Roles" title="Career Opportunities" />
      <div className={roles}>
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Link key={frontmatter.path} to={`/careers/${frontmatter.path}`}>
              <div className={opContent}>
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
