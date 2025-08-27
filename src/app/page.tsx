"use client";

import useWordCycler from "@/components/hooks/useWordCycler";
import Button from "@/components/ui/Button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
    <section className="grid grid-cols-[1fr,1fr] items-center justify-items-center p-8 pb-20 gap-10 sm:p-20">
      <div className="col-start-1 flex flex-col gap-8 w-full  p-8 border-1 rounded-xl box-border font-sans bg-sky-900 border-sky-900">
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

        <div className="flex gap-8">
          <Button className="col-start-1" isCTA>
            <a href="/assets/files/CV_GlenGronland.pdf" download className="">
              Download CV
            </a>
            <ArrowDownTrayIcon className="w-6 h-6" />
          </Button>
          <Button className="col-start-2" isCTA>
            <Link href="/contact">Contact me</Link>
          </Button>
        </div>
      </div>

      <div className="col-start-2 min-w-[400px] h-full border-1 rounded-xl bg-sky-900 border-sky-900">
        <div>Tech demo container</div>
      </div>
    </section>
  );
}
