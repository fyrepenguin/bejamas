import React from "react";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

const Heading = ({ subheading, title, description, cta }) => {
  const heading = css`
    max-width: 43.4rem;
    margin: 0 auto;
    text-align: left;
    @media (min-width: ${breakpoints.md}) {
      text-align: center;
    }
  `;
  const subHeading = css`
    text-transform: uppercase;
    font-weight: 700;
    font-family: Poppins, sans-serif;
    height: 21px;
    color: var(--color-text-secondary);
    letter-spacing: 0.125rem;
    font-size: 0.625rem;
    margin-bottom: 1.55rem;
    @media (min-width: ${breakpoints.md}) {
      font-size: 0.875rem;
      margin-bottom: 2.325rem;
      letter-spacing: 0.1875rem;
    }
  `;
  const h2 = css`
    font-size: 2.07474rem;
  `;
  const desc = css`
    margin-top: 2.325rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    font-size: 1.25rem;
    white-space: pre-wrap;
  `;
  return (
    <header className={heading}>
      {subheading ? <h3 className={subHeading}>{subheading}</h3> : ""}

      <h2 className={h2}>{title}</h2>
      {description ? <p className={desc}>{description}</p> : ""}
      {cta ? (
        <a href="/" className="cta">
          {cta}
        </a>
      ) : (
        ""
      )}
    </header>
  );
};
export default Heading;
