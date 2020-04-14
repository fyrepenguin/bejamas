import React, { Component } from "react";
import Navbar from "./../components/common/navbar";
import Header from "./../components/common/header";
import CaseStudy from "./../components/home/caseStudy";
import JamUses from "./../components/home/jamUses";
import Testimonial from "./../components/home/testimonial";
import TechUsed from "./../components/common/tech";
import Products from "./../components/home/products";
import WorldMap from "./../components/home/worldmap";
import Footer from "./../components/common/footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <CaseStudy />
        <JamUses />
        <Testimonial />
        <TechUsed />
        <Products />
        <WorldMap />
        <Footer />
      </>
    );
  }
}
