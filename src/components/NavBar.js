import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ margin: 20, marginTop: 5 }}>
        <NavLink
          to="/"
          className="Applink"
          activeStyle={{ color: "greenyellow" }}
          exact
        >
          Home
        </NavLink>
      </div>
      <div style={{ margin: 20, marginTop: 5 }}>
        <NavLink
          to="/signup"
          className="Applink"
          activeStyle={{ color: "greenyellow" }}
        >
          Sign Up
        </NavLink>
      </div>
      <div style={{ margin: 20, marginTop: 5 }}>
        <NavLink
          to="/login"
          className="Applink"
          activeStyle={{ color: "greenyellow" }}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}
