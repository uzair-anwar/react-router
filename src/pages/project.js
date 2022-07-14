import React, { Component } from "react";
import { useParams, useLocation } from "react-router-dom";

function Project() {
  let location = useLocation();
  let { catergory } = useParams();
  return (
    <div>
      This is project. and your are at this location {location.pathname} and
      catergory is {catergory}
    </div>
  );
}

export default Project;
