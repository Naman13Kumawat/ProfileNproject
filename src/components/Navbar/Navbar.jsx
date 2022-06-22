import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ error }) {

  const logout = async ()=>{
    try{
      const res = await axios.get("api/auth/logout");
      if(res.status === 200){
        alert("Logged out successfully")
      }
    } catch(err){
      console.log(err);
    }
  }
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {error.code === "ERR_BAD_REQUEST" ? (
          <li>
            <Link to="/">Login / Signup</Link>
          </li>
        ) : (
          <li>
            <Link to="/" onClick={logout}>Logout</Link>
          </li>
        )}
        <li>
          <Link to="/project" className="add">
            Add Project
          </Link>
        </li>
      </ul>
    </div>
  );
}
