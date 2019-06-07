import React, { Component, Fragment } from "react";
import fetch from "isomorphic-unfetch";

import Clients from "../components/Clients";
import Projects from "../components/Projects";

import "../stylesheets/all.scss";

class Index extends Component {

  static async getInitialProps() {
    const res = await fetch("http://www.davidahays.com/cdn/json/new_data.json");
    const json = await res.json();
    return { data: {
      clients: json.clients,
      projects: json.projects
    }};
  }

  render () {
    return (
      <Fragment>
        <Projects data={ this.props.data.projects } />
        <Clients data={ this.props.data.clients } />
      </Fragment>
    );
  }
}

export default Index;
