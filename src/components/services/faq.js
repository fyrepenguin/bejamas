import React, { useState } from "react";
import { css } from "linaria";

import Heading from "./../common/heading";

const Query = ({ query, ans }) => {
  let [isOpen, setOpen] = useState(false);
  const classes = isOpen ? "ans active" : "ans";
  return (
    <div>
      <p className="query" onClick={() => setOpen(!isOpen)}>
        {query} <span>{isOpen ? "-" : "+"}</span>
      </p>
      <p className={classes}>{ans}</p>
    </div>
  );
};
const faqList = css`
  max-width: 46.5rem;
  margin: 1.55rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 4.65rem;
  column-gap: 2.325rem;
  align-items: flex-start;
  font-size: 1.25rem;
  .query {
    margin-top: 1.55rem;
    margin-bottom: 0;
    padding: 2.325rem;
    background-color: var(--color-bg-secondary);
    display: flex;
    border-radius: 8px;
    font-weight: 400;
    cursor: pointer;
    justify-content: space-between;
    span {
      font-size: 2.25rem;
      font-weight: 100;
      line-height: 1;
      margin-left: 0.775rem;
      color: var(--color-cta);
    }
  }
  .ans {
    background-color: var(--color-bg-secondary);
    border-radius: 0 0 8px 8px;
    display: none;
    padding: 0 2.325rem 2.325rem;
    color: var(--color-text-secondary);
  }
  .ans.active {
    display: block;
  }
`;
const Faq = () => {
  const queries = [
    {
      q: "What’s your hourly rate?",
      a:
        "The hourly rate we agree on depends on a couple of factors, like your project’s complexity. If you’d like to know the range of our prices you’ll find all the information you need in our company presentation.",
    },
    {
      q: "How long will my project take?",
      a:
        "A JAMstack website with 5-7 different design templates takes us between 4-6 weeks of development work (with full-CMS option). Of course, assuming that we have all the design assets provided.",
    },
    {
      q: "How long has Bejamas been around?",
      a:
        "Although all of us have been roaming the web and marketing world for a long time, we’re a pretty young brand. Together we started as a small web development shop for SMBs in 2017, and Bejamas (as in a shape you see today) was happily born in 2018.",
    },
    {
      q: "Do you have any past jobs to share?",
      a:
        "With over 30 websites and apps built with static site generators, we do have a bunch of them. Up to browse the full portfolio? Contact our sales team - they’ll be happy to send you a showcase presentation.",
    },
    { q: "Do you have your own designers?", a: "Yes we do!" },
  ];

  return (
    <section className="faq section">
      <Heading subheading="faq" title="Questions you probably want to ask" />
      <div className={faqList}>
        {queries.map((query, i) => {
          return <Query key={i} ans={query.a} query={query.q} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
