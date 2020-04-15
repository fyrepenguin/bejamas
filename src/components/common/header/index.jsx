import React, { Component } from "react";
import Heading from "../heading";
import flo from "../../../images/flo.svg";
import armorblox from "../../../images/armorblox.svg";
import mambu from "../../../images/mambu.svg";
import newfront from "../../../images/newfront.svg";
import hero from "../../../images/hero-opt.webp";
import "./header.css";

export default class Header extends Component {
  render() {
    const desc =
        "Let us maximize ypur business potention with the latest and innovative technologies.",
      subtitle = "jamstack developers for hire",
      title = "Meet faster, more secure web.",
      cta = "work with us!";
    return (
      <section className="hero container">
        <div>
          <Heading
            title={title}
            subtitle={subtitle}
            description={desc}
            cta={cta}
          />
          <div>
            <h4>trusted by innovative companies</h4>
            <div>
              <ul style={{ display: "flex" }}>
                <li>
                  <img src={newfront} alt="newfront" />
                </li>
                <li>
                  <img src={mambu} alt="mambu" />
                </li>
                <li>
                  <img src={flo} alt="flo" />
                </li>
                <li>
                  <img src={armorblox} alt="armorblox" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <picture>
            <img src={hero} alt="hero main" />
          </picture>
        </div>
      </section>
    );
  }
}
