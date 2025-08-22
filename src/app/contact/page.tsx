"use client";

import LinkedInLogo from "@/assets/linkedin-logo.svg";
import GitHubLogo from "@/assets/github-logo.svg";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import { useState } from "react";

const emailAddress = "glenrgronland@gmail.com";
const tooltipTextDefault = "Click to copy to clipboard";

const ContactPage = () => {
  const [tooltipText, setTooltipText] = useState(tooltipTextDefault);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    setTooltipText("Copied!");
    setTimeout(() => {
      setTooltipText(tooltipTextDefault);
    }, 2000);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="">Want to connect?</h1>

      <div className="flex justify-space-between items-center gap-8 mt-8">
        <div className="p-4 flex flex-col  h-36 justify-center items-center border-1 rounded-xl border-sky-950 bg-sky-900 drop-shadow-lg ">
          <span className="text-sm font-semibold mb-2 text-center">
            Email me at:
            <br />
            <Tooltip tooltipText={tooltipText}>
              <a
                className="underline cursor-pointer"
                onClick={handleEmailClick}
              >
                {emailAddress}
              </a>
            </Tooltip>
            <br />
            or click below to open your email app.
          </span>
          <Link href={`mailto:${emailAddress}`}>
            <Button className="" isCTA>
              Say hello!
            </Button>
          </Link>
        </div>

        <Link
          className="p-4 flex flex-col w-36 h-36 justify-center items-center border-1 rounded-xl border-sky-950 bg-sky-900 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-500"
          href="https://www.linkedin.com/in/glen-gronland/"
          target="_blank"
        >
          <LinkedInLogo className="w-12 h-12 mb-2 fill-green-300 " />
          <h2 className="">LinkedIn</h2>
        </Link>

        <Link
          className="p-4 flex flex-col w-36 h-36 justify-center items-center border-1 rounded-xl border-sky-950 bg-sky-900 drop-shadow-lg cursor-pointer hover:scale-110 transition-all duration-500"
          href="https://github.com/GGronland"
          target="_blank"
        >
          <GitHubLogo className="w-12 h-12 mb-2 stroke-green-300 stroke-4" />
          <h2 className="">GitHub</h2>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
