import React from "react";
import { css } from "linaria";

const Heading = ({ subheading, title, description, cta }) => {
  const heading = css`
    max-width: 43.4rem;
    margin: 0 auto;
    text-align: center;
  `;
  const subHeading = css`
    font-size: 0.875rem;
    margin-bottom: 2.325rem;
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    font-weight: 700;
    height: 21px;
    color: var(--color-text-secondary);
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
      {subheading ? <p className={subHeading}>{subheading}</p> : ""}

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
