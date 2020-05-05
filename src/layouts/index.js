import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "./../components/common/footer";
const Layout = ({ children, page, footerCta }) => {
  return (
    <>
      <Navbar />
      <main className={`container ${page}`}>{children}</main>
      <Footer>{footerCta}</Footer>
    </>
  );
};
export default Layout;
