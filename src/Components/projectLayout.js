import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <>
      <h2>This is Layout of post</h2>
      <Outlet></Outlet>
    </>
  );
}

export default ProjectLayout;
