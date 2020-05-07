import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";

import Heading from "../common/heading";
import { JAMintro, jamPWA, jamclients, wordpress, headless } from "../images";

const Stories = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "30" }) {
        ...ImageContent
      }
    }
  `);
  const posts = css`
      display: grid;

      padding: 0 4.65rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 254px);
      grid-template-areas:
        ". mainPost mainPost ."
        ". mainPost mainPost post4"
        "post1 . post2 post2"
        ". post3 post2 post2";
      column-gap: 1.55rem;
      row-gap: 1.55rem;
      color: #fff;
      position: relative;
    `,
    postCircle = css`
      max-width: 172px;
      height: auto;
    `,
    postCta = css`
      text-align: center;
      margin: 4.65rem 0 3.1rem;
    `,
    mainPost = css`
      grid-area: mainPost;
      margin-right: 6.2rem;
      margin-top: 6.2rem;
      position: relative;
      grid-column: 2 / span 2;
      a {
        padding: 2.325rem 2.325rem 0.5166666rem;

        background: #040111;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: flex-end;
        position: relative;
        color: currentColor;
        z-index: 2;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        will-change: transform;
        h3 {
          font-size: 2rem;
          margin-bottom: 1.55rem;
        }
        .article-wrapper {
          margin: -2.325rem -2.325rem auto 0;
          margin-left: 3.1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    `,
    post1 = css`
      position: relative;
      grid-area: post1;
      a {
        background: #ff385e;
        color: #1f0757;
        border-radius: 8px;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        backface-visibility: hidden;
        transform: translateZ(0);
        padding: 1.55rem 1.55rem 0.3875rem;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        will-change: transform;
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.516666rem;
        }
        .article-wrapper {
          position: relative;
          margin: -6.75rem -1.55rem 0;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    `,
    post2 = css`
      position: relative;
      grid-area: post2;
      margin-right: 9.3rem;
      margin-bottom: 9.3rem;
      border-radius: 16px;
      a {
        color: #1f0757;
        background: #ff385e;
        border-radius: 8px;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        backface-visibility: hidden;
        transform: translateZ(0);
        padding: 1.55rem 1.55rem 0.3875rem;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        will-change: transform;
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.51666rem;
        }
        .article-wrapper {
          position: relative;
          overflow: hidden;
          margin: -8.5rem -1.55rem 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    `,
    post3 = css`
      position: relative;
      grid-area: post3;
      border-radius: 16px;

      a {
        background: #2f0072;
        border-radius: 8px;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        backface-visibility: hidden;
        transform: translateZ(0);
        padding: 1.55rem 1.55rem 0.3875rem;
        color: currentColor;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        will-change: transform;
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5166666rem;
        }
        .article-wrapper {
          margin: -4rem -1.55rem 0;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    `,
    post4 = css`
      grid-area: post4;
      position: relative;
      border-radius: 16px;
      a {
        background: #fc9b1f;
        color: #62133a;
        border-radius: 8px;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        backface-visibility: hidden;
        transform: translateZ(0);
        padding: 1.55rem 1.55rem 0.3875rem;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        will-change: transform;
        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.516666rem;
        }
        .article-wrapper {
          overflow: hidden;
          position: absolute;
          bottom: 44%;
          width: 100%;
          top: -35%;
          margin: 0 -1.55rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    `;
  return (
    <section className="stories section">
      <Heading subheading="Our Stories" title="Latest from blog" />
      <div className={posts}>
        <div className={postCircle}>
          <Img fluid={data.contentfulAsset.fluid} />
        </div>
        <article className={mainPost}>
          <a href="/">
            <div className="article-wrapper">
              <img src={JAMintro} alt="" />
            </div>
            <h3>JAMstack: The Corenrstone of Modern-day Web Development</h3>
            <p>Read more</p>
          </a>
        </article>
        <article className={post4}>
          <a href="/">
            <div className="article-wrapper">
              <img src={jamPWA} alt="" />
            </div>
            <h3>Building a Fast PWA With JAMstack</h3>
            <p>Read more</p>
          </a>
        </article>
        <article className={post1}>
          <a href="/">
            <div className="article-wrapper">
              <img src={jamclients} alt="" />
            </div>
            <h3>JAMstack for Clints</h3>
            <p>Read more</p>
          </a>
        </article>
        <article className={post2}>
          <a href="/">
            <div className="article-wrapper">
              <img src={wordpress} alt="" />
            </div>
            <h3>
              WordPress Alternative: The Pros and Cons of Static Site Generators
            </h3>
            <p>Read more</p>
          </a>
        </article>
        <article className={post3}>
          <a href="/">
            <div className="article-wrapper">
              <img src={headless} alt="" />
            </div>
            <h3>9 Headless CMS Options for Your JAMstack Site</h3>
            <p>Read more</p>
          </a>
        </article>
      </div>
      <div className={postCta}>
        <a href="/" className="cta">
          Read more stories
        </a>
      </div>
    </section>
  );
};

export default Stories;
