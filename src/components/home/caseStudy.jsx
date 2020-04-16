import React, { Component } from "react";
import Heading from "./../common/heading";
import { dmitri, avenue, quote } from "../../images/";
import "./../../styles/caseStudy.scss";
export default class CaseStudy extends Component {
  render() {
    return (
      <section className="case-study">
        <Heading
          subtitle="featured jamstack case study"
          title="JAMstack in Services of Better education: Avenues, the World School."
        />
        <div>
          <div>
            <div>
              <div>
                <img src={avenue} alt="avenues case study" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={quote} alt="" />
              <div>
                For us, the benefits (of JAMstack) are straight forward. Cost is
                an obvious win as well as the ease of implementing enhancements
                and inherent security improvements.
              </div>
              <div>
                <div>
                  <img src={dmitri} alt="dmitri" />
                </div>
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
          <div>
            <a href="/" className="cta">
              Read full case study
            </a>
            <a href="/" className="read-more">
              See 7 more case studies
            </a>
          </div>
        </footer>
      </section>
    );
  }
}
