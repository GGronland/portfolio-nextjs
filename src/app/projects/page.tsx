import ProjectList from "@/components/features/ProjectList";
import { projectsInProgress } from "@/data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 lg:gap-26 px-8 animate-fade-in-slow">
      <h2 className="">Projects - in progress</h2>
      <ProjectList projectList={projectsInProgress} />
    </div>
  );
};

export default ProjectsPage;
