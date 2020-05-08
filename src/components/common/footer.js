import React from "react";
import { Link } from "gatsby";
import * as Scroll from "react-scroll";
import { css } from "linaria";

import breakpoints from "../utils/breakpoints";

/**
 * TODO: Add Theme functonality
 */

const footer = css`
  color: #fff;
  @media (min-width: ${breakpoints.md}) {
    padding-left: 4vw;
    padding-right: 4vw;
    padding-bottom: 0;
    margin: 0 auto 3.1rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    padding: 0;
    max-width: 87.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.xxl}) {
    padding: 0;
    max-width: 87.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
const footerContent = css`
  background: #000;
  padding: 3.1rem 8vw 1.5rem;
  position: relative;

  background: #000;
  @media (min-width: ${breakpoints.md}) {
    border-radius: 16px;
    padding-top: 4.65rem;
    padding-left: 4.65rem;
    padding-right: 4.65rem;
  }
  @media (min-width: ${breakpoints.xxl}) {
    padding-top: 4.65rem;
    padding-left: 7.75rem;
    padding-right: 7.75rem;
  }
`;
const top = css`
  background: var(--color-cta);
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4.65rem;
  top: 0;
  transform: translateY(-50%);
  transition: box-shadow 0.3s cubic-bezier(0, 0.89, 0.44, 1);
  will-change: box-shadow;
  &:hover {
    box-shadow: 0 9px 40px 0 rgba(218, 54, 84, 0.65);
    svg {
      transform: translateY(-2px) scale(1);
    }
  }
  svg {
    will-change: transform;
    transform: scale(0.95);
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
  @media (min-width: ${breakpoints.xxl}) {
    right: 7.75rem;
  }
`;
const footerInfo = css`
  display: grid;
  margin-bottom: 1.55rem;
  row-gap: 4.65rem;
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 2fr 7fr;
    margin-bottom: 3.1rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 2fr 5fr;
  }
  @media (min-width: ${breakpoints.xxl}) {
    grid-template-columns: 2fr 4fr;
  }
`;

const fieldset = css`
  margin-top: 20px;
  border: 0;
  .switch {
    position: absolute;
    z-index: 1;
    opacity: 0;
    padding: 0;
    margin: 0;
    overflow: visible;
    &:checked ~ label {
      a:first-child {
        opacity: 0.3;
      }
      a:last-child {
        opacity: 1;
      }
    }
    &:checked ~ label a:hover {
      opacity: 1;
    }
    &:checked ~ label span::after {
      transform: translate3d(20px, 0, 0);
    }
  }
  .switch-label {
    position: absolute;
    z-index: 1;
    padding: 15px;
    margin: 0 28px;
    transition: background-color 0.2s ease-in-out;
    width: 50px;
    height: 30px;
    border-radius: 50px;
    text-align: center;
    background-color: var(--color-cta);
    box-shadow: inset -4px 4px 15px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    a {
      display: flex;
      &:hover {
        opacity: 1;
      }
    }
    .light {
      position: absolute;
      transform: translate3d(0, -50%, 0);
      top: 50%;
      color: #fff;
      transition: opacity 0.15s linear;
      right: 100%;
      margin-right: 10px;
      font-size: 28px;
      &:hover {
        opacity: 1;
      }

      svg {
        width: 21px;
        height: 21px;
      }
    }
    .dark {
      position: absolute;
      transform: translate3d(0, -50%, 0);
      top: 50%;
      color: #fff;
      transition: opacity 0.15s linear;
      text-decoration: none;
      left: 100%;
      margin-left: 4px;
      font-size: 19px;
      opacity: 0.3;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    span {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 0;
      width: 100%;
      &::after {
        position: absolute;
        top: calc(100% + 15px);
        left: 5px;
        width: 20px;
        height: 20px;
        content: "";
        border-radius: 50%;
        background-color: #fff;
        transition: transform 0.2s, background-color 0.2s;
        box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
const footerLogo = css`
  max-width: 2rem;
  height: auto;
`;

const nav = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.55rem;
  color: #fff;
  row-gap: 2.325rem;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: auto auto auto 140px;
  }
  ul {
    margin: 0;
    fonst-size: 0.875rem;
    li {
      margin-bottom: 1.55rem;
      a {
        transition: all 0.15s cubic-bezier(0.7, 0, 1, 0.5);
        color: hsla(0, 0%, 100%, 0.5);
        line-height: 21.7px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
const social = css`
  display: flex;
  @media (min-width: ${breakpoints.lg}) {
    justify-content: flex-end;
  }
  @media (max-width: ${breakpoints.md}) {
    grid-column: 1/2;
  }
  li + li {
    margin-left: 1.55rem;
  }
`;

const copyright = css`
  font-size: 0.8125rem;
  color: hsla(0, 0%, 100%, 0.5);
`;
const Footer = ({ children }) => {
  return (
    <footer className={footer}>
      <div className={`${footerContent} footer-content`}>
        <Link
          to="/"
          onClick={() => Scroll.animateScroll.scrollToTop()}
          className={top}
        >
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
        {children}
        <section className={`${footerInfo} footer-info`}>
          <div>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="317.758"
                height="283.971"
                className={footerLogo}
                viewBox="0 0 317.758 283.971"
              >
                <g fill="#ffffff" stroke="none" strokeWidth="1px">
                  <path
                    d="M26.704 241.324C11.633 241.324 0 230.041 0 216.694V24.651C0 10.607 12.321 0 26.704 0h57.849c51.354 0 77.022 32.858 77.022 67.092 0 23.953-15.398 38.686-35.947 48.605 21.226 8.555 42.453 23.964 42.453 53.755 0 40.051-32.173 71.872-84.903 71.872H26.704zM87.292 94.483c11.981 0 26.365-8.218 26.365-26.704 0-13.009-6.166-24.642-23.966-24.642H47.918v51.346h39.374zm-39.374 43.816v59.562h38.348c22.6 0 33.883-11.295 33.883-29.095 0-19.513-13.693-30.467-31.832-30.467H47.918zM294.143 240.496c11.982 0 23.615 9.592 23.615 21.912 0 12.332-10.281 21.563-23.615 21.563h-91.166c-13.357 0-23.625-9.23-23.625-21.563 0-12.319 11.645-21.912 23.625-21.912h91.166z"
                    stroke="none"
                    fill="#ffffff"
                    strokeWidth="1px"
                  ></path>
                </g>
              </svg>
            </Link>
            <fieldset aria-label="Theme Switcher" className={fieldset}>
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
          <nav className={nav}>
            <div className="company">
              <p>Company</p>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="/">Cookies</Link>
                </li>
              </ul>
            </div>
            <div className="services">
              <p>Services</p>
              <ul>
                <li>
                  <Link to="/">JAMstack Websites</Link>
                </li>
                <li>
                  <Link to="/">Progressive Web Apps</Link>
                </li>
              </ul>
            </div>
            <div className="getInTouch">
              <p>Get In Touch</p>
              <ul>
                <li>
                  <Link to="/">Estimate project</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <ul className={social}>
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
        <p className={copyright}>&copy; Bejamas.io - All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
