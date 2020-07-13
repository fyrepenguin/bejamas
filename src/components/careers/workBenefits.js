import React from "react";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";
import Heading from "./../common/heading";

const WorkBenefits = () => {
  const benefits = [
    {
      title: "Remote-first",
      desc: "Get things done from home, co-working space, or a beach.",
    },
    {
      title: "Learning & development",
      desc: "Propose a course you want to learn from and get a 100% refund.",
    },
    {
      title: "Co-working space in Wroclaw",
      desc:
        "For those living in Wroclaw, or those who’d like to try - you’re always welcome.",
    },
    {
      title: "Exciting retreats",
      desc:
        "Meet your co-workers chilling on company retreats in cool places, like Sicily or Andalusia.",
    },
    {
      title: "Paid bank holidays",
      desc: "Bejamas pays for every public holiday in your country.",
    },
    {
      title: "Sports card",
      desc:
        "For those living in Wroclaw, or those who’d like to try - you’re always welcome.",
    },
  ];
  const perks = css`
    margin: 1.55rem auto 0;
    align-items: flex-start;
    display: grid;
    column-gap: calc(4vw + 3.1rem);
    row-gap: 4.65rem;
    max-width: 58.9rem;
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 3.1rem;
    }
    @media (min-width: ${breakpoints.md}) {
      margin-bottom: 6.2rem;
      margin-top: 4.65rem;
    }
  `;
  return (
    <section className="work-benefits section secondaryBg">
      <Heading
        title="Work Benefits"
        description="Because happy people make a great company."
      />
      <div className={perks}>
        {benefits.map((benefit, i) => {
          return (
            <div className="perk" key={i}>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default WorkBenefits;
