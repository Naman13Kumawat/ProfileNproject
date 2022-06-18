import axios from "axios";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  async function postData() {
    try {
      const res = await axios.post("api/auth/register", userData);
      if (res.status === 200) {
        navigate("/projects", { replace: true });
      }
    } catch (e) {
      console.log(e);
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
    const values = Object.values(userData);
    let flag = true;
    for(let i=0; i<8 ; i++){
      if(values[i].length === 0){
        alert("Fields with * are required!");
        flag = false;
        break;
      }
    }
    if(flag) postData();
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
              type="number"
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
              type="number"
              name="experience"
              placeholder="Years of experience"
            />
          </span>
        </form>

        <button name="signup" onClick={handleClick}>
          Sign Up
        </button>
      </div>
    </>
  );
}
