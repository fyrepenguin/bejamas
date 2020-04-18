import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
