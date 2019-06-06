import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Client from "../components/Client";
import ProjectSlide from "../components/ProjectSlide";

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
      <div>
        <div className="clients">
          {this.props.data.clients.map((client, index) => (
            <Client key={ index } { ...client } />
          ))}
        </div>
        <div className="projects">
          {this.props.data.projects.map((project, index) => (
            <ProjectSlide key={ project.pretty } { ...project } />
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
