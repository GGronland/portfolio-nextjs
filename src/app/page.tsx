"use client";

import useWordCycler from "@/components/hooks/useWordCycler";

export default function Home() {
  let { currentWord, nextWord } = useWordCycler([
    "software developer",
    "quick learner",
    "sprint deliverer",
    "question asker",
    "production deployer",
    "careful planner",
  ]);

  return (
    <section className="flex flex-1 box-border font-sans grid grid-cols-[1fr,1fr] items-center justify-items-center p-8 pb-20 gap-10 sm:p-20">
      <div className="col-start-1 w-full h-full p-8 border-1 rounded-xl bg-sky-900 border-sky-900">
        <p className="font-semibold text-xl">Hi, my name is</p>
        <p className="font-bold text-6xl">Glen Gronland</p>
        <p className="font-semibold text-xl">
          and I'm a <span className="">{currentWord}.</span>
        </p>

        <p className="mt-12">
          I'm a frontend-focused developer with 2+ years of experience in
          crafting elegant user interfaces, with proficiency in a rapidly
          expanding array of programming languages.
        </p>
      </div>
      <div className="col-start-2 min-w-[400px] h-full border-1 rounded-xl bg-sky-900 border-sky-900">
        <div>Tech demo container</div>
      </div>
    </section>
  );
}
