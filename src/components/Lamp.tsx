"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { SparklesPreview } from "./Herospark";
import { div } from "motion/react-client";
import { MovingBorderDemo } from "./MovingBorder";
import { CoverDemo } from "./Cover";

export function LampDemo() {
  return (
    <div>
    <LampContainer>
      {/* <MovingBorderDemo/> */}
      
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
        
      </motion.h1>
      
    </LampContainer>

    </div>
  );
}
