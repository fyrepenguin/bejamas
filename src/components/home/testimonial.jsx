import React, { Component } from "react";
import opt from "./../../images/testimonials-opt.webp";
import eppo from "./../../images/eppo-heemstra.webp";
export default class Testimonial extends Component {
  render() {
    return (
      <section>
        ============================= Testimonial =============================
        <div>
          <p>
            „Having worked intensively with Bejamas on multiple projects, our
            partnership has been a professional and productive experience with
            impressive results to date. The team is responsive, full of ideas
            and delivers on their commitments. I can highly recommend Bejamas as
            a serious partner in modern web development projects involving
            JAMstack and React.”
          </p>
          <div>rating</div>
          <div>
            <div>
              <img src={eppo} alt="eppo" />
            </div>
            <div>Eppo Heemstra</div>
            <div>Marketing Operations Manager at Mambu</div>
          </div>
        </div>
        <div>
          <img src={opt} alt="testimonial hero" />
        </div>
        ============================= Testimonial =============================
      </section>
    );
  }
}
