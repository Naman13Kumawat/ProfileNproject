import "./Projects.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddProject from "../../components/AddProjectModal/AddProject";
import useFetch from "../../hooks/useFetch";

export default function Projects() {
  const { data , error } = useFetch("api/projects/naman.kumawat07@gmail.com");
  return (
    <>
      <Navbar error={error} />
      <AddProject />
      <div className="cardContainer">
      {error.code=== "ERR_BAD_REQUEST"? <h1>You are not Autherized!</h1>: null}
        {data &&
          data.map((project) => {
            return <ProjectCard key={project._id} details={project} />;
          })}
      </div>
    </>
  );
}
