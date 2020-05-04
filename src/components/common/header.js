import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { css } from "linaria";

const Header = ({ subheading, title, cta, desc, hero, extra, shapes }) => {
  const heroCss = css`
    display: grid;
    align-items: center;
    max-height: 44rem;
    grid-template-columns: 52% auto;
    margin-right: 0;
    min-height: 40rem;
    padding-top: 0;
    padding-bottom: 2rem;
    height: calc(100vh - 100px);
    position: relative;
  `;
  const heroContent = css`
    height: 100%;
    padding-right: 3.1rem;
  `;
  const heroText = css`
    padding-top: 6.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  `;
  const mainText = css`
    margin-bottom: 3.1rem;
  `;
  const h1 = css`
    font-size: 3.375rem;
    font-weight: 700;
  `;
  const h3 = css`
    font-family: Poppins, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
    font-size: 0.875rem;
    margin-bottom: 2.325rem;
    color: var(--color-text-secondary);
  `;
  const p = css`
    margin-bottom: 2.325rem;
    margin-top: 2.325rem;
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
  `;
  const heroImgContainer = css`
    margin-right: -3.1rem;
    padding-bottom: 3.1rem;
    .gatsby-image-wrapper {
      margin: 0 auto;
      max-width: 676px;
    }
  `;
  return (
    <section className={heroCss}>
      <div className={heroContent}>
        <div className={heroText}>
          <div className={mainText}>
            <h3 className={h3}>{subheading}</h3>
            <h1 className={h1}>{title}</h1>
            <p className={p}>{desc}</p>
            <Link to="/" className="cta">
              {cta}
            </Link>
          </div>
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
