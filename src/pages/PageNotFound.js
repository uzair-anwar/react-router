import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  let navigate = useNavigate();
  let data = {
    name: "uzair",
  };
  return (
    <div>
      Error Page not Found
      <button
        onClick={() => {
          // eslint-disable-next-line no-unused-expressions
          navigate("/about", { state: data });
        }}
      >
        Click to move About
      </button>
    </div>
  );
}

export default PageNotFound;
