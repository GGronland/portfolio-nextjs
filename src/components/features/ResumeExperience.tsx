"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

type ResumeExperienceProps = {
  viewResetTrigger?: number;
};

const ResumeExperience = ({ viewResetTrigger }: ResumeExperienceProps) => {
  const [activeExperienceIdx, setActiveExperienceIdx] = useState<number | null>(
    null
  );

  // Reset active experience when the resetViewTrigger changes
  // Could lift state up, but this keeps the component self-contained if needed elsewhere
  useEffect(() => {
    setActiveExperienceIdx(null);
  }, [viewResetTrigger]);

  let activeExperienceData =
    typeof activeExperienceIdx === "number" &&
    experienceData[activeExperienceIdx]
      ? experienceData[activeExperienceIdx]
      : null;

  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{"\u21B3"} Experience</h3>
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
        <div className="w-full grid grid-cols-2 gap-4 animate-fade-in ">
          {experienceData.map((experience, idx: number) => (
            <ExperienceCard
              key={`experience-${experience.id}`}
              title={experience.title}
              location={experience.location}
              date={experience.date}
              onClick={() => setActiveExperienceIdx(idx)}
            />
          ))}
        </div>
      )}

      {/* Render expanded experience card if a experience is active */}
      {activeExperienceData && (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
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

const experienceData = [
  {
    id: 1,
    date: "2022 - 2024",
    title: "Frontend Software Engineer",
    location: "AVAMAE",
    keyPoints: [
      "Demonstrated proficiency in React, TypeScript and Redux through building features for a client's job board/ATS platform, which spans multiple websites with distinct user interfaces yet deeply integrated services.",
      "Worked across the full software development lifecycle, from scoping requirements and translating UX wireframes into responsive interfaces, to deploying code and fixes on production systems.",
      "Experience integrating with RESTful APIs and third-party services, ensuring seamless user interactions and display of real-time data.",
      "Progressed to primary frontend developer on project within 6 months, taking on responsibility for implementing large-scale expansions to the client's product in a fast-paced agile sprint environment.",
      "Led deliverables include a new marketplace board and networking functionality, migration of the candidate assessment process from legacy platform to React, and multiple site-wide UI revamps.",
      "Contributed to library of reusable components and adapted in-house calendar/booking system modules to meet client's developing needs.",
    ],
  },
  {
    id: 0,
    date: "2021 - 2022",
    title: "Post-doctoral Researcher",
    location: "UCL",
    keyPoints: [
      "Developed research undertaken in PhD project, and layed out groundwork for submitting findings to a research journal for publication.",
    ],
  },
];

export default ResumeExperience;
