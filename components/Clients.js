import React from "react";

import Client from "../components/Client";

const Clients = (props) => {
  console.log("props:", props);
  return (
    <section className="clients">
      <div className="container">
        <div className="clients__grid">
          {props.data.map((client, index) => (
            <Client key={ index } { ...client } />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
