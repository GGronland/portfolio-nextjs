"use client";

import Button from "@/components/ui/Button";
import ResumeExperience from "@/components/features/ResumeExperience";
import SkillIconList from "@/components/features/SkillIconList";
import { educationData, experienceData } from "@/data/resumeData";
import { useState } from "react";

type ResumeSections = "experience" | "education" | "skills";

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState<ResumeSections>("skills");
  const [viewResetTrigger, setViewResetTrigger] = useState(0);

  const handleSectionChange = (section: ResumeSections) => {
    setActiveSection(section);
    setViewResetTrigger((prev) => prev + 1); // Trigger a re-render
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-start px-8">
      <h2>
        In a hurry, or just want the downloadable version? Grab a copy of my{" "}
        <a
          href="/assets/files/CV_GlenGronland.pdf"
          download
          className="underline text-green-300"
        >
          CV!
        </a>
      </h2>

      <hr className="my-4 w-full border-t border-gray-600" />

      <section className="w-full flex justify-start gap-8 mt-8">
        <div className="w-50 flex flex-col items-center gap-4">
          <Button
            className="w-full"
            bgColour="bg-emerald-500"
            onClick={() => handleSectionChange("skills")}
          >
            Skills
          </Button>

          <Button
            className="w-full"
            bgColour="bg-emerald-500"
            onClick={() => handleSectionChange("experience")}
          >
            Experience
          </Button>
          <Button
            className="w-full"
            bgColour="bg-emerald-500"
            onClick={() => handleSectionChange("education")}
          >
            Education
          </Button>
        </div>

        <div className="flex-1">
          {activeSection === "skills" && <SkillIconList />}

          {activeSection === "experience" && (
            <ResumeExperience
              title="Experience"
              data={experienceData}
              viewResetTrigger={viewResetTrigger}
            />
          )}

          {activeSection === "education" && (
            <ResumeExperience
              title="Education"
              data={educationData}
              viewResetTrigger={viewResetTrigger}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
