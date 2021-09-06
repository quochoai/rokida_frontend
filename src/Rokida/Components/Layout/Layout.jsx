import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import SocialLine from "../SocialLine";

Layout.propTypes = {};

function Layout(props) {
  return (
    <>
      <Header />
      <div id="content">{props.children}</div>
      <SocialLine />
      <Footer />
    </>
  );
}

export default Layout;
