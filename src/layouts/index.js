import React from "react";
import Footer from "./../components/common/footer";
import LoadableNav from "./../components/common/loadingNav";
const Layout = ({ children, page, footerCta }) => {
  return (
    <>
      <LoadableNav />
      <main className={`container ${page}`}>{children}</main>
      <Footer>{footerCta}</Footer>
    </>
  );
};
export default Layout;
