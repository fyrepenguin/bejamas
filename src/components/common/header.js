import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

const Header = ({ subheading, title, cta, desc, hero, extra, shapes }) => {
  const heroCss = css`
    position: relative;
    padding-top: 1.55rem;
    @media (min-width: ${breakpoints.md}) {
      display: grid;
      padding-bottom: 2rem;
      align-items: center;
      max-height: 44rem;
      grid-template-columns: 52% auto;
      margin-right: -4vw;
      padding-top: 0;
      height: calc(100vh - 100px);
      min-height: 40rem;
    }
  `;
  const heroContent = css`
    @media (min-width: ${breakpoints.md}) {
      padding-right: 1.55rem;
    }
    @media (min-width: ${breakpoints.xl}) {
      padding-right: 3.1rem;
    }
  `;
  const heroText = css`
    padding-left: 1.55rem;
    padding-right: 1.55rem;
  `;
  const h1 = css`
    font-weight: 700;
    @media (min-width: ${breakpoints.md}) {
      font-size: 2.75rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      font-size: 3rem;
    }
    @media (min-width: ${breakpoints.xl}) {
      font-size: 3.375rem;
    }
  `;
  const h3 = css`
    font-family: Poppins, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-sapcing: 0.125rem;
    font-size: 0.625rem;
    font-weight: 700;
    margin-bottom: 1.55rem;
    color: var(--color-text-secondary);

    @media (min-width: ${breakpoints.md}) {
      font-size: 0.875rem;
      margin-bottom: 2.325rem;
      letter-spacing: 0.1875rem;
    }
  `;
  const p = css`
    margin-bottom: 2.325rem;
    margin-top: 1.55rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    @media (min-width: ${breakpoints.md}) {
      margin-top: 2.325rem;
      font-size: 1.25rem;
    }
  `;
  const heroImgContainer = css`
    padding-bottom: 3.1rem;
    ${
      "" /* @media (min-width: ${breakpoints.md}) {
      margin-right: -55%;
    }
    @media (min-width: ${breakpoints.lg}) {
      margin-right: -40%;
    } */
    }
    @media (min-width: ${breakpoints.xl}) {
      margin-right: 0;
    }
    @media (min-width: ${breakpoints.xxl}) {
      margin-right: -3.1rem;
    }
    @media (max-width: ${breakpoints.md}) {
      margin-right: 0;
      display: none !important;
    }
    .gatsby-image-wrapper {
      max-width: 676px;
    }
  `;
  return (
    <section className={heroCss}>
      <div className={heroContent}>
        <div className={heroText}>
          <h3 className={h3}>{subheading}</h3>
          <h1 className={h1}>{title}</h1>
          <p className={p}>{desc}</p>
          <Link to="/" className="cta">
            {cta}
          </Link>

          {extra}
        </div>
      </div>
      <div className={heroImgContainer}>
        <Img fluid={hero} alt="" />
      </div>
      {shapes}
    </section>
  );
};

export default Header;
