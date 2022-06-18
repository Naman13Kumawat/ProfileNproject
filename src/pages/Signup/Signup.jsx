import axios from "axios";
import { useEffect, useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    companyName: "",
    occupation: "",
    experience: "",
  });

  async function postData(next) {
    try {
      const res = await axios.post("api/auth/register", userData);
      if (res.status === 200) {
        navigate("/projects", { replace: true });
      }
    } catch (e) {
      next(e);
    }
  }

  const handleChange = (e) => {
    setUserData((prevValue) => {
      const { value, name } = e.target;
      switch (name) {
        case "username":
          return { ...prevValue, username: value };
        case "email":
          return { ...prevValue, email: value };
        case "password":
          return { ...prevValue, password: value };
        case "mobileNumber":
          return { ...prevValue, mobileNumber: value };
        case "address":
          return { ...prevValue, address: value };
        case "city":
          return { ...prevValue, city: value };
        case "state":
          return { ...prevValue, state: value };
        case "country":
          return { ...prevValue, country: value };
        case "companyName":
          return { ...prevValue, companyName: value };
        case "occupation":
          return { ...prevValue, occupation: value };
        case "experience":
          return { ...prevValue, experience: value };
        default:
          break;
      }
    });
  };
  const handleClick = (e) => {
    console.log(userData);
    postData();
  };

  return (
    <>
      <div className="signup_container">
        <h1>Create Account.</h1>
        <form>
          <span>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Username*"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Email*"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password*"
              required
            />
            <input
              onChange={handleChange}
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number*"
              required
            />
          </span>
          <span>
            <input
              onChange={handleChange}
              type="text"
              name="address"
              placeholder="Address*"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="city"
              placeholder="City*"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="state"
              placeholder="State*"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="country"
              placeholder="Country*"
              required
            />
          </span>
          <span>
            <input
              onChange={handleChange}
              type="text"
              name="companyName"
              placeholder="Company name"
            />
            <input
              onChange={handleChange}
              type="text"
              name="occupation"
              placeholder="Occupation"
            />
            <input
              onChange={handleChange}
              type="text"
              name="experience"
              placeholder="Years of experience"
            />
          </span>
        </form>

        <button name="login" onClick={handleClick}>
          Sign Up
        </button>
      </div>
    </>
  );
}
