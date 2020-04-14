import React from "react";

const Heading = ({ subtitle, title, description, cta, align }) => {
  return (
    <header className={align === "left" ? "text-left" : "text-center"}>
      <p>{subtitle}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : ""}
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
