import ProjectCard from "../ui/ProjectCard";

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  url?: string;
};

const ProjectList = ({ projectList }: { projectList: ProjectItem[] }) => {
  return (
    <section className="w-full grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] items-center gap-4 animate-fade-in ">
      {projectList.map((projectItem: ProjectItem, index: number) => {
        return (
          <ProjectCard
            key={`project-${projectItem.title}-${index}`}
            projectData={projectItem}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
