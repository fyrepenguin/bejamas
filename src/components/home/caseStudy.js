import React, { Component } from "react";
import Heading from "../common/heading";
import { dmitri, avenue, quote } from "../../images";
import "./../../styles/caseStudy.scss";
export default class CaseStudy extends Component {
  render() {
    return (
      <section className="case-study section">
        <Heading
          subtitle="featured jamstack case study"
          title="JAMstack in Services of Better education: Avenues, the World School."
        />
        <div className="case-study-content">
          <div className="case-study-hero">
            <div className="img-container">
              <div className="img-wrapper">
                <img src={avenue} alt="avenues case study" />
              </div>
            </div>
          </div>
          <div>
            <blockquote className="case-study-quote">
              <div className="quote-img">
                <img src={quote} alt="" />
              </div>
              For us, the benefits (of JAMstack) are straight forward. Cost is
              an obvious win as well as the ease of implementing enhancements
              and inherent security improvements.
              <div className="user">
                <div className="user-img">
                  <img src={dmitri} alt="dmitri" />
                </div>
                <div className="user-info">
                  <div className="user-name">Dmitry Terner</div>
                  <div className="user-position">
                    Website Manager at Avenues
                  </div>
                </div>
              </div>
            </blockquote>
            <div className="stats">
              <div className="stat-container">
                <h3>781</h3>
                <p>static pages</p>
              </div>
              <div className="stat-container">
                <h3>80k</h3>
                <p>traffic, 0 downtime</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <a href="/" className="cta">
              Read full case study
            </a>
            <div className="divider"></div>
            <a href="/" className="read-more">
              See 7 more case studies »
            </a>
          </div>
        </footer>
      </section>
    );
  }
}
