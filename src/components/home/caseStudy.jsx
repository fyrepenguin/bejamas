import React, { Component } from "react";
import Heading from "./../common/heading";

export default class CaseStudy extends Component {
  render() {
    return (
      <section>
        ============================= Case Study =============================
        <Heading
          subtitle="featured jamstack case study"
          title="JAMstack in Services of Better education: Avenues, the World School."
        />
        <div>
          <div>img</div>
          <div>
            <div>
              <div>
                For us, the benefits (of JAMstack) are straight forward. Cost is
                an obvious win as well as the ease of implementing enhancements
                and inherent security improvements.
              </div>
              <div>
                <div>user image</div>
                <div>Dmitry Terner</div>
                <div>Website Manager at Avenues</div>
              </div>
            </div>
            <div>
              <div>
                <div>781</div>
                <div>static pages</div>
              </div>
              <div>
                <div>80k</div>
                <div>traffic, 0 downtime</div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <a href="/" className="cta">
            read full case Study
          </a>
          <a href="/">See 7 more case studies</a>
        </footer>
        ============================= Case Study =============================
      </section>
    );
  }
}
