import React, { Fragment } from "react";

import Head from 'next/head';

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      { props.children }
      <Footer />
    </Fragment>
  );
}

export default Layout;
