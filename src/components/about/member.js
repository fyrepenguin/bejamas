import React from "react";
import Img from "gatsby-image";
import { css } from "linaria";

import breakpoints from "../utils/breakpoints";

const Member = ({ name, position, image }) => {
  const memberContainer = css`
      position: relative;
      text-align: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      @media (min-width: ${breakpoints.md}) {
        height: 15.15vw;
        min-height: 240px;
      }
    `,
    memberImg = css`
      width: 100%;
      position: relative;
    `,
    memberName = css`
      color: var(--color-text-primary);
      small {
        color: var(--color-text-secondary);
      }
    `;
  return (
    <div className={memberContainer}>
      <div className={memberImg}>
        <Img
          fluid={image}
          alt={name}
          style={{ maxWidth: "190px", margin: "0 auto" }}
        />
      </div>
      <p className={memberName}>
        {name}
        <br />
        <small>{position}</small>
      </p>
    </div>
  );
};

export default Member;
