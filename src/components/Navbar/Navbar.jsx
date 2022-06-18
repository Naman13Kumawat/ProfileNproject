import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
        <li>
          <Link to="/project" className="add">Add Project</Link>
        </li>
      </ul>
    </div>
  );
}
