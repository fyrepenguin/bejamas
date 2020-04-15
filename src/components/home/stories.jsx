import React, { Component } from "react";
import {
  JAMintro,
  jamPWA,
  jamclients,
  wordpress,
  headless,
} from "../../images";
export default class Stories extends Component {
  render() {
    return (
      <section>
        ============================== Stories ==============================
        <div>
          <a href="/">
            <img src={JAMintro} alt="" />
            <div>
              <h3>JAMstack: The Corenrstone of Modern-day Web Development</h3>
              <a href="/">Read more</a>
            </div>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={jamPWA} alt="" />
            <div>
              <h3>Building a Fast PWA With JAMstack</h3>
              <a href="/">Read more</a>
            </div>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={jamclients} alt="" />
            <div>
              <h3>JAMstack for Clints</h3>
              <a href="/">Read more</a>
            </div>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={wordpress} alt="" />
            <div>
              <h3>
                WordPress Alternative: The Pros and Cons of Static Site
                Generators
              </h3>
              <a href="/">Read more</a>
            </div>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={headless} alt="" />
            <div>
              <h3>9 Headless CMS Options for Your JAMstack Site</h3>
              <a href="/">Read more</a>
            </div>
          </a>
        </div>
        ============================== Stories ==============================
      </section>
    );
  }
}
