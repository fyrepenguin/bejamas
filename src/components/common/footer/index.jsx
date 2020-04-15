import React, { Component } from "react";
import Heading from "../heading";

export default class Footer extends Component {
  render() {
    return (
      <section>
        {" "}
        ============================== Footer ==============================
        <Heading
          title="Ready to join JAMstack revolution?"
          subtitle="JAMSTACK DEVELOPERS FOR HIRE"
          description="Start your super-fast project with us or take your existing product to the next level."
          cta="Work with us!"
        />
        <hr />
        <footer>
          <div></div>
          <div>
            <div className="company">
              <h4>Commpany</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
              </ul>
            </div>
            <div className="services">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/">JAMstack Websites</a>
                </li>
                <li>
                  <a href="/">Progressive Web Apps</a>
                </li>
              </ul>
            </div>
            <div className="getInTouch">
              <h4>Get In Touch</h4>
              <ul>
                <li>
                  <a href="/">Estimate project</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="social"></div>
          </div>
        </footer>
        ============================== Footer ==============================
      </section>
    );
  }
}
