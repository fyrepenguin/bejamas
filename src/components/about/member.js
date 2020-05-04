import React from "react";
import Img from "gatsby-image";

const Member = ({ name, position, image }) => {
  return (
    <div className="member-container">
      <div className="member-img">
        <Img
          fluid={image}
          alt={name}
          style={{ maxWidth: "190px", margin: "0 auto" }}
        />
      </div>
      <p className="member-name">
        {name}
        <br />
        <small>{position}</small>
      </p>
    </div>
  );
};

export default Member;
