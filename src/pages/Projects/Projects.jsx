import "./Projects.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProject from "../../components/AddProjectModal/AddProject";
import useFetch from "../../hooks/useFetch";
import { decodeToken } from "react-jwt";

export default function Projects() {
  const access_token = document.cookie.slice(96);
  const userID = access_token && decodeToken(access_token).id;  
  const { data , error } = useFetch(`api/projects/${userID}`);
  return (
    <>
      <Navbar error={error} />
      {error.code === "ERR_BAD_REQUEST"? <h1 className="errorDisplay">You are not Autherized!</h1>:
      <>
      <AddProject userID={userID}/>
      <div className="cardContainer">
        {data &&
          data.map((project) => {
            return <ProjectCard key={project._id} details={project} />;
          })}
      </div>
      </>
      }
    </>
  );
}
