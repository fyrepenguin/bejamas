import React from "react";
import { css } from "linaria";

import Heading from "./heading";

const FooterCTA = () => {
  const footerCta = css`
    padding-bottom: 4.65rem;
    margin-bottom: 4.65rem;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    h3 {
      color: var(--color-cta);
    }
    h2 {
      color: #fff;
    }
    h2 ~ p {
      color: #fff;
      opacity: 0.7;
      font-size: 1.25rem;
      max-width: 37.2rem;
      margin-left: auto;
      margin-right: auto;
    }
    .cta {
      margin: 1.55rem 0 0;
    }
  `;
  return (
    <section className={footerCta}>
      <Heading
        title="Ready to join JAMstack revolution?"
        subheading="JAMstack developers for hire"
        description="Start your super-fast project with us or take your existing product to the next level."
        cta="Work with us!"
      />
    </section>
  );
};

export default FooterCTA;
