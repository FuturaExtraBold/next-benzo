import React from "react";
import Link from "next/link";

const ProjectSlide = (props) => {
  return (
    <Link href={ `projects/${ props.pretty }` }>
      <div className="project">
        <img style={{ width: "60px", float: "left" }} src={ `http://www.davidahays.com/cdn/img/thumbs/${ props.thumb }` }/>
      </div>
    </Link>
  );
}

export default ProjectSlide;
