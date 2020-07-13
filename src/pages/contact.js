import React from "react";
import Layout from "./../layouts/index";
import { Helmet } from "react-helmet";
import { css } from "linaria";
import breakpoints from "../components/utils/breakpoints";
const Contact = () => {
  const contactHeader = css`
    display: grid;
    row-gap: 0;
    column-gap: 3.1rem;
    grid-template-columns: 100%;
    align-items: flex-start;
    margin: 1.55rem auto 0;
    margin-top: 0;
    max-width: 58.9rem;
    p {
      margin-top: 1.55rem;
      color: var(--color-text-secondary);
      line-height: 1.8;
    }
    @media (min-width: ${breakpoints.sm}) {
      margin-top: 3.1rem;
      grid-template-columns: 65%;
    }
    @media (min-width: ${breakpoints.md}) {
      p {
        margin-top: 2.325rem;
        font-size: 1.25rem;
      }
    }
    @media (min-width: ${breakpoints.lg}) {
      grid-template-columns: 50%;
    }
    p {
    }
  `;

  const map = css``;
  const logo = css``;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Let's Talk</title>
      </Helmet>
      <Layout>
        <section className="section">
          <div className={contactHeader}>
            <h1>Let's Talk</h1>
            <p>
              Tell us about your project, get a quick estimate and a plan for
              making it live.
            </p>
          </div>
          <div>
            <div>
              <ul></ul>
              <ul></ul>
            </div>
            <address></address>
            <a
              href="https://goo.gl/maps/NyoWAgkBwtuL63Yv5"
              rel="noopener noreferrer"
              target="_blank"
              title="Open map in new tab"
              className={map}
            >
              <div className={logo}>
                <svg width="12" height="12" viewBox="0 0 317.758 283.971">
                  <g fill="#FFF">
                    <path d="M26.704 241.324C11.633 241.324 0 230.041 0 216.694V24.651C0 10.607 12.321 0 26.704 0h57.849c51.354 0 77.022 32.858 77.022 67.092 0 23.953-15.398 38.686-35.947 48.605 21.226 8.555 42.453 23.964 42.453 53.755 0 40.051-32.173 71.872-84.903 71.872H26.704zM87.292 94.483c11.981 0 26.365-8.218 26.365-26.704 0-13.009-6.166-24.642-23.966-24.642H47.918v51.346h39.374zm-39.374 43.816v59.562h38.348c22.6 0 33.883-11.295 33.883-29.095 0-19.513-13.693-30.467-31.832-30.467H47.918zM294.143 240.496c11.982 0 23.615 9.592 23.615 21.912 0 12.332-10.281 21.563-23.615 21.563h-91.166c-13.357 0-23.625-9.23-23.625-21.563 0-12.319 11.645-21.912 23.625-21.912h91.166z"></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Contact;
