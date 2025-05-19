"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Hashbyt.",
      className: "text-[#ff814e] dark:text-[#ff814e]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-46 ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  text-center mb-4 ">
      Outsourcing agencies and freelancers often lack the deep expertise required to overhaul a SAAS platform’s design and backend technologies. <br /> In-house teams may understand your product but lack the bandwidth to manage large-scale updates.
      </p>
      
    </div>
  );
}
