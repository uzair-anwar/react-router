import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <div
      style={{ width: 100 + "vw", height: 80, backgroundColor: "lightblue" }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/project">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
