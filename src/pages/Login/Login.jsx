import { useState } from "react";
import "./Login.scss";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  async function postData(next){
    try{
      
    } catch(e){
      next(e);
    }
  }

  const handleChange = (e) => {
    setUserData((prevValue) => {
      const {name, value} = e.target;
      switch (name) {
        case "email":
          return {...prevValue, email: value}
        case "password":
          return {...prevValue, password: value};
        default:
          break;
        }
    });
  };

  const handleClick = (e) => {
    console.log(userData);
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
        <button type="submit" name="login" onClick={handleClick}>
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
