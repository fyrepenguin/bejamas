import React from "react";
import Navbar from "../components/common/navbar";
const Layout = ({ children, page }) => {
  return (
    <>
      <Navbar />
      <main className={`container ${page}`}>{children}</main>
    </>
  );
};
export default Layout;
