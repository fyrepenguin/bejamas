import React from "react";
import "../../styles/testimonial.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      eppo: contentfulAsset(title: { eq: "eppo-heemstra" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      opt: contentfulAsset(title: { eq: "testimonials-opt" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);
  return (
    <section className="testimonial section">
      <div className="testimonial-content">
        <div>
          <h3>
            „Having worked intensively with Bejamas on multiple projects, our
            partnership has been a professional and productive experience with
            impressive results to date. The team is responsive, full of ideas
            and delivers on their commitments. I can highly recommend Bejamas as
            a serious partner in modern web development projects involving
            JAMstack and React.”
          </h3>
          <div className="rating">
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
          <div className="customer">
            <div className="customer-img">
              <Img fluid={data.eppo.fluid} />
            </div>
            <p>
              Eppo Heemstra <br />
              Marketing Operations Manager at Mambu
            </p>
          </div>
        </div>
        <div className="testimonial-hero">
          <Img fluid={data.opt.fluid} />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
