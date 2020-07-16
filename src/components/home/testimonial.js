import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      eppo: contentfulAsset(title: { eq: "eppo-heemstra" }) {
        ...ImageContent
      }
      opt: contentfulAsset(title: { eq: "testimonials-opt" }) {
        ...ImageContent
      }
    }
  `);
  const testimonialContent = css`
    @media (min-width: ${breakpoints.lg}) {
      display: grid;
      column-gap: 6.2rem;
      align-items: center;
      padding-left: 3.1rem;
      grid-template-columns: auto 40%;
    }
  `;

  const rating = css`
    display: flex;
    margin: 3.1rem 0;
    svg + svg {
      margin-left: 0.775rem;
    }
  `;
  const customer = css`
    display: flex;
  `;
  const customerImg = css`
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 0.775rem;
  `;
  const testimonialHero = css`
    position: relative;
    max-width: 511px;
    overflow: hidden;
    @media (max-width: ${breakpoints.lg}) {
      display: none;
    }
  `;
  const testimonial = css`
    font-size: 1.8125rem;
    font-weight: 600;
  `;

  return (
    <section className="testimonial section">
      <div className={testimonialContent}>
        <div>
          <h3 className={testimonial}>
            „Having worked intensively with Bejamas on multiple projects, our
            partnership has been a professional and productive experience with
            impressive results to date. The team is responsive, full of ideas
            and delivers on their commitments. I can highly recommend Bejamas as
            a serious partner in modern web development projects involving
            JAMstack and React.”
          </h3>
          <div className={rating}>
            <svg width="16" height="16">
              <path
                fill="#FAB51B"
                fillRule="evenodd"
                d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z"
              ></path>
            </svg>
            <svg width="16" height="16">
              <path
                fill="#FAB51B"
                fillRule="evenodd"
                d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z"
              ></path>
            </svg>
            <svg width="16" height="16">
              <path
                fill="#FAB51B"
                fillRule="evenodd"
                d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z"
              ></path>
            </svg>
            <svg width="16" height="16">
              <path
                fill="#FAB51B"
                fillRule="evenodd"
                d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z"
              ></path>
            </svg>
            <svg width="16" height="16">
              <path
                fill="#FAB51B"
                fillRule="evenodd"
                d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z"
              ></path>
            </svg>
          </div>
          <div className={customer}>
            <div className={customerImg}>
              <Img fluid={data.eppo.fluid} />
            </div>
            <p>
              Eppo Heemstra <br />
              Marketing Operations Manager at Mambu
            </p>
          </div>
        </div>
        <div className={testimonialHero}>
          <Img fluid={data.opt.fluid} />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
