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
} from "../images";
import "../../styles/tech.scss";

export default class TechUsed extends Component {
  render() {
    return (
      <section className="tech section">
        <Heading
          description="Every project is a new story, yet some things stay the same. We pick a dedicated set of tools for each one, for the best performance possible."
          title="Beautifying the web"
          subtitle="TECHNOLOGIES WE USE"
        />
        <div className="tool-types">
          <h3>Data Sources</h3>
          <div className="tool-images">
            <img style={{ maxWidth: "160px" }} src={contentful} alt="" />

            <img style={{ maxWidth: "160px" }} src={storyblok} alt="" />

            <img style={{ maxWidth: "110px" }} src={sanity} alt="" />
            <img style={{ maxWidth: "160px" }} src={forestry} alt="" />
            <img style={{ maxWidth: "120px" }} src={dato} alt="" />
          </div>
        </div>
        <div className="tool-types">
          <h3>Build</h3>
          <div className="tool-images">
            <img style={{ maxWidth: "160px" }} src={gatsby} alt="" />

            <img style={{ maxWidth: "120px" }} src={next} alt="" />

            <img style={{ maxWidth: "150px" }} src={hugo} alt="" />

            <img style={{ maxWidth: "60px" }} src={react} alt="" />

            <img style={{ maxWidth: "120px" }} src={node} alt="" />
          </div>
        </div>
        <div className="tool-types">
          <h3>Deploy & CDN</h3>
          <div className="tool-images">
            <img style={{ maxWidth: "130px" }} src={netlify} alt="" />

            <img style={{ maxWidth: "50px" }} src={now} alt="" />

            <img style={{ maxWidth: "150px" }} src={firebase} alt="" />

            <img style={{ maxWidth: "70px" }} src={aws} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
