import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { css } from "linaria";
import breakpoints from "../utils/breakpoints";

const Navbar = () => {
  const nav = css`
      background: var(--color-bg-almost-primary);
      backdrop-filter: blur(16px);
      z-index: 9;
      transition: transform 0.3s cubic-bezier(0, 0.89, 0.44, 1);
      backface-visibility: hidden;
      transform: translateZ(0);
      @media (min-width: ${breakpoints.lg}) {
        position: sticky;
        top: 0;
      }
      @media (max-width: ${breakpoints.lg}) {
        &.is-scrolled.bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          transform: translateY(100%);
          opacity: 0;
        }
        &.open {
          height: 100vh;
          transform: translateY(0);
          opacity: 1;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: auto;
        }
        &.is-scrolled {
          transform: translateY(100%);
        }
      }
      @media (max-width: ${breakpoints.lg}) {
        &.is-scrolled.open,
        &.is-scrolled.show-it {
          transform: translateY(0);
          opacity: 1;
        }
        &.bottom:not(.open) {
          background: var(--color-bg-header);
        }
      }
    `,
    navbar = css`
      align-items: flex-end;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: ${breakpoints.md}) {
        padding: 0.775rem 8vw;
        grid-template-rows: 44px auto;
        z-index: 8;
      }
      @media (min-width: ${breakpoints.md}) {
        padding: 0.775rem 4vw;
      }
      @media (min-width: ${breakpoints.lg}) {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas: "logo nav cta";
        padding: 0 4vw;
        align-items: center;
      }
      @media (min-width: ${breakpoints.xxl}) {
        padding: 0;
        max-width: 87.5rem;
      }

      ${"" /*  
      margin: 0 auto;
      
      @media (max-width: ${breakpoints.md}) {
        padding: 0.775rem 8vw;
        grid-template-rows: 44px auto;
        z-index: 8;
      }
      @media (min-width: ${breakpoints.md}) {
        padding: 0.775rem 4vw;
      }
      @media (max-width: ${breakpoints.lg}) {
        .cta {
          margin-left: 0;
          margin-right: auto;
          flex-direction: row-reverse;
          transition: all 0.5s ease;
        }
      }
      @media (min-width: ${breakpoints.lg}) {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas: "logo nav cta";
        padding: 0 4vw;
        align-items: center;
      }
      @media (min-width: ${breakpoints.xxl}) {
        max-width: 87.5rem;
        padding: 0;
      } */}
    `,
    navBrand = css`
      grid-area: logo;
      z-index: 8;
      @media (max-width: ${breakpoints.lg}) {
        .open & {
          margin-left: auto;
          order: 3;
        }
      }
      .nav-logo {
        max-width: 6.25rem;
        height: 30px;
        margin-top: 0.5rem;
        path {
          fill: var(--color-text-solid);
        }

        @media (min-width: ${breakpoints.lg}) {
          max-width: 9.3rem;
        }
        @media (min-width: ${breakpoints.xl}) {
          max-width: 10.85rem;
        }
      }
      ${"" /* 
      @media (max-width: ${breakpoints.lg}) {
        order: 3;
        margin-left: auto;
      }
      a {
        background-color: transparent;
        .nav-logo {
          height: 30px;
          margin-top: 0.5rem;
          max-width: 6.25rem;
          path {
            
          }

          @media (min-width: ${breakpoints.lg}) {
            max-width: 9.3rem;
          }
          @media (min-width: ${breakpoints.xl}) {
            max-width: 10.85rem;
          }
        }
      } */}
    `,
    menu = css`
      display: none;
      grid-area: nav;
      width: 100%;
      @media (max-width: ${breakpoints.lg}) {
        &.o {
          display: flex;
          flex-wrap: wrap;
          font-size: 1rem;
          text-align: center;
          margin-top: auto;
        }
      }
      @media (min-height: 500px) and (max-width: ${breakpoints.lg}) {
        &.o {
          font-size: 1.125rem;
        }
      }
      @media (min-width: ${breakpoints.lg}) {
        transition: all 0.5s ease;
        display: block;
      }

      ${"" /* 
      .open & {
        display: block;
      }
       */}
    `,
    menuItems = css`
      list-style-type: none;
      justify-content: center;
      margin: 0;
      li {
        margin: 0;
      }
      & > li {
        padding: 0 0.3875rem;
      }
      @media (min-width: ${breakpoints.lg}) {
        display: flex;
        & > li {
          font-size: 0.9375rem;
        }
      }
      @media (min-width: ${breakpoints.xl}) {
        & > li {
          font-size: 1rem;
        }
      }
      & li:hover > ul {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      ${"" /*  
      @media (max-width: ${breakpoints.lg}) {
        width: 100%;
        padding-top: 0.51666666rem;
      }
      
      & > li {
        padding: 0 0.3875rem;
        @media (max-width: ${breakpoints.lg}) {
          padding: 0;
        }
      }
      li {
        margin: 0;
        @media (min-width: ${breakpoints.xl}) {
          font-size: 1rem;
        }
        @media (min-width: ${breakpoints.lg}) {
          font-size: 0.9375rem;
        }
      } */}
    `,
    navLink = css`
      display: flex;
      border-top: 2px solid transparent;
      color: var(--color-text-primary);
      padding: 2.325rem 1.55rem;
      align-items: center;
      &.active,
      &:hover {
        color: var(--color-cta);
      }
      @media (min-width: ${breakpoints.lg}) {
        padding: 2.325rem 0.775rem;
        &.active,
        &:hover {
          border-top: 2px solid var(--color-cta);
        }
      }
      @media (min-width: ${breakpoints.xl}) {
        padding: 2.325rem 1.0333333333332rem;
      }
      ${"" /*  font-size: 1rem;
      font-weight: 500;
     
      
      &:hover,
      &.active {
        color: var(--color-cta);
      }
      @media (min-height: 500px) and (max-width: ${breakpoints.lg}) {
        padding: 0.775rem 0;
      }
     
        padding: 2.325rem 0.775rem;

        &.active {
          
        }
      }
      @media (min-width: ${breakpoints.xl}) {
        padding: 2.325rem 1.033333333332rem;
      }
      @media (min-width: ${breakpoints.lg}) {
      } */}
    `,
    navService = css`
      ${"" /*  &:hover {
        ul {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          @media (max-width: ${breakpoints.lg}) {
            display: none;
          }
        }
      } */}
    `,
    downCaret = css`
      display: none;
      margin-left: 0.775rem;
      @media (min-width: ${breakpoints.md}) {
        display: block;
      }
    `,
    serviceDropdown = css`
      background: var(--color-bg-hover);
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      position: absolute;
      margin: 0;
      list-style: none;
      box-shadow: 0 9px 60px 0 var(--color-bg-shadow-heavy);
      padding: 1.0333333333333332rem 0;
      transition: all 0.3s cubic-bezier(0, 0.89, 0.44, 1);
      transform: translateY(-4px);

      a {
        color: var(--color-text-primary);
        padding: 0.5166666666666666rem 1.9375rem;
        display: block;
        &:hover {
          color: var(--color-cta);
        }
      }
      ${"" /*   background: var(--color-bg-hover);
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      position: absolute;
      margin: 0;
      list-style: none;
      box-shadow: 0 9px 60px 0 var(--color-bg-shadow-heavy);
      padding: 1.0333333333333332rem 0;
      transition: all 0.3s cubic-bezier(0, 0.89, 0.44, 1);
      transform: translateY(-4px);
      li {
        margin: 0;
        padding-left: 0;
        a {
          color: var(--color-text-primary);
          padding: 0.5167rem 1.9375rem;
          display: block;
          &:hover {
            color: var(--color-cta);
          }
        }
      } */}
    `,
    ctaContainer = css`
      justify-self: end;
      display: flex;
      align-items: center;
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      margin-left: auto;
      transition: all 0.5s ease;
      @media (max-width: ${breakpoints.lg}) {
        .open & {
          margin-left: 0;
          margin-right: auto;
          flex-direction: row-reverse;
        }
      }
      .cta {
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s cubic-bezier(0, 0.89, 0.44, 1);
        transform: translate3d(0, -15px, 0);
        filter: blur(14px);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        .is-scrolled.show-it & {
          opacity: 1;
          z-index: 10;
          visibility: visible;
          filter: blur(0);
          transform: translateZ(0);
        }
        @media (max-width: ${breakpoints.lg}) {
          min-width: 0;
          padding: 10px;
          margin-right: 0.775rem;
          .show-it & {
            margin-right: 2.325rem;
          }
        }
        .open & {
          display: none;
        }
      }
      button {
        grid-area: burger;
        font: inherit;
        display: inline-block;
        overflow: visible;
        margin-top: 0.5rem;
        padding: 0;
        cursor: pointer;
        transition-timing-function: linear;
        transition-duration: 0.15s;
        transition-property: opacity, filter;
        text-transform: none;
        color: inherit;
        border: 0;
        background-color: initial;
        outline: 0;

        span {
          position: relative;
          display: inline-block;
          width: 28px;
          height: 24px;
          span {
            transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            transition-duration: 75ms;
            top: 50%;
            margin-top: -2px;
            &,
            &:after,
            &:before {
              position: absolute;
              width: 28px;
              height: 3px;
              transition-timing-function: ease;
              transition-duration: 0.15s;
              transition-property: transform;
              border-radius: 3px;
              background-color: var(--color-text-solid);
              display: block;
            }
            &:before,
            &:after {
              content: "";
            }
            &:before {
              transition: top 75ms ease 0.12s, opacity 75ms ease;
              top: -8px;
            }
            &:after {
              transition: bottom 75ms ease 0.12s, opacity 75ms ease;
              bottom: -8px;
            }
          }
        }
        @media (min-width: ${breakpoints.lg}) {
          display: none;
        }
      }
      &.op button span span {
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: rotate(45deg);
        background-color: var(--color-text-solid);
        &:before {
          top: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
          opacity: 0;
        }
        &:after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 75ms ease,
            transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        }
      }
    `;

  const [isOpen, setOpen] = useState(false);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  let classes = isOpen ? `${nav} open` : `${nav}`;
  classes = scrollY > 250 ? `${classes} is-scrolled` : classes;
  return (
    <header className={`${classes} show-it bottom`}>
      <div className={`${navbar}`}>
        <div className={navBrand}>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1823.23"
              height="288.662"
              className="nav-logo"
              viewBox="0 0 1823.23 288.662"
            >
              <path
                d="M26.62 243.663c-15.011 0-26.62-11.258-26.62-24.57V27.647C0 13.658 12.29 3.075 26.62 3.075H84.3c51.185 0 76.78 32.765 76.78 66.881 0 23.892-15.354 38.56-35.83 48.463 21.157 8.523 42.318 23.889 42.318 53.563 0 39.941-32.085 71.684-84.633 71.684H26.62v-.003zM87.025 97.258c11.946 0 26.275-8.193 26.275-26.619 0-12.957-6.144-24.568-23.889-24.568H47.78v51.188h39.245v-.001zm-39.244 43.683v59.369H86c22.524 0 33.791-11.25 33.791-29.01 0-19.453-13.648-30.359-31.742-30.359H47.781zM372.293 243.663h-90.436c-16.721 0-31.729-5.805-31.729-24.229V27.303c0-11.939 11.253-24.229 26.276-24.229h92.476c12.975 0 23.89 10.24 23.89 22.181 0 12.292-10.915 21.159-23.89 21.159h-70.977v54.941h64.499c11.94 0 23.549 9.209 23.549 21.502 0 12.277-10.245 21.839-23.549 21.839h-64.499v55.613h74.39c12.632 0 23.891 9.561 23.891 21.172 0 12.293-10.913 22.182-23.891 22.182zM579.079 163.464c0 51.861-18.422 83.271-79.164 83.271-12.975 0-39.254-1.365-39.254-23.547 0-13.656 12.631-21.516 22.182-21.516 7.854 0 12.293 2.053 20.816 2.053 22.861 0 27.645-15.354 27.645-40.264V21.837C531.303 9.901 541.544 0 555.195 0c12.618 0 23.885 10.243 23.885 21.838l-.001 141.626zM1139.74 225.235c0 11.6-10.93 21.5-23.553 21.5-12.961 0-24.229-9.9-24.229-21.5V107.83l-38.9 76.445c-4.438 8.863-12.977 12.961-22.523 12.961-9.219 0-17.744-4.098-22.184-12.961l-38.9-76.445v117.406c0 11.6-11.268 21.5-24.57 21.5-12.977 0-23.207-9.9-23.207-21.5V22.524c0-12.963 10.572-22.521 24.57-22.521 10.916 0 19.451 4.438 23.891 13.313l60.74 120.456 60.742-120.796C1096.4 3.075 1105.605 0 1115.164 0c13.99 0 24.576 10.243 24.576 22.522v202.713zM1409.301 217.384l-66.543-194.178C1337.977 9.56 1331.148 0 1314.771 0s-23.203 9.901-27.646 23.205l-66.543 194.178c-.682 1.709-1.014 5.807-1.014 7.514 0 12.963 11.256 21.84 24.563 21.84 8.193 0 19.119-6.146 22.521-16.035 0 0 46.754-154.6 48.119-165.179 1.365 10.579 47.781 165.179 47.781 165.179 3.412 9.551 14.326 16.035 23.201 16.035 13.99 0 24.574-8.877 24.574-21.84.001-1.707-.341-5.804-1.026-7.513zM843.892 217.384L777.346 23.206C772.563 9.56 765.738 0 749.363 0c-16.38 0-23.209 9.901-27.651 23.205l-66.543 194.178c-.685 1.709-1.014 5.807-1.014 7.514 0 12.963 11.255 21.84 24.56 21.84 8.195 0 19.12-6.146 22.525-16.035 0 0 46.752-154.6 48.123-165.179 1.362 10.579 47.776 165.179 47.776 165.179 3.414 9.551 14.326 16.035 23.201 16.035 13.988 0 24.573-8.877 24.573-21.84.001-1.707-.337-5.804-1.021-7.513zM1580.252 150.825c-7.17-3.061-15.693-6.129-24.912-9.202-33.438-10.244-69.619-21.5-69.619-70.984 0-44.019 30.715-70.639 79.18-70.639 20.133 0 68.582 5.121 68.582 30.718 0 11.257-8.865 21.499-23.879 21.499-6.145 0-10.926-2.049-16.729-3.754-6.479-2.394-13.986-5.121-25.928-5.121-16.729 0-32.426 5.803-32.426 25.931 0 15.011 8.537 20.134 14.332 22.864 8.875 4.439 17.068 7.17 24.572 9.219 33.447 10.574 69.961 22.182 69.961 70.625 0 47.453-36.172 74.756-84.977 74.756-25.254 0-73.033-8.877-73.033-32.779 0-10.916 9.902-21.5 22.523-21.5 5.123 0 10.584 1.707 17.063 4.1 8.193 2.732 19.119 6.83 33.789 6.83 23.549 0 35.488-10.588 35.488-29.355.003-15.356-7.843-20.473-13.987-23.208zM1799.682 245.325c11.953 0 23.549 9.551 23.549 21.84 0 12.281-10.229 21.498-23.549 21.498h-90.879c-13.303 0-23.549-9.217-23.549-21.498 0-12.289 11.611-21.84 23.549-21.84h90.879z"
                stroke="none"
                fill="#000000"
                strokeWidth="1px"
              ></path>
            </svg>
          </a>
        </div>
        <nav className={isOpen ? `${menu} o` : menu}>
          <ul className={menuItems}>
            <li>
              <Link activeClassName="active" className={navLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about" className={navLink}>
                About
              </Link>
            </li>
            <li className={navService}>
              <Link
                activeClassName="active"
                className={navLink}
                to="/services"
                partiallyActive
              >
                Services
                <svg
                  width="10"
                  height="6"
                  fill="none"
                  display="block"
                  className={downCaret}
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <ul className={serviceDropdown}>
                <li>
                  <a href="/services/jamstackServices">JAMstack websites</a>
                </li>
                <li>
                  <a href="/services/pwaServices">Progressive Web Apps</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                activeClassName="active"
                className={navLink}
                to="/careers"
                partiallyActive
              >
                Careers
              </Link>
            </li>
            {/* <li>
              <Link
                activeClassName="active"
                className={navLink}
                to="/blog"
                partiallyActive
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link activeClassName="active" className={navLink} to="/contact">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link activeClassName="active" to="/ask" className={navLink}>
                Ask
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className={isOpen ? `${ctaContainer} op` : ctaContainer}>
          <Link to="/estimate-project" className="cta">
            Work with us!
          </Link>
          <button type="button" onClick={() => setOpen(!isOpen)}>
            <span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
