import React from "react";
import Heading from "./../components/common/heading";
import Layout from "../layouts";
import Footer from "./../components/common/footer";
const Ask = () => {
  return (
    <>
      <Layout>
        <Heading
          title="You ask. Bejamas answers"
          subheading="with all honesty and totally subjective"
          description="Ask about whatever you want - Jamstack, Remote work, Agency stuff or just about the weather (Pst... few clouds in Wroclaw right now)."
          cta="Ask Bejamas Anything"
        />
      </Layout>
      <Footer />
    </>
  );
};

export default Ask;
