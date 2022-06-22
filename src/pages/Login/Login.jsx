import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  async function postData() {
    try {
      const res = await axios.post("api/auth/login", userData);
      if (res.status === 200) {
        navigate("/projects", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setUserData((prevValue) => {
      const { name, value } = e.target;
      switch (name) {
        case "email":
          return { ...prevValue, email: value };
        case "password":
          return { ...prevValue, password: value };
        default:
          break;
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    userData.email.length && userData.password.length && postData();
    if(userData.email.length === 0|| userData.password.length === 0){
      alert("Fields Required: Email and Password!");
    }
  };
  return (
    <>
      <div className="login_container">
        <h1>Login to your account.</h1>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            required
            onChange={handleChange}
          />
        </form>
        <button name="login" onClick={handleClick}>
          Log In
        </button>
        <p>
          Don't have an account?&nbsp;
          <a href="/signup">Sign up</a>
        </p>
      </div>
    </>
  );
}