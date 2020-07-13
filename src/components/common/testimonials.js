import React from "react";
import { css } from "linaria";

import Heading from "./heading";
import breakpoints from "../utils/breakpoints";

const Testimonials = ({ testimonials }) => {
  const testimonialsContainer = css`
    display: grid;
    row-gap: 1.55rem;
    column-gap: calc(4vw + 2.325rem);
    max-width: 68.2rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    margin: 1.55rem auto 0;
    align-items: flex-start;
    @media (min-width: ${breakpoints.md}) {
      margin-top: 4.65rem;
    }
    @media (min-width: ${breakpoints.sm}) {
      margin-top: 3.1rem;
    }
    .testimonial-item {
      p {
        margin-bottom: 1.55rem;
        color: var(--color-text-secondary);
      }
      .customer {
        margin-top: auto;
        display: flex;
        width: 100%;
        position: relative;
        @media (min-width: ${breakpoints.lg}) {
          margin-bottom: 2.325rem;
        }
        .customer-img img {
          display: block;
          width: 2.5rem;
          height: 2.5rem;
          background: #000;
          border-radius: 100%;
          margin-right: 0.775rem;
          margin-bottom: 0;
          flex: 0 0 auto;
        }
      }
    }
  `;
  return (
    <section className="testimonials section">
      <Heading title="Testimonials" />
      <div className={testimonialsContainer}>
        {testimonials.map((t, i) => {
          return (
            <div key={i} className="testimonial-item">
              <p>{t.desc}</p>
              <div className="customer">
                <div className="customer-img">
                  <img src={t.img} alt="" />
                </div>
                <p>
                  {t.name}
                  <br />
                  <small>{t.position}</small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
