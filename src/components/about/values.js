import React from "react";
import Heading from "./../common/heading";
import { Link } from "gatsby";

const Values = () => {
  return (
    <section className="values section">
      <Heading
        subtitle="Things we value"
        title="Believability at the core"
        description="As a remote team of independent thinkers, we share the same values that make things work like a charm."
      />
      <div className="things">
        <div className="value">
          <div className="value-img"></div>
          <h3>Transparency and Truthfulness</h3>
          <p>
            We communicate with each other honestly, even if the truth violates
            one's ego. We believe that in the long term only through good and
            honest communication with each other we can generate added value for
            our clients.
          </p>
        </div>
        <div className="value">
          <div className="value-img"></div>
          <h3>Openness of mind</h3>
          <p>
            In our case transparency means that everyone's opinion is open for
            discussion by anyone on the team. That is why it is so important for
            us to keep our mind open and treat every feedback with humility, a
            chance to look at things from another perspective, and as an
            opportunity to improve our skills.
          </p>
        </div>
        <div className="value">
          <div className="value-img"></div>
          <h3>Commitment and Responsibility</h3>
          <p>
            Remote work gives great possibilities, but comes with great
            responsibility. At Bejamas, each team member is responsible for a
            certain part of a project and it’s on them to deliver the best
            solution for it. For us it’s crucial to keep things this way and run
            projects as a well-oiled machine.
          </p>
        </div>
        <div className="value">
          <div className="value-img"></div>
          <h3>Empathy and Unselfishness</h3>
          <p>
            Those are two very important factors at Bejamas. We believe that
            every person deserves valuable relationships with other people and a
            pleasant work environment. We try to help each other and give as
            much as we take ourselves.
          </p>
        </div>
      </div>
      <footer>
        <p>
          For us customers really do come first because we help them not only
          grow their businesses but also educate them to understand the tech
          behind it.
        </p>
        <Link to="/careers" className="cta">
          Work with us!
        </Link>
      </footer>
    </section>
  );
};

export default Values;
