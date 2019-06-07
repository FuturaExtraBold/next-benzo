import React from "react";
import Link from "next/link";

const Project = (props) => {
  return (
    <Link href={ `/projects/${ props.pretty }` }>
      <div className="project">
        <div className="project__placeholder"></div>
        {/* <img src={ `http://www.davidahays.com/cdn/img/thumbs/${ props.thumb }` }/> */}
      </div>
    </Link>
  );
}

export default Project;
