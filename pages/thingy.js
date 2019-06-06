import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

class Thingy extends Component {

  static async getInitialProps() {
    const res = await fetch("http://www.davidahays.com/cdn/json/project_data.json");
    const json = await res.json();
    return { data: {
      clients: json.clients,
      projects: json.projects
    }};
  }

  render () {
    return (
      <div className="thingy">
        <h1>This is the thingy!</h1>
        {this.props.data.clients.map(client => (
          <img style={{ width: "60px" }} key={ client.alt } src={ `http://www.davidahays.com/cdn/img/clients/${client.img}` } alt={ client.alt } />
        ))}
        {this.props.data.projects.map(project => (
          <div className="project" key={ project.title }>
            <img style={{ width: "60px", float: "left" }} src={ `http://www.davidahays.com/cdn/img/thumbs/${project.thumb}` }/>
          </div>
        ))}
      </div>
    );
  }
}

export default Thingy;
