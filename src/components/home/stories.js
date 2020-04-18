import React, { Component } from "react";
import Heading from "../common/heading";
import {
  JAMintro,
  jamPWA,
  jamclients,
  wordpress,
  headless,
  i30,
} from "../../images";
import "../../styles/stories.scss";
export default class Stories extends Component {
  render() {
    return (
      <section className="stories section">
        <Heading subtitle="Our Stories" title="Latest from blog" />
        <div className="posts">
          <div className="post-circle">
            <img src={i30} alt="" />
          </div>
          <article className="post mainPost">
            <a href="/">
              <div className="article-wrapper">
                <img src={JAMintro} alt="" />
              </div>
              <h3>JAMstack: The Corenrstone of Modern-day Web Development</h3>
              <p>Read more</p>
            </a>
          </article>
          <article className="post post4">
            <a href="/">
              <div className="article-wrapper">
                <img src={jamPWA} alt="" />
              </div>
              <h3>Building a Fast PWA With JAMstack</h3>
              <p>Read more</p>
            </a>
          </article>
          <article className="post post1">
            <a href="/">
              <div className="article-wrapper">
                <img src={jamclients} alt="" />
              </div>
              <h3>JAMstack for Clints</h3>
              <p>Read more</p>
            </a>
          </article>
          <article className="post post2">
            <a href="/">
              <div className="article-wrapper">
                <img src={wordpress} alt="" />
              </div>
              <h3>
                WordPress Alternative: The Pros and Cons of Static Site
                Generators
              </h3>
              <p>Read more</p>
            </a>
          </article>
          <article className="post post3">
            <a href="/">
              <div className="article-wrapper">
                <img src={headless} alt="" />
              </div>
              <h3>9 Headless CMS Options for Your JAMstack Site</h3>
              <p>Read more</p>
            </a>
          </article>
        </div>
        <div className="cta-posts">
          <a href="/" className="cta">
            Read more stories
          </a>
        </div>
      </section>
    );
  }
}
