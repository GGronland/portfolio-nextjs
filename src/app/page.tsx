"use client";

import useWordCycler from "@/components/hooks/useWordCycler";
import Button from "@/components/ui/Button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "@/assets/profilePicture.jpg";

export default function Home() {
  let title = useWordCycler(
    [
      "software developer",
      "quick learner",
      "sprint deliverer",
      "question asker",
      "production deployer",
      "careful planner",
    ],
    5000,
    "animate-fade-in-top",
    true
  );

  return (
    <section className="flex flex-col xl:flex-row items-center justify-items-center p-8 pb-20 gap-10 sm:p-20 animate-fade-in-slow">
      <div className="col-start-1 flex flex-col gap-8 w-full  p-8 border-1 rounded-xl box-border font-sans bg-slate-700 border-slate-700">
        <div>
          <p className="font-semibold text-xl">Hi, my name is</p>
          <p className="font-bold text-6xl">Glen Gronland</p>
          <p className="font-semibold text-xl">and I'm a {title}</p>
        </div>

        <p className="">
          I'm a frontend-focused developer with 2+ years of experience in
          crafting fluid user interfaces, with proficiency in a rapidly
          expanding array of programming languages.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="/assets/files/CV_GlenGronland.pdf" download className="">
            <Button className="col-start-1" isCTA>
              Download CV
              <ArrowDownTrayIcon className="w-5 h-5" />
            </Button>
          </a>

          <Link href="/contact">
            <Button className="col-start-2" isCTA>
              Contact me
            </Button>
          </Link>
        </div>
      </div>

      {/* TODO - create "stack" of pictures at different angles that cycle on click */}
      <div className="col-start-2 max-w-[350px] rounded-xl bg-slate-700 hover:rotate-5 transition-all duration-500 ease-linear">
        <Image
          className="box-border border-3 rounded-xl border-slate-700 bg-slate-700 drop-shadow-lg hover:border-green-300 transition-all duration-500 "
          src={ProfilePicture}
          alt="Profile picture"
        />
      </div>
    </section>
  );
}
