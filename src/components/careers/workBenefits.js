import React from "react";
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
  return (
    <section className="work-benefits section">
      <Heading
        title="Work Benefits"
        description="Because happy people make a great company."
      />
      <div className="perks">
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
