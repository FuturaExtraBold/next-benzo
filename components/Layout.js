import React, { Fragment } from "react";

import Head from 'next/head';

import Footer from "./Footer";
import Header from "./Header";

import "../stylesheets/all.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link type="text/css" rel="stylesheet" href="https://use.typekit.net/pco2pfe.css" />
      </Head>
      <Header />
      { props.children }
      <Footer />
    </Fragment>
  );
}

export default Layout;
