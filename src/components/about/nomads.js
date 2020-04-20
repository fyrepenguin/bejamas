import React from "react";
import Heading from "./../common/heading";
const Nomads = () => {
  return (
    <section className="section nomads">
      <div className="nomad-text">
        <Heading
          subheading="digital nomads"
          title="Behind the scenes of remote work"
          description="Who said we have to work from one office to be a close-knit team?"
        />
        <div>
          <p>
            The mere fact we’re all different and have different lifestyles
            gives us a chance to be more open and inspires us to make progress.
            We don’t believe in the nine-to-five work routine, being tied up to
            the desk, or forcing new employees to relocate.
          </p>
          <p>
            We see the jobs of the future more our way - being ourselves, being
            free, and living our dreams. There are things Slack can’t help with,
            that’s why we regularly take trips, coming from different parts of
            the world and having real fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nomads;
