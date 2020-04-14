import React, { Component } from "react";
import Heading from "./heading";

export default class TechUsed extends Component {
  render() {
    return (
      <section>
        ============================= Tech =============================
        <Heading
          description="Every project is a new story, yet some things stay the same. We pick a dedicated set of tools for each one, for the best performance possible."
          title="Beautifying the web"
          subtitle="TECHNOLOGIES WE USE"
        />
        <div>
          <h3>Data Sources</h3>
          <div>image list</div>
        </div>
        <div>
          <h3>Build</h3>
          <div>image list</div>
        </div>
        <div>
          <h3>Deploy & CDN</h3>
          <div>image list</div>
        </div>
        ============================= Tech =============================
      </section>
    );
  }
}
