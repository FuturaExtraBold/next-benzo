import React, { Component, Fragment } from "react";
import fetch from "isomorphic-unfetch";

import Clients from "../components/Clients";
import ProjectSlide from "../components/ProjectSlide";

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
        <section className="projects">
          {this.props.data.projects.map((project, index) => (
            <ProjectSlide key={ project.pretty } { ...project } />
          ))}
        </section>
        <Clients data={ this.props.data.clients } />
      </Fragment>
    );
  }
}

export default Index;
