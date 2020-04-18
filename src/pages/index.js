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
import "../styles/App.scss";

export default () => {
  return (
    <Layout>
      <Header />
      <CaseStudy />
      <JamUses />
      <Testimonial />
      <TechUsed />
      <Products />
      <WorldMap />
      <Stories />
    </Layout>
  );
};
