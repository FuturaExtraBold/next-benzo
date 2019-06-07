import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

class Detail extends Component {

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch("http://www.davidahays.com/cdn/json/new_data.json");
    const json = await res.json();

    for (var a = 0; a < json.projects.length; a++) {
      if (id === json.projects[a].pretty) {
        console.log("kaboom! we have a match at index " + a + ", project title: " + json.projects[a].title);
        return { data: json.projects[a] };
      }
    }
    console.log("could not match project");
    return false;
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <h1>{ `id: ${ this.props.data.pretty }` }</h1>
        </div>
      </Layout>
    );
  }
}

export default Detail;
