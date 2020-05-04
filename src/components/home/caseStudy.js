import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";

import Heading from "../common/heading";

const CaseStudy = () => {
  const data = useStaticQuery(graphql`
    query {
      avenues: contentfulAsset(title: { eq: "avenues-case-study" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      quotes: contentfulAsset(title: { eq: "quotes" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      dmitry: contentfulAsset(title: { eq: "dmitry-terner" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  const caseStudy = css`
      padding-top: 7.75rem;
    `,
    caseStudyContent = css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1.55rem;
      max-width: 72.075rem;
      margin: 1.55rem auto 0;
      margin-top: 4.65rem;
      align-items: flex-start;
      column-gap: 49.6px;
    `,
    caseStudyHero = css`
      order: 0;
      margin-bottom: 2.325rem;
      .img-container {
        border-radius: 16px;
        .img-wrapper {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          border-radius: 16px;
          img {
            border-radius: 16px;
          }
        }
      }
    `,
    caseStudyQuote = css`
      padding: 2.325rem 6.2rem 3.1rem 3.1rem !important;
      border-radius: 28px;
      background-color: var(--color-bg-secondary);
      position: relative;
      border: 0 !important;
      margin: 0 0 1.55rem;
    `,
    quoteImg = css`
      max-width: 100px;
      right: -1.55rem;
      top: -1.55rem;
      position: absolute;
      width: 100%;
    `,
    user = css`
      font-size: 1rem;
      color: var(--color-text-secondary);
      font-weight: 700;
      display: flex;
      align-items: center;
      margin-top: 2.325rem;

      .user-img {
        display: inline-block;
        position: relative;
        overflow: hidden;
        height: 60px;
        width: 60px;

        margin-right: 1.55rem;
        border-radius: 100%;
        flex: 0 0 60px;
      }
      .user-info {
        .user-position {
          font-weight: 400;
        }
      }
    `,
    stats = css`
      display: flex;
      margin: 1.55rem auto 0;
      margin-bottom: 3.1rem;
      justify-content: space-around;
      max-width: 40rem;
      text-align: center;
      grid-template-columns: 1fr 1fr;
      column-gap: 9.3rem;
    `,
    statContainer = css`
      h3 {
        font-size: 3.5625rem;
      }
      p {
        color: var(--color-text-secondary);
      }
    `,
    footer = css`
      margin-top: 0;
      text-align: center;
      .divider {
        margin-top: 3.1rem;
      }
      .read-more {
        color: var(--color-cta);
      }
    `;

  return (
    <section className={`${caseStudy} section`}>
      <Heading
        subheading="featured jamstack case study"
        title="JAMstack in Services of Better education: Avenues, the World School."
      />
      <div className={caseStudyContent}>
        <div className={caseStudyHero}>
          <div className="img-container">
            <div className="img-wrapper">
              <Img fluid={data.avenues.fluid} />
            </div>
          </div>
        </div>
        <div>
          <blockquote className={caseStudyQuote}>
            <div className={quoteImg}>
              <Img fluid={data.quotes.fluid} />
            </div>
            For us, the benefits (of JAMstack) are straight forward. Cost is an
            obvious win as well as the ease of implementing enhancements and
            inherent security improvements.
            <div className={user}>
              <div className="user-img">
                <Img fluid={data.dmitry.fluid} />
              </div>
              <div className="user-info">
                <div className="user-name">Dmitry Terner</div>
                <div className="user-position">Website Manager at Avenues</div>
              </div>
            </div>
          </blockquote>
          <div className={stats}>
            <div className={statContainer}>
              <h3>781</h3>
              <p>static pages</p>
            </div>
            <div className={statContainer}>
              <h3>80k</h3>
              <p>traffic, 0 downtime</p>
            </div>
          </div>
        </div>
      </div>
      <footer className={footer}>
        <div>
          <a href="/" className="cta">
            Read full case study
          </a>
          <div className="divider"></div>
          <a href="/" className="read-more">
            See 7 more case studies »
          </a>
        </div>
      </footer>
    </section>
  );
};

export default CaseStudy;
