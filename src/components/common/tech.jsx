import React, { Component } from "react";
import Heading from "./heading";
import {
  contentful,
  storyblok,
  sanity,
  forestry,
  dato,
  gatsby,
  next,
  hugo,
  react,
  node,
  netlify,
  now,
  firebase,
  aws,
} from "../../images";
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
          <div>
            <img src={contentful} alt="" />

            <img src={storyblok} alt="" />

            <img src={sanity} alt="" />
            <img src={forestry} alt="" />
            <img src={dato} alt="" />
          </div>
        </div>
        <div>
          <h3>Build</h3>
          <div>
            <img src={gatsby} alt="" />

            <img src={next} alt="" />

            <img src={hugo} alt="" />

            <img src={react} alt="" />

            <img src={node} alt="" />
          </div>
        </div>
        <div>
          <h3>Deploy & CDN</h3>
          <div>
            <img src={netlify} alt="" />

            <img src={now} alt="" />

            <img src={firebase} alt="" />

            <img src={aws} alt="" />
          </div>
        </div>
        ============================= Tech =============================
      </section>
    );
  }
}
