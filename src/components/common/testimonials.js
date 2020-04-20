import React from "react";
import Heading from "./heading";
const Testimonials = () => {
  return (
    <section className="testimonials section">
      <Heading title="Testimonials" />
      <div className="testimonials-container">
        <div className="testimonial-item">
          <p>
            Bejamas is highly proactive; they sought feedback early on and have
            adapted their workflow to our needs.
          </p>
          <div className="customer">
            <div className="customer-img"></div>
            <p>
              William Rudenmalm,
              <br />
              <small>CTO, Klira</small>
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <p>
            The successful switch to JAMstack has increased website and data
            security while also improving site performance and speed.
          </p>
          <div className="customer">
            <div className="customer-img"></div>
            <p>
              Yan Schuppli,
              <br />
              <small>Founder, Codevelop Technologies GmbH</small>
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <p>
            Bejamas’ responsiveness and ability to turn constructive feedback
            into implementable, on-time deliverables are hallmarks of their
            work. Their can-do attitude made them a valuable partner.
          </p>
          <div className="customer">
            <div className="customer-img"></div>
            <p>
              Paolo Stolfo,
              <br />
              <small>Art Director, KREAM</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
