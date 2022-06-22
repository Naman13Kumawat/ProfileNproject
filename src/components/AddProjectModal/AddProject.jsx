import axios from "axios";
import { useState } from "react";
import "./AddProject.scss";
import { useNavigate } from "react-router-dom";

export default function AddProject({userID}) {
  let navigate = useNavigate();
  const [project, setProject] = useState({
    projectName: "",
    desc: "",
    category: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setProject((prevValue) => {
      const { value, name } = e.target;
      switch (name) {
        case "projectName":
          return { ...prevValue, projectName: value };
        case "desc":
          return { ...prevValue, desc: value };
        case "category":
          return { ...prevValue, category: value };
        case "startDate":
          return { ...prevValue, startDate: value };
        case "endDate":
          return { ...prevValue, endDate: value };
        case "notes":
          return { ...prevValue, notes: value };
        default:
          break;
      }
    });
  };

  async function postData(req, res) {
    try {
      const res = await axios.post(
        `api/projects/${userID}`,
        project
      );
      if (res.status === 200) {
        navigate("/projects", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  

  const handleClick = (e) => {
    const values = Object.values(project);
    let flag = true;
    for (let i = 0; i < 4; i++) {
      if (values[i].length === 0) {
        alert("Fields with * are required!");
        flag = false;
        break;
      }
    }
    if (flag) postData();
    window.location.reload();
  };
  return (
    <div className="addModal">
      <h1>Project Details</h1>
      <form>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name*"
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          placeholder="Description*"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category*"
          onChange={handleChange}
        />
        <span>
          Start Date*:
          <input type="date" name="startDate" onChange={handleChange} />
        </span>
        <span>
          End Date:
          <input type="date" name="endDate" onChange={handleChange} />
        </span>
        <input
          type="text"
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
        />
      </form>
      <button name="submitProject" onClick={handleClick}>
        Add Project
      </button>
    </div>
  );
}
