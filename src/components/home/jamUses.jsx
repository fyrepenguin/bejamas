import React, { Component } from "react";
import Heading from "./../common/heading";

export default class JamUses extends Component {
  render() {
    return (
      <section>
        ============================= JAM Uses ==============================
        <Heading
          subtitle="SITES WITH BENEFITS"
          title="How JAMstack supports your business"
          description="We use the power of JAMstack and server-side rendering to ship value to our customers."
        />
        <div className="benefits">
          <div className="benefit">
            <div>img</div>
            <div>Swift</div>
            <div>
              We don’t use databases, so there’s no time-consuming multiple
              queries. Static sites are even up to 10x faster, with benefits for
              the UX and SERP rankings.
            </div>
          </div>
          <div className="benefit">
            <div>img</div>
            <div>Safe</div>
            <div>
              73.2% of the most popular WordPress installations are opened to
              vulnerabilities. Statically rendered websites with no plugins are
              a fortress and let you save money on security.
            </div>
          </div>
          <div className="benefit">
            <div>img</div>
            <div>Stable</div>
            <div>
              Traffic bigger than usual? Not an issue with the JAMstack sites -
              you host your websites’ static files in a multi-cloud environment
              on a CDN with no traffic limitations.
            </div>
          </div>
          <div className="benefit">
            <div>img</div>
            <div>Scalable</div>
            <div>
              Implementing new features to your project? Serverless architecture
              scales automatically as your usage or user base extends, so you
              can scale your app or site without hassle.
            </div>
          </div>
        </div>
        ============================= JAM Uses ==============================
      </section>
    );
  }
}
