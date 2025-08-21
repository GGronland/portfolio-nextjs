"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ResumeData } from "@/data/resumeData";

type ResumeExperienceProps = {
  title: string;
  data: ResumeData[];
  viewResetTrigger?: number;
};

const ResumeExperience = ({
  title,
  data,
  viewResetTrigger,
}: ResumeExperienceProps) => {
  const [activeExperienceIdx, setActiveExperienceIdx] = useState<number | null>(
    null
  );

  // Reset active experience when the resetViewTrigger changes
  // Could lift state up, but this keeps the component self-contained if needed elsewhere
  useEffect(() => {
    setActiveExperienceIdx(null);
  }, [viewResetTrigger]);

  let activeExperienceData =
    typeof activeExperienceIdx === "number" && data[activeExperienceIdx]
      ? data[activeExperienceIdx]
      : null;

  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">
          {"\u21B3"} {title}
        </h3>
        {activeExperienceData && (
          <span
            className="flex cursor-pointer mb-0"
            onClick={() => setActiveExperienceIdx(null)}
          >
            <ArrowLeftCircleIcon className="inline-block w-6 h-6 mr-1" />
            Return
          </span>
        )}
      </header>

      {/* Render all experience cards if no experience is active */}
      {!activeExperienceData && (
        <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4 animate-fade-in ">
          {data.map((experience, idx: number) => (
            <ExperienceCard
              key={`experience-${experience.id}`}
              title={experience.title}
              location={experience.location}
              date={experience.date}
              additionalInfo={experience.additionalInfo}
              onClick={() =>
                experience.keyPoints.length > 0 && setActiveExperienceIdx(idx)
              }
            />
          ))}
        </div>
      )}

      {/* Render expanded experience card if a experience is active */}
      {activeExperienceData && (
        <div className="animate-fade-in">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-green-300">{activeExperienceData.date}</span>
            <span className="">{activeExperienceData.title}</span>
            <span className="text-gray-400">
              @ {activeExperienceData.location}
            </span>
          </div>

          {activeExperienceData.keyPoints && (
            <ul className="list-disc pl-3.5 flex flex-col gap-3">
              {activeExperienceData.keyPoints.map((point, index) => (
                <li key={`experiencePoint-${index}`} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default ResumeExperience;
