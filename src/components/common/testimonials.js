import React from "react";
import Heading from "./heading";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials section">
      <Heading title="Testimonials" />
      <div className="testimonials-container">
        {testimonials.map((t, i) => {
          return (
            <div key={i} className="testimonial-item">
              <p>{t.desc}</p>
              <div className="customer">
                <div className="customer-img">
                  {console.log(t.img)}
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
