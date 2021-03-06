import React from "react";
import Header from "../components/common/header";
import CaseStudy from "../components/home/caseStudy";
import JamUses from "../components/home/jamUses";
import Testimonial from "../components/home/testimonial";
import TechUsed from "../components/common/tech";
import Products from "../components/home/products";
import WorldMap from "../components/home/worldmap";
import Stories from "../components/home/stories";
import Layout from "./../layouts/index";
import FooterCTA from "./../components/common/footerCTA";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/App.scss";
import { Helmet } from "react-helmet";
import { css } from "linaria";
import breakpoints from "../components/utils/breakpoints";

/**
 * TODO: Make it responsive
 */
export default () => {
  const data = useStaticQuery(graphql`
    fragment ImageContent on ContentfulAsset {
      title
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    query {
      hero: contentfulAsset(title: { eq: "hero-opt" }) {
        ...ImageContent
      }
      i30: contentfulAsset(title: { eq: "30" }) {
        ...ImageContent
      }
      i9: contentfulAsset(title: { eq: "9" }) {
        ...ImageContent
      }
    }
  `);
  const subheading = `jamstack developers for hire`,
    title = (
      <>
        Meet faster,
        <br />
        more secure web.
      </>
    ),
    desc = `Let us maximize your business potential with the latest and innovative technologies.`,
    cta = `Work with us!`;
  const trustedCompanies = css`
    margin: auto 0;
    h3 {
      font-size: 0.875rem;
      margin-bottom: 2.325rem;
      margin-top: 2.325rem;
      letter-spacing: 0.1875rem;
      text-transform: uppercase;
      font-family: Poppins, sans-serif;
      color: var(--color-text-secondary);
    }
    ul {
      display: flex;
      flex-wrap: wrap;

      color: var(--color-text-primary);

      li {
        margin-bottom: 1.55rem;
        svg {
          max-width: 100px;
          height: auto;
        }
      }
      li:not(:last-child) {
        margin-right: 2.325rem;
        padding-left: 0;
      }
    }
  `;
  const flo = css`
    position: relative;
    top: -3px;
    width: 35px;
    max-width: auto;
    height: 28px;
    .flo_svg__cls-3 {
      fill: #b7c7d3;
    }
  `;
  const i30 = css`
    position: absolute;
    overflow: hidden;
    top: 90%;
    max-width: 140px;
    right: 1%;
    width: 100%;
    @media (max-width: ${breakpoints.xl}) {
      display: none !important;
    }
  `;
  const i9 = css`
    position: absolute;
    overflow: hidden;
    top: 85%;
    max-width: 230px;
    right: 20%;
    transform: rotate(-80deg);
    width: 100%;
    @media (max-width: ${breakpoints.xl}) {
      display: none !important;
    }
  `;
  const extra = (
    <div className={trustedCompanies}>
      <h3>TRUSTED BY INNOVATIVE COMPANIES</h3>
      <ul>
        <li>
          <svg width="276" height="58" viewBox="0 0 276 58">
            <g fill="currentColor">
              <path d="M30 35h3.001v3.001H30V35zm-6 0h3.001v3.001H24V35zm6-6h3.001v3.001H30V29zm-6 0h3.001v3.001H24V29zm0-6h3.001v3.001H24V23zm-6 0h3.001v3.001H18V23zm-6 0h3.001v3.001H12V23zm6-6h3.001v3.001H18V17zm-6 0h3.001v3.001H12V17zm0-6h3.001v3.001H12V11zm-6 0h3.001v3.001H6V11zm-6 0h3.001v3.001H0V11zm6-6h3.001v3.001H6V5zM0 5h3.001v3.001H0V5zM30 23h3.001v3.001H30V23zm0-6l3 .005V20h-2.992L30 17zm-6 0h3.001v3.001H24V17zm6-6h3.001v3.001H30V11zm-6 0h3.001v3.001H24V11zm-6 0h3.001v3.001H18V11zm12-6h3.001v3.001H30V5zm-6 0h3.001v3.001H24V5zm-6 0h3.001v3.001H18V5zm-6 0h3.001v3.001H12V5zm67.333 35.196L58.691 9.889h-.21v23.794c0 3.939.368 4.202 2.469 4.622l1.89.367v1.471H51.917v-1.47l1.576-.368c1.68-.368 2.258-.63 2.258-4.36V9.417c0-3.204-.473-3.467-2.048-3.834l-1.786-.368v-1.47H65.73l14.39 21.218h.21v-14.76c0-3.939-.315-4.149-2.468-4.621l-1.996-.368v-1.47h11.03v1.47l-1.576.368c-1.68.367-2.259.63-2.259 4.359v30.254h-3.729zm20.795.577c-9.139 0-13.708-5.462-13.708-14.391 0-9.14 6.775-14.234 13.708-14.234 7.249 0 11.766 3.624 11.923 13.13H94.718c.158 8.615 3.415 10.978 8.824 10.978 3.257 0 5.726-.945 7.721-1.996v1.734c-1.838 2.048-5.83 4.78-11.135 4.78zm-.42-26.63c-2.678 0-4.78 2.522-4.99 9.14l8.982-.473c0-6.355-.84-8.666-3.992-8.666zm24.161 26l-7.983-21.43c-1.156-3.098-1.786-3.729-3.152-4.149l-.998-.315v-1.366h14.812v1.366l-1.156.315c-.893.263-1.313.735-1.313 1.628 0 .788.368 1.944.84 3.414l3.887 12.133h.315l3.887-11.292-.578-1.734c-1.103-3.151-1.575-3.781-2.73-4.149l-1.051-.315v-1.366h14.654v1.366l-1.418.368c-.998.262-1.471.945-1.471 2.048 0 .683.21 1.68.63 2.941l3.992 12.133h.263l3.781-12.133c.42-1.365.63-2.258.63-2.994 0-1.05-.472-1.68-1.628-1.995l-1.418-.368v-1.366h9.717v1.366l-.945.315c-1.366.473-2.049 1.26-3.31 4.727l-7.563 20.852h-4.517l-5.672-16.177h-.158l-5.882 16.177h-4.465zm32.827 0v-1.418l1.366-.368c1.733-.472 1.943-.735 1.943-2.994v-19.38h-3.676v-1.314l3.676-1.838v-1.418c0-7.039 5.043-11.24 13.184-11.24 4.15 0 6.618 1.47 6.618 4.201 0 1.839-1.156 2.942-3.152 2.942-2.363 0-3.519-.84-3.729-3.572-.157-1.313-.368-1.523-.998-1.523-1.89 0-3.571 1.156-3.571 5.462v5.2h6.092l-.735 3.1h-5.357v19.275c0 2.469.157 2.784 1.838 3.047l1.996.42v1.418h-15.495zm18.489 0v-1.418l1.365-.368c1.734-.472 1.944-.735 1.944-2.994V19.03c0-2.259-.263-2.417-1.734-3.414l-1.733-1.156v-1.05l11.083-1.261.577.42-.105 3.624h.21c1.629-1.733 4.622-4.044 7.669-4.044 2.521 0 4.044 1.366 4.044 3.94 0 2.52-1.576 3.939-3.624 3.939-2.416 0-3.046-.736-4.044-2.364-.315-.578-.63-.683-1.103-.683-.946 0-2.154.683-2.89 1.366v17.017c0 2.469.211 2.732 1.787 2.994l1.733.368v1.418h-15.18zm36.421.63c-7.616 0-14.234-4.622-14.234-14.234 0-10.084 7.143-14.391 14.234-14.391 7.616 0 14.286 4.57 14.286 14.129 0 10.084-7.038 14.496-14.286 14.496zm.158-2.048c3.151 0 5.305-1.838 5.305-11.923 0-10.61-2.049-12.606-5.62-12.606-3.31 0-5.253 2.416-5.253 11.45 0 10.768 1.733 13.079 5.568 13.079zm14.204 1.418v-1.418l1.365-.368c1.733-.472 1.943-.735 1.943-2.994V19.03c0-2.259-.262-2.417-1.733-3.414l-1.733-1.156v-1.05l11.082-1.261.578.368-.105 3.361h.21c2.784-1.996 6.25-3.729 10.085-3.729 4.464 0 6.88 2.311 6.88 7.038v16.177c0 2.311.21 2.574 1.891 2.994l1.366.368v1.418h-14.654v-1.418l1.26-.315c1.576-.42 1.734-.578 1.734-3.047V21.235c0-3.204-1.156-4.202-3.625-4.202-1.838 0-3.729.42-4.884.682v17.648c0 2.522.157 2.627 1.733 3.047l1.26.315v1.418h-14.653zm41.463.63c-4.727 0-7.3-2.1-7.3-7.248V15.982h-3.31v-1.26c4.097-1.576 7.249-4.622 8.72-8.824h2.993v6.985h6.986l-.683 3.1h-6.303V33c0 2.626.788 3.676 3.414 3.676 1.26 0 2.836-.262 3.782-.472v1.47c-1.26 1.156-3.887 3.1-8.299 3.1zM162.788 57.776v-9.657h2.795v9.657h-2.795zm8.451 0v-9.657h3.12l3.093 5.443V48.12h2.418v9.657h-2.674l-3.526-6.064v6.064h-2.43zm17.785.162c-2.701 0-4.079-1.134-4.16-3.228h2.634c.067.689.378 1.256 1.526 1.256.797 0 1.242-.392 1.242-.959 0-.594-.364-.756-1.526-.932-2.728-.324-3.646-1.134-3.646-3.08 0-1.741 1.431-3.01 3.74-3.01 2.324 0 3.634.972 3.81 3.01h-2.567c-.094-.688-.486-1.039-1.242-1.039-.743 0-1.121.338-1.121.824 0 .54.297.783 1.499.945 2.445.27 3.7.905 3.7 2.999 0 1.769-1.404 3.214-3.89 3.214zm13.03 0c-2.728 0-4.281-1.378-4.281-4.079v-5.74h2.769v5.619c0 1.364.337 2.026 1.512 2.026 1.148 0 1.513-.622 1.513-2.067V48.12h2.796v5.7c0 2.809-1.648 4.12-4.309 4.12zm9.857-.162v-9.657h3.781c2.526 0 3.93 1.027 3.93 3.066v.054c0 1.378-.729 2.148-1.742 2.54l2.31 3.997h-2.917l-1.959-3.458h-.648v3.458h-2.755zm2.755-5.254h.891c.932 0 1.391-.392 1.391-1.175v-.054c0-.783-.486-1.094-1.377-1.094h-.905v2.323zm9.654 5.254l3.093-9.657h3.579l3.066 9.657h-2.931l-.513-1.796h-3.201l-.514 1.796h-2.58zm4.7-7.415l-1.067 3.714h2.12l-1.053-3.714zm9.897 7.415v-9.657h3.12l3.093 5.443V48.12h2.417v9.657h-2.674l-3.525-6.064v6.064h-2.431zm18.784.162c-3.377 0-5.038-1.972-5.038-4.93V52.9c0-2.971 2.107-4.93 4.93-4.93 2.512 0 4.254 1.162 4.484 3.715h-2.85c-.108-.986-.648-1.526-1.62-1.526-1.243 0-2.027.972-2.027 2.728v.108c0 1.742.743 2.728 2.067 2.728.972 0 1.661-.513 1.796-1.58h2.755c-.189 2.498-1.999 3.795-4.497 3.795zm9.465-.162v-9.657h6.672v2.134h-3.917v1.661h3.12v1.972h-3.12v1.756h4.133v2.134h-6.888z" />
            </g>
          </svg>
        </li>
        <li>
          <svg
            className="mambu"
            width="768"
            height="157.66"
            viewBox="0 0 768 157.333"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M632.608 144.299h-31.123a7.83 7.83 0 01-7.834-7.843V35.172a7.83 7.83 0 017.834-7.841h30.12c18.336 0 31.174 11.846 31.174 31.036 0 10.012-5 18.856-13.504 24.694 10.001 5.84 16.836 15.852 16.836 28.032 0 20.523-13.502 33.206-33.503 33.206zM604.355 78.62h24.561c13.416 0 23.655-9.157 23.655-20.778 0-13.207-7.238-20.958-20.654-20.958h-27.562zm-.014 55.079l28.624.067c13.724 0 23.052-7.151 23.052-22.479 0-12.43-11.262-22.307-25.869-22.307l-25.807-.066V133.7"
            />
            <path
              fill="currentColor"
              d="M283.296 120.97s1.27-4.198 2.072-6.113l34.313-80.185c2.52-5.66 4.951-7.341 8.167-7.341h4.23l5.407 117.008-11.269-.006-3.636-80.702c-.127-2.775-.077-8.678-.077-8.678s-2.003 6.058-3.127 8.702l-36.08 83.074-36.08-83.074c-1.123-2.644-3.127-8.702-3.127-8.702s.05 5.903-.076 8.678l-3.637 80.702-11.299.006 5.407-117.008h4.261c3.216 0 5.646 1.681 8.166 7.341l34.313 80.185c.801 1.915 2.072 6.112 2.072 6.112m231.092 0s1.27-4.197 2.072-6.112l34.313-80.185c2.519-5.66 4.95-7.341 8.166-7.341h4.232l5.406 117.008-11.27-.006-3.636-80.702c-.127-2.775-.078-8.678-.078-8.678s-2.004 6.058-3.125 8.702l-36.08 83.074-36.081-83.074c-1.122-2.644-3.126-8.702-3.126-8.702s.05 5.903-.077 8.678l-3.636 80.702-11.299.006 5.407-117.008h4.26c3.216 0 5.647 1.681 8.165 7.341l34.314 80.185c.802 1.915 2.073 6.112 2.073 6.112m-135.57-30.3h40.59l-10.097-43.237c-1.528-6.039-5.159-8.859-9.76-9.03l-.419-.002c-4.815 0-8.64 2.797-10.217 9.032zm26.11 11.44h-28.777l-8.375 36.252c-1.14 4.94-4.107 5.964-6.33 5.974l-6.609.004 23.122-98.164c2.793-12.414 11.04-18.844 21.173-18.844l.55.013c9.866.243 17.846 6.655 20.585 18.83l23.12 98.165-6.607-.004c-2.224-.01-5.19-1.034-6.33-5.974l-8.375-36.252h-17.147"
            />
            <g
              clipPath="url(#mambu_svg__a)"
              transform="matrix(1.33333 0 0 -1.33333 0 157.333)"
            >
              <path
                fill="currentcolor"
                d="M515.898 39.389l.072 58.113s8.388 1.24 8.388-7.749V39.224c0-11.286 6.9-21.722 21.395-21.722 14.496 0 21.395 10.291 21.395 21.722v50.529c0 8.989 8.389 7.749 8.389 7.749l.071-58.113c0-17.501-10.757-29.869-29.85-29.872-19.101.003-29.86 12.298-29.86 29.872"
              />
              <path
                fill="currentColor"
                d="M8.582 89.156c8.097 13.221 21.406 23.22 37.782 26.694 16.121 3.421 33-.577 45.689-9.074-2.874-1.25-12.937 4.376-19.917-16.185-4.22-12.432-14.81-14.96-29.814-4.085-21.05 15.257-28.839.29-33.74 2.65"
              />
              <path
                fill="currentcolor"
                d="M31.321 59.628c11.355-19.541 36.918-28.284 48.765-8.95 6.854 11.187 5.458 29.352 9.012 39.614 2.006 5.79 7.813 10.103 15.42 3.465 4.713-4.114 8.628-12.282 10.816-21.112C123.11 41.283 104.069 9.55 72.686 1.737 41.303-6.075 9.417 13.208 1.588 44.557c-2.732 10.941-2.44 24.866 4.884 31.099 3.865 3.29 10.572 3.457 14.956-.643 4.622-4.32 6.274-9.156 9.893-15.385"
              />
            </g>
          </svg>
        </li>
        <li>
          <svg
            id="flo_svg__Layer_1"
            data-name="Layer 1"
            viewBox="0 0 141.14 117.66"
            className={flo}
          >
            <path
              fill="currentColor"
              d="M238.53 169.11a30.12 30.12 0 00-3.58-5.43c-2.81-3.4-5.86-6.59-8.79-9.88-3.66-4.12-11.34-12.64-11.48-12.81-.26-.32-.45-.47-.65-.48s-.39.16-.65.48c-.14.17-7.82 8.69-11.48 12.81-2.93 3.29-6 6.48-8.79 9.88a30.12 30.12 0 00-3.58 5.43 27.64 27.64 0 00-2.75 16.16 26.33 26.33 0 0012.73 20.12 26.39 26.39 0 0029.06 0 26.33 26.33 0 0012.73-20.12 27.64 27.64 0 00-2.77-16.16zm-8.18 15.07c0 .41-.13.81-.21 1.2a16.56 16.56 0 01-32.24 0c-.08-.39-.16-.79-.21-1.2-.73-5.72 1.26-10.53 4.93-14.74s7.26-8.13 10.88-12.2a.6.6 0 011 0c3.62 4.07 7.3 8.09 10.88 12.2s5.71 9.02 4.97 14.74zM214 137.54h-19.2a5.07 5.07 0 01-5.13-4.79c-.26-3.15 1.37-5.6 4.1-6.13a6.27 6.27 0 011.22-.09h38a5.5 5.5 0 010 11H214"
              transform="translate(-100.36 -126.5)"
            />
            <path
              className="flo_svg__cls-3"
              d="M58.09 106.03h-.04l-6.67-9.42h-4.83v20.63h5.63l.01-11.93h.04l4.63 6.79h2.54l4.5-6.87h.04v12.01h5.65V96.61h-5.14l-6.36 9.42z"
            />
            <path
              className="flo_svg__cls-3"
              d="M185.48 222.77a11.37 11.37 0 00-7.46 2.5 11.33 11.33 0 00.08 16.51 11.3 11.3 0 007.3 2.38 11.19 11.19 0 007.47-2.51 10.31 10.31 0 003.48-8.19 10.54 10.54 0 00-3.23-8 11.11 11.11 0 00-7.64-2.69zm-.08 17c-3.14 0-5.05-2.38-5.05-6.28s1.87-6.32 5.05-6.32 5 2.42 5 6.32-1.82 6.25-5 6.25z"
              transform="translate(-100.36 -126.5)"
            />
            <path
              className="flo_svg__cls-3"
              d="M112.71 100.86l1.4-4.25h-14.09v20.63h13.71v-4.25h-8.11v-4.2h7.09v-4.03h-7.09v-3.9h7.09zM133.45 96.61l-.01 12.31h-.04l-9.38-12.31h-5.51v20.63h5.59l.01-12.69h.04l9.72 12.69h5.22V96.61h-5.64z"
            />
            <path
              className="flo_svg__cls-3"
              d="M119.7 237.61a3.27 3.27 0 00-.85-.77 2.94 2.94 0 00-1-.38 3.11 3.11 0 001.71-1.06 3.3 3.3 0 00.69-2.17 3.53 3.53 0 00-.25-1.3 3.34 3.34 0 00-.76-1.15 4 4 0 00-1.29-.82 4.85 4.85 0 00-1.82-.32h-8v14.09h8.24a4.8 4.8 0 001.81-.31 3.59 3.59 0 001.3-.83 3.31 3.31 0 00.78-1.23 4.37 4.37 0 00.25-1.45 3.73 3.73 0 00-.21-1.25 3.8 3.8 0 00-.6-1.05zm-8-4.91h3.53a1.25 1.25 0 01.9.33 1.2 1.2 0 010 1.69 1.25 1.25 0 01-.9.33h-3.53zm4.68 7.62a1.45 1.45 0 01-1 .35h-3.66v-2.54h3.66a1.39 1.39 0 011 .37 1.25 1.25 0 01.36.9 1.19 1.19 0 01-.33.92z"
              transform="translate(-100.36 -126.5)"
            />
            <path
              className="flo_svg__cls-3"
              d="M29.05 108.34l-3.07-5.19h-4.09l5.34 8.4v5.69h3.63v-5.69l5.33-8.4h-4.12l-3.02 5.19z"
            />
            <path
              fill="currentColor"
              d="M193.72 207.77c-.26-.23-.56-.42-.81-.65a54.51 54.51 0 01-6.78-8.41 2 2 0 00-1.79-.92c-4.25 0-10.14-.07-14.39-.33-3.63-.21-5.7-1.82-6.66-5.32a13.4 13.4 0 01-.44-3.46v-56.45a5.32 5.32 0 00-5.73-5.72h-23.43a41.36 41.36 0 00-7.62.58c-8.38 1.53-14.19 6-16.61 14.43a40.63 40.63 0 00-1.25 12.08c0 1.79.16 1.65-1.61 1.65h-.85a4.86 4.86 0 00-4.86 3.1 5.53 5.53 0 00.84 6 5.16 5.16 0 004.21 1.77c2.27 0 2.27 0 2.27 2.31v34.8a5.43 5.43 0 1010.86-.05v-35.74c0-1.32 0-1.32 1.28-1.32h9.46a5.37 5.37 0 002.13-.36 5.47 5.47 0 003.32-6.13 5.35 5.35 0 00-5.37-4.41h-9.84c-.73 0-1-.21-1-1 .05-1.29 0-2.58 0-3.87a18.1 18.1 0 011.11-5.73c1.66-4.32 5.81-7.07 11-7.11 6.35-.06 11.9 0 18.08 0h1.2c1.54 0 1.54 0 1.54 1.56v49.74c0 3.82 0 8.32 1.55 11.84a11.65 11.65 0 008.53 7.09 47.52 47.52 0 007.93.7c7.46.12 15.93.13 23.4.18.3 0 .64 0 .72-.23s-.11-.39-.39-.62z"
              transform="translate(-100.36 -126.5)"
            />
          </svg>
        </li>
        <li>
          <svg width="775.15" height="159.18" viewBox="0 0 775.15 159.18">
            <g fill="currentColor">
              <path
                d="M120.21 17.964l-6.34-2.22L70.17.364c-1.75-.61-2.45.21-1.57 1.84 0 0 .43.79 1.55 2.71 6.95 11.36 25.65 36.35 25.65 36.35 1.11 1.47.61 2.13-1.11 1.45l-13.27-4.26a11.07 11.07 0 01-5.28-3.5l-5.6-7.65a7.74 7.74 0 00-5.3-2.85h-4.18a7.79 7.79 0 00-5.31 2.86l-5.63 7.69a11.15 11.15 0 01-5.27 3.52l-12.95 4.21c-1.71.68-2.21 0-1.11-1.45 0 0 18.71-25 25.65-36.35 1.17-2 1.68-2.92 1.68-2.92.88-1.62.19-2.43-1.55-1.8l-42.61 15.49c-1.73.63-4.58 1.65-6.32 2.26l-4.47 1.57A5.11 5.11 0 000 24.014v58.65a13.17 13.17 0 001.85 6.16l5.31 8.07a13.32 13.32 0 011.85 6.17v15.32a9.18 9.18 0 002.39 5.71l34.83 34.26c1.31 1.3 2.24.85 2.07-1 0 0-2.37-24.48-4.61-39.17s-9.32-31.92-9.32-31.92a6.5 6.5 0 00-4.61-3.56l-5.72-.8a4.58 4.58 0 01-3.7-3.8l-1.05-9.29a2.23 2.23 0 012.89-2.58l24.07 5.55a3.71 3.71 0 012.79 4.07l-2.65 18.44a6.56 6.56 0 002.14 5.43l12.77 10.24a4.25 4.25 0 005.19-.07l12-10.11a6.73 6.73 0 002.08-5.49l-2.65-18.44a3.7 3.7 0 012.8-4l25-5.59a2.25 2.25 0 012.9 2.6l-1.05 9.29a4.45 4.45 0 01-3.71 3.72l-8.24 1a5.42 5.42 0 00-4.23 3.63s-4.16 15.14-7.45 31.62-5.26 39.32-5.26 39.32c-.16 1.84.78 2.29 2.1 1l34.83-34.26a9.23 9.23 0 002.39-5.71v-15.41a12.21 12.21 0 012-6.08l6-8.24a12.24 12.24 0 002-6.08v-58.65a5.11 5.11 0 00-3.17-4.48z"
                fillRule="evenodd"
              />
              <path d="M244.23 128.184a4.32 4.32 0 01-2.91 4.21 5.18 5.18 0 01-2.28.56q-2.53 0-3.68-3.22l-7.47-19.78h-40.16l-7.22 19.78q-1.14 3.23-3.8 3.22a4.46 4.46 0 01-2.16-.56 4.34 4.34 0 01-3-4.21 5.689 5.689 0 01.51-2.38l30.53-82.2q1.51-3.92 5.2-3.92h.25q3.42 0 4.94 3.92l30.78 82.2a5.69 5.69 0 01.47 2.38zm-52.83-28.33h32.66l-16.6-44.18zM293.45 64.994a6.37 6.37 0 010 7.44 4.31 4.31 0 01-3.36 1.33q-11.4 0-17.42 5.19t-6 14.31v34.64a5.37 5.37 0 01-1.2 3.72 4.91 4.91 0 01-6.72 0 5.37 5.37 0 01-1.2-3.72v-59.19a5.37 5.37 0 011.2-3.72 4.91 4.91 0 016.72 0 5.37 5.37 0 011.2 3.72v7.43a24.4 24.4 0 019.63-9.32 29 29 0 0113.76-3.16 4.35 4.35 0 013.39 1.33zM394.47 69.694q5 6 4.94 20.06v38.15q0 5.06-4.56 5.05t-4.56-5.05v-38.15q0-8.55-2.78-12.27t-9.25-3.72h-5.2c-5.06 0-8.7 1.24-10.89 3.72s-3.29 6.57-3.29 12.27v38.15q0 5.06-4.57 5.05t-4.56-5.05v-38.15q0-8.55-2.78-12.27t-9.25-3.72h-5.19q-7.61 0-10.9 3.72t-3.29 12.27v38.15q0 5.06-4.56 5.05t-4.56-5.05v-59.19q0-5.06 4.56-5t4.56 5v4.07a20.94 20.94 0 017.09-7 19.75 19.75 0 019.63-2.17h2.66q7.47 0 11.78 2.46a16.21 16.21 0 016.72 8.06 21.059 21.059 0 016.9-8.06 18.21 18.21 0 019.94-2.46h5.2q11.27.05 16.21 6.08zM421.77 126.504q-5.88-6.45-5.89-20.06v-16.13q0-13.74 5.83-20.2t18.24-6.45h10.39q12.42 0 18.24 6.45t5.83 20.2v16q0 13.61-5.83 20.13t-18.24 6.52h-10.39q-12.28-.01-18.18-6.46zm28.57-3.65q5.82 0 9-1.54a9.13 9.13 0 004.56-5.05 28 28 0 001.4-10v-16a28 28 0 00-1.4-10 9.16 9.16 0 00-4.56-5.05q-3.16-1.54-9-1.54h-10.39q-5.82 0-9 1.47a8.78 8.78 0 00-4.56 5.05 28.59 28.59 0 00-1.4 10v16.26a27.45 27.45 0 001.4 9.82 9.05 9.05 0 004.56 5.05q3.17 1.54 9 1.54zM528.06 64.994a6.37 6.37 0 010 7.44 4.3 4.3 0 01-3.36 1.33q-11.4 0-17.42 5.19t-6 14.31v34.64a5.37 5.37 0 01-1.2 3.72 4.9 4.9 0 01-6.71 0 5.32 5.32 0 01-1.21-3.72v-59.19a5.32 5.32 0 011.21-3.72 4.9 4.9 0 016.71 0 5.37 5.37 0 011.2 3.72v7.43a24.4 24.4 0 019.63-9.32 29 29 0 0113.81-3.16 4.33 4.33 0 013.34 1.33zM596.53 70.114q5.82 6.47 5.83 20.2v16q0 13.61-5.83 20.13t-18.24 6.52h-4.82q-14.19 0-20.52-8.13v3.08a5.37 5.37 0 01-1.2 3.72 4.91 4.91 0 01-6.72 0 5.37 5.37 0 01-1.2-3.72v-88.09a5.37 5.37 0 011.2-3.72 4.91 4.91 0 016.72 0 5.37 5.37 0 011.2 3.72v32q6.33-8.15 20.52-8.14h4.82q12.41-.02 18.24 6.43zm-3.3 20.2a28.42 28.42 0 00-1.39-10 9.16 9.16 0 00-4.56-5.05q-3.16-1.54-9-1.54h-4.82q-9.37 0-14.95 2.88t-5.57 8.48v26.37q0 5.61 5.57 8.49t14.95 2.87h4.82q5.82 0 9-1.54a9.13 9.13 0 004.56-5.05q1.4-3.51 1.39-10zM622.12 127.904q-4.56-5-4.56-15.43v-72.65a5.37 5.37 0 011.2-3.72 4.91 4.91 0 016.72 0 5.37 5.37 0 011.2 3.72v72.63q0 6 2 8.21t7.38 2.19a4.51 4.51 0 013.49 1.33 6.37 6.37 0 010 7.44 4.47 4.47 0 01-3.49 1.33q-9.38 0-13.94-5.05zM659.3 126.504q-5.9-6.45-5.89-20.06v-16.13q0-13.74 5.83-20.2t18.24-6.45h10.39q12.41 0 18.24 6.45t5.83 20.2v16q0 13.61-5.83 20.13t-18.24 6.52h-10.39q-12.28-.01-18.18-6.46zm28.57-3.65q5.82 0 9-1.54a9.13 9.13 0 004.56-5.05 28 28 0 001.4-10v-16a28 28 0 00-1.4-10 9.16 9.16 0 00-4.56-5.05q-3.16-1.54-9-1.54h-10.39q-5.83 0-9 1.47a8.84 8.84 0 00-4.56 5.05 28.62 28.62 0 00-1.39 10v16.26a27.481 27.481 0 001.39 9.82 9.13 9.13 0 004.56 5.05q3.17 1.54 9 1.54zM775.15 127.904a5 5 0 01-1.9 3.79 4.77 4.77 0 01-3 1.26c-1.27 0-2.41-.75-3.42-2.24l-18.5-26.51-17.6 26.37c-1 1.59-2.2 2.38-3.55 2.38a4.53 4.53 0 01-2.79-1.26 4.88 4.88 0 01-2.15-3.93 5.771 5.771 0 011.14-3.22l19.13-28.62-16.6-23.84a5.819 5.819 0 01-1.14-3.23 5.3 5.3 0 012-3.93 4.63 4.63 0 012.91-1.26c1.27 0 2.45.75 3.55 2.24l15.83 22.73 16-22.87a4.26 4.26 0 013.42-2.1 4.66 4.66 0 012.91 1.26 4.89 4.89 0 012 3.79 5.82 5.82 0 01-1.14 3.23l-17.49 25 19.3 27.6a6 6 0 011.09 3.36z" />
            </g>
          </svg>
        </li>
      </ul>
    </div>
  );
  const shapes = (
    <>
      <div className={i30}>
        <Img fluid={data.i30.fluid} />
      </div>
      <div className={i9}>
        <Img fluid={data.i9.fluid} />
      </div>
    </>
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bejamas Home</title>
      </Helmet>
      <Layout page={"home-page"} footerCta={<FooterCTA />}>
        <Header
          subheading={subheading}
          title={title}
          desc={desc}
          cta={cta}
          hero={data.hero.fluid}
          extra={extra}
          shapes={shapes}
        ></Header>
        <CaseStudy />
        <JamUses />
        <Testimonial />
        <TechUsed />
        <Products
          subheading="products we craft"
          description="Best things since sliced bread. Shaped with diligence and the highest software-craftsmanship."
          jamDesc=" Get new customers with a faster website with higher SEO chances. We
            build them with proven technologies: GatsbyJS, Hugo, Netlify, and
            many others."
          pwaDesc="Save time and money with a progressive web app instead of native
            apps for multiple platforms. JAMstack PWA means great performance
            and low hosting costs."
        />
        <WorldMap />
        <Stories />
      </Layout>
    </>
  );
};
