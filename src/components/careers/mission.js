import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";
import Heading from "../common/heading";

const Mission = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: contentfulAsset(title: { eq: "our-mission" }) {
        ...ImageContent
      }
      arek: contentfulAsset(title: { eq: "04.arek-gorecki" }) {
        ...ImageContent
      }
      quotes: contentfulAsset(title: { eq: "quotes" }) {
        ...ImageContent
      }
    }
  `);

  const mission = css`
    margin-top: 3.1rem;
    @media (min-width: ${breakpoints.md}) {
      margin-top: 6.2rem;
    }
  `;
  const missionContent = css`
    margin: 1.55rem auto 0;
    display: grid;
    max-width: 58.9rem;
    row-gap: 4.65rem;
    column-gap: calc(4vw + 3.1rem);
    align-items: flex-start;
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${breakpoints.md}) {
      margin-top: 4.65rem;
    }
  `;

  const p = css`
    @media (min-width: ${breakpoints.md}) {
      font-size: 1.25rem;
    }

    color: var(--color-text-secondary);
    line-height: 1.8;
  `;
  const blockquoteCss = css`
    margin: 0;
    span {
      position: relative;
      &::before {
        content: "\\201E";
        font-size: 5rem;
        color: var(--color-cta);
        height: 50px;
        line-height: 3rem;
        display: inline-block;
        margin-bottom: 2.325rem;
      }
    }
    p {
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
    .cite {
      display: flex;
      align-items: center;
      .img {
        display: inline-block;
        width: 45px;
        height: 45px;
        margin-right: 1.55rem;
      }
      p {
        font-weight: normal;
        font-size: 1rem;
      }
    }
  `;
  const missionImg = css`
    position: relative;
  `;
  return (
    <section className={`section secondaryBg ${mission}`}>
      <Heading
        title="Help build the web of tomorrow"
        subheading="Our mission"
      />
      <main className={missionContent}>
        <div>
          <p className={p}>
            Bejamas is home to independent souls and visionary thinkers. A
            lion’s share of today’s web is tedious and vulnerable. We believe it
            needs a fresh approach and that’s what we offer. It requires a
            creative environment to make creative people thrive. We want our
            jobs our way - being free, living our dreams, and just being
            ourselves.
          </p>
          <blockquote className={blockquoteCss}>
            <span></span>
            <p className={p}>
              We believe that work is something that needs to be done, not a
              place where people need to go. Bejamas gives me the freedom to
              decide when and where I do the best work I can, so it's even more
              impactful.
            </p>
            <div className="cite">
              <div className="img">
                <Img
                  fluid={data.arek.fluid}
                  style={{ width: "45px", height: "45px" }}
                />
              </div>
              <p>Arek Gorecki, Front-end Lead</p>
            </div>
          </blockquote>
        </div>
        <div className={missionImg}>
          <Img className="mission-hero" fluid={data.hero.fluid} />
        </div>
      </main>
    </section>
  );
};

export default Mission;
