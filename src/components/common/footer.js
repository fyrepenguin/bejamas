import React, { Component } from "react";
import Heading from "./heading";
import "../../styles/footer.scss";
import { footerLogo } from "../images";
import { Link } from "gatsby";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="top">
            <svg width="16" height="22">
              <path
                d="M8 21V1M1 8l7-7 7 7"
                fill="none"
                fillRule="evenodd"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </Link>
          <section className="footer-cta">
            <Heading
              title="Ready to join JAMstack revolution?"
              subtitle="JAMstack developers for hire"
              description="Start your super-fast project with us or take your existing product to the next level."
              cta="Work with us!"
            />
          </section>
          <section className="footer-info">
            <div className="mode">
              <Link href="/">
                <img src={footerLogo} alt="" style={{ maxWidth: "2rem" }} />
              </Link>
              <fieldset aria-label="Theme Switcher">
                <input
                  type="checkbox"
                  id="themeSwitch"
                  name="theme-switch"
                  className="switch"
                ></input>
                <label htmlFor="themeSwitch" className="switch-label">
                  <a className="light" href="/" title="Switch to light">
                    <svg height="512" width="512" viewBox="0 0 512 512">
                      <path
                        d="M256 144c-61.75 0-112 50.25-112 112s50.25 112 112 112 112-50.25 112-112-50.25-112-112-112zm0 192c-44.188 0-80-35.812-80-80s35.812-80 80-80 80 35.812 80 80-35.812 80-80 80zm0-224c8.833 0 16-7.167 16-16V64c0-8.833-7.167-16-16-16s-16 7.167-16 16v32c0 8.833 7.167 16 16 16zm0 288c-8.833 0-16 7.167-16 16v32c0 8.833 7.167 16 16 16s16-7.167 16-16v-32c0-8.833-7.167-16-16-16zm124.438-245.833l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625 0l-22.625 22.625c-6.25 6.25-6.25 16.375 0 22.625s16.375 6.25 22.625 0zM131.562 357.834l-22.625 22.625c-6.25 6.249-6.25 16.374 0 22.624s16.375 6.25 22.625 0l22.625-22.624c6.25-6.271 6.25-16.376 0-22.625-6.249-6.251-16.375-6.272-22.625 0zM112 256c0-8.833-7.167-16-16-16H64c-8.833 0-16 7.167-16 16s7.167 16 16 16h32c8.833 0 16-7.167 16-16zm336-16h-32c-8.833 0-16 7.167-16 16s7.167 16 16 16h32c8.833 0 16-7.167 16-16s-7.167-16-16-16zm-316.459-85.833c6.251 6.25 16.376 6.25 22.625 0 6.251-6.25 6.251-16.375 0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zm248.918 203.645c-6.271-6.25-16.376-6.25-22.625 0-6.251 6.25-6.271 16.375 0 22.625l22.625 22.625c6.249 6.25 16.374 6.25 22.624 0s6.25-16.375 0-22.625l-22.624-22.625z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <span className="box"></span>
                  <a href="/" className="dark" title="Switch to dark">
                    <svg height="512" width="512" viewBox="0 0 512 512">
                      <path
                        d="M349.852 343.15c-49.875 49.916-131.083 49.916-181 0-49.916-49.918-49.916-131.125 0-181.021 13.209-13.187 29.312-23.25 47.832-29.812 5.834-2.042 12.293-.562 16.625 3.792 4.376 4.375 5.855 10.833 3.793 16.625-12.542 35.375-4 73.666 22.25 99.917 26.209 26.228 64.5 34.75 99.916 22.25 5.792-2.062 12.271-.582 16.625 3.793 4.376 4.332 5.834 10.812 3.771 16.625-6.521 18.519-16.604 34.622-29.812 47.831zM191.477 184.754c-37.438 37.438-37.438 98.354 0 135.771 40 40.021 108.125 36.416 143-8.168-35.959 2.25-71.375-10.729-97.75-37.084-26.375-26.354-39.333-61.771-37.084-97.729a90.21 90.21 0 00-8.166 7.21z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </label>
              </fieldset>
            </div>
            <nav>
              <div className="company">
                <p>Company</p>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Cookies</Link>
                  </li>
                </ul>
              </div>
              <div className="services">
                <p>Services</p>
                <ul>
                  <li>
                    <Link href="/">JAMstack Websites</Link>
                  </li>
                  <li>
                    <Link href="/">Progressive Web Apps</Link>
                  </li>
                </ul>
              </div>
              <div className="getInTouch">
                <p>Get In Touch</p>
                <ul>
                  <li>
                    <Link href="/">Estimate project</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/bejamas.io"
                    target="_blank"
                    title="Facebook"
                    rel="noopener noreferrer"
                  >
                    <svg width="10" height="16">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3.023 16L3 9H0V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H10L9 9H6.28v7H3.023z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/bejamas_io"
                    target="_blank"
                    title="Twitter"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="13">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/bejamas/"
                    target="_blank"
                    title="LinkedIn"
                    rel="noopener noreferrer"
                  >
                    <svg width="17" height="16">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M15.3 0H.7C.3 0 0 .3 0 .7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V.7c-.1-.4-.4-.7-.8-.7zM4.7 13.6H2.4V6h2.4v7.6h-.1zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/bejamas"
                    target="_blank"
                    title="Github"
                    rel="noopener noreferrer"
                  >
                    <svg width="17" height="16">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 .2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <p className="copyright">&copy; Bejamas.io - All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
