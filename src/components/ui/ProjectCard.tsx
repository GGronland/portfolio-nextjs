import { ProjectItem } from "../features/ProjectList";
import {
  CodeBracketSquareIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const ProjectCard = ({ projectData }: { projectData: ProjectItem }) => {
  return (
    <a
      href={projectData.url}
      className="grid grid-rows-[40px,4fr,1fr] gap-4 p-4 rounded-xl bg-slate-700 hover:-translate-y-2 transition-all duration-500"
    >
      <div className="row-span-1 max-h-10 flex justify-between gap-2">
        <CodeBracketSquareIcon className=" stroke-green-300" />
        <div className="flex items-center gap-2">
          {!projectData.url && <h3 className="">Link soon!</h3>}
          <ArrowTopRightOnSquareIcon className="w-6 hover:stroke-green-300 transition-all duration-300" />
        </div>
      </div>
      <div className="row-span-2">
        <h3>{projectData.title}</h3>
        <p className="text-gray-300">{projectData.description}</p>
      </div>
      <div className="row-span-3 flex flex-wrap gap-3">
        {projectData.stack.map((stackItem: string) => (
          <span
            key={`project-${projectData.title}-${stackItem}`}
            className="text-sm text-gray-400"
          >
            {stackItem}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
