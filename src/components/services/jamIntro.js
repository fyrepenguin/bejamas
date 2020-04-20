import React from "react";
import { Link } from "gatsby";
import { jamintroHero } from "../images";
const JamIntro = () => {
  return (
    <section className="jam-intro section">
      <div>
        <h2>What is JAMstack</h2>
        <p>
          JAMstack means an alternative approach for building websites and web
          applications. The JAM here stands for JavaScript, APIs, and Markdown.
          For your progressive web application, it means lower costs,
          scalability, and incredibly good performance.
        </p>
        <p>
          Building our apps we use battle-tested technologies like GatsbyJS,
          NextJS, Contentful, AWS, Netlify, and others.
        </p>{" "}
      </div>
      <div className="jamintro-img">
        {" "}
        <img src={jamintroHero} alt="" />
      </div>
      <Link className="cta" to="/blog">
        Read more
      </Link>
    </section>
  );
};

export default JamIntro;
