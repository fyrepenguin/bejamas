import React from "react";
import Layout from "./../layouts";
import { aboutHero, i1, i4 } from "../components/images";
import Header from "./../components/common/header";
import Team from "../components/about/team";
import TechUsed from "../components/common/tech";
import Nomads from "../components/about/nomads";
import Footer from "../components/common/footer";
import { Link } from "gatsby";

import "../styles/about.scss";
import Values from "./../components/about/values";

const About = () => {
  const subTitle = `About Us`,
    title = `We are Bejamas`,
    desc = `Not your everyday web dev shop but a partner that will help your business grow with modern tools more than you thought it's possible.`,
    cta = `Meet the Team`,
    shapes = (
      <>
        <div className="i4">
          <picture>
            <img src={i4} alt="" />
          </picture>
        </div>
        <div className="i1">
          <picture>
            <img src={i1} alt="" />
          </picture>
        </div>
      </>
    );
  return (
    <>
      <Layout>
        <Header
          subTitle={subTitle}
          title={title}
          desc={desc}
          cta={cta}
          hero={aboutHero}
          shapes={shapes}
        ></Header>

        <section className="about-us section">
          <h2>Client-focused, forward-thinking people</h2>
          <p>
            We are a team of passionate web developers who share the vision of
            websites, that are high-performing, safe, and easy to maintain. We
            make this vision happen by building serverless Progressive Web Apps
            and websites on the JAMstack architecture.
          </p>
        </section>
        <Team />
        <Values />
        <TechUsed cta={`Consult your project`} />
        <Nomads />
      </Layout>
      <Footer>
        <section className="footer-cta">
          <div>
            <h3>Become one of us</h3>
            <p>
              Do you want to join our team and work remotely from anywhere you'd
              like? We can't wait to hear from you!
            </p>
            <Link to="/careers" className="cta">
              Check Careers
            </Link>
          </div>
          <div className="footer-cta-img"></div>
        </section>
      </Footer>
    </>
  );
};
export default About;
