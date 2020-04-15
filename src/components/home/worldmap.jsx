import React, { Component } from "react";
import Heading from "./../common/heading";
import { map } from "./../../images";
export default class WorldMap extends Component {
  render() {
    return (
      <section>
        ============================== World map ==============================
        <Heading
          subtitle="BETTERING THE WEB FOR CLIENTS FROM"
          title="14 countries, 5 continents"
          description="We’re an international-ready team.
Worked in sync with customers in 7 different time-zones."
        />
        <div>
          <img src={map} alt="" />
        </div>
        ============================== World map ==============================
      </section>
    );
  }
}
