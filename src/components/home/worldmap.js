import React from "react";
import Heading from "../common/heading";
import { map } from "../images";
import "../../styles/map.scss";

const WorldMap = () => {
  const desc = (
    <>
      We’re an international-ready team.
      <br />
      Worked in sync with customers in 7 different time-zones.
    </>
  );
  return (
    <section className="section map">
      <Heading
        subheading="Bettering the web for clients from"
        title="14 countries, 5 continents"
        description={desc}
      />
      <div className="map-img">
        <img src={map} alt="" />
      </div>
    </section>
  );
};
export default WorldMap;
