"use client";

import ResumeExperience from "@/components/features/ResumeExperience";
import Button from "@/components/ui/Button";
import { educationData, experienceData } from "@/data/resumeData";
import { useState } from "react";

type ResumeSections = "experience" | "education" | "skills";

const ResumePage = () => {
  const [activeSection, setActiveSection] =
    useState<ResumeSections>("experience");
  const [viewResetTrigger, setViewResetTrigger] = useState(0);

  const handleSectionChange = (section: ResumeSections) => {
    setActiveSection(section);
    setViewResetTrigger((prev) => prev + 1); // Trigger a re-render
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h2>
        In a hurry, or just want the downloadable version? Grab a copy of my{" "}
        <a
          href="/assets/CV_GlenGronland.pdf"
          download
          className="underline text-green-300"
        >
          CV!
        </a>
      </h2>

      <hr className="my-4 w-4/5 border-t border-gray-600" />

      <section className="w-4/5 flex justify-start gap-8 mt-8">
        <div className="w-50 flex flex-col items-center gap-4">
          <Button onClick={() => handleSectionChange("experience")}>
            Experience
          </Button>
          <Button onClick={() => handleSectionChange("education")}>
            Education
          </Button>
          <Button onClick={() => handleSectionChange("skills")}>Skills</Button>
        </div>

        <div className="flex-1">
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

          {activeSection === "skills" && ""}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
