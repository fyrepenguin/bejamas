import React from "react";
import "../../styles/heading.scss";
const Heading = ({ subtitle, title, description, cta }) => {
  return (
    <header className="heading">
      <p className="sub-title">{subtitle}</p>
      <h2>{title}</h2>
      {description ? <p className="description">{description}</p> : ""}
      {cta ? (
        <a href="/" className="cta">
          {cta}
        </a>
      ) : (
        ""
      )}
    </header>
  );
};
export default Heading;
