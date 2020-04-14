import React, { Component } from "react";
import Heading from "./heading";

export default class Header extends Component {
  render() {
    const desc =
        "Let us maximize ypur business potention with the latest and innovative technologies.",
      subtitle = "jamstack developers for hire",
      title = "Meet faster, more secure web.",
      cta = "work with us!";
    return (
      <section>
        ============================== Header ==============================
        <div>
          <Heading
            title={title}
            subtitle={subtitle}
            description={desc}
            cta={cta}
          />
          <div>
            <h4>trusted by innovative companies</h4>
            <div>images list</div>
          </div>
        </div>
        <div>img</div>
        ============================== Header ==============================
      </section>
    );
  }
}
