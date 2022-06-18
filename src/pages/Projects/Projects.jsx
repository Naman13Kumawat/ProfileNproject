import "./Projects.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard  from "../../components/ProjectCard/ProjectCard";
import AddProject  from "../../components/AddProjectModal/AddProject";

export default function Projects() {
  return (
    <>
      <Navbar />
      <AddProject />
      <div className="cardContainer">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
