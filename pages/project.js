import React from "react";
import fetch from "isomorphic-unfetch";

const Project = ({ data }) => {
  return (
    <h1>{ `id: ${ data.pretty }` }</h1>
  );
}

Project.getInitialProps = async function(context) {
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
};

export default Project;
