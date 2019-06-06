import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

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
            <img key={ index } style={{ width: "60px" }} src={ `http://www.davidahays.com/cdn/img/clients/${ client.img }` } alt={ client.alt } />
          ))}
        </div>
        <div className="projects">
          {this.props.data.projects.map((project, index) => (
            <Link key={ project.pretty } href={ `projects/${ project.pretty }` }>
              <div className="project">
                <img style={{ width: "60px", float: "left" }} src={ `http://www.davidahays.com/cdn/img/thumbs/${ project.thumb }` }/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
