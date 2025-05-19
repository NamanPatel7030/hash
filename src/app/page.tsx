import { BentoGridThirdDemo } from "@/components/Bento";
import { CanvasRevealEffectDemo } from "@/components/CanvasCard";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { CoverDemo } from "@/components/Cover";
import { LampDemo } from "@/components/Lamp";
import { HeroParallaxDemo } from "@/components/Parallax";
import { TabsDemo } from "@/components/Tabs";
import AnimatedLogoTitleBar from "@/components/Titlebar";
import { TypewriterEffectSmoothDemo } from "@/components/Typewriter";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <LampDemo />
      </div>
      <div className="-mt-110">
        <CoverDemo />
      </div>

      <div>
        <CanvasRevealEffectDemo />
      </div>
      <div className="flex items-center justify-center">
        <Image src="/Underline_03.png" alt="Cover" width={600} height={600} />
      </div>
      <div>
        <HeroScrollDemo />
      </div>

      <div>
        <AnimatedLogoTitleBar />
      </div>

      <div>
        <TabsDemo />
      </div>
      <div className="w-max bg-white rounded-4xl p-8  flex items-center justify-center mx-auto">
        <BentoGridThirdDemo />
      </div>
      <div className="flex justify-center cursor-pointer mt-34">
        <div className="border-2 border-white p-4  rounded-full">
          <h2 className="text-white">COMPARISON</h2>
        </div>
      </div>
      <div className="mb-34">
      <TypewriterEffectSmoothDemo/>
      <div>
        <HeroParallaxDemo />
      </div>
      </div>
    </div>
  );
}
