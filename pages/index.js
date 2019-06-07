import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Clients from "../components/Clients";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

class Index extends Component {

  static async getInitialProps() {
    const res = await fetch("http://www.davidahays.com/cdn/json/new_data.json");
    const json = await res.json();
    console.log("json:", json);
    return { data: {
      clients: json.clients,
      projects: json.projects
    }};
  }

  render () {
    return (
      <Layout>
        <Projects data={ this.props.data.projects } />
        <Clients data={ this.props.data.clients } />
      </Layout>
    );
  }
}

export default Index;
