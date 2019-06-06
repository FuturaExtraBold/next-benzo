import React from "react";

const Client = (props) => {
  return (
    <img style={{ width: "60px" }} src={ `http://www.davidahays.com/cdn/img/clients/${ props.img }` } alt={ props.alt } />
  );
}

export default Client;
