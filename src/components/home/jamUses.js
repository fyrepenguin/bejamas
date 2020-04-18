import React, { Component } from "react";
import Heading from "../common/heading";
import { swift, safe, stable, scalable } from "../../images";
import "../../styles/JAMuses.scss";

export default class JamUses extends Component {
  render() {
    return (
      <section className="jamstack-benefits section">
        <Heading
          subtitle="Site with benefits"
          title="How JAMstack supports your business"
          description="We use the power of JAMstack and server-side rendering to ship value to our customers."
        />
        <div className="benefits">
          <div className="benefit">
            <div className="benefit-img">
              <img src={swift} alt="" />
            </div>
            <h3>Swift</h3>
            <p>
              We don’t use databases, so there’s no time-consuming multiple
              queries. Static sites are even up to 10x faster, with benefits for
              the UX and SERP rankings.
            </p>
          </div>
          <div className="benefit">
            <div className="benefit-img">
              <img src={safe} alt="" />
            </div>
            <h3>Safe</h3>
            <p>
              73.2% of the most popular WordPress installations are opened to
              vulnerabilities. Statically rendered websites with no plugins are
              a fortress and let you save money on security.
            </p>
          </div>
          <div className="benefit">
            <div className="benefit-img">
              <img src={stable} alt="" />
            </div>
            <h3>Stable</h3>
            <p>
              Traffic bigger than usual? Not an issue with the JAMstack sites -
              you host your websites’ static files in a multi-cloud environment
              on a CDN with no traffic limitations.
            </p>
          </div>
          <div className="benefit">
            <div className="benefit-img">
              <img src={scalable} alt="" />
            </div>
            <h3>Scalable</h3>
            <p>
              Implementing new features to your project? Serverless architecture
              scales automatically as your usage or user base extends, so you
              can scale your app or site without hassle.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
