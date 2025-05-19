import { BentoGridThirdDemo } from "@/components/Bento";
import { CanvasRevealEffectDemo } from "@/components/CanvasCard";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { CoverDemo } from "@/components/Cover";
import { ExpandableCardDemo } from "@/components/Expandable-Card";
import { ExpandableCardDemo1 } from "@/components/Expandable-Card2";
import { LampDemo } from "@/components/Lamp";
import { HeroParallaxDemo } from "@/components/Parallax";
import { CardSpotlightDemo } from "@/components/SpotlightCard";
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
        <CardSpotlightDemo />
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
        <TypewriterEffectSmoothDemo />
        <div className="flex justify-evenly cursor-pointer mt-20">
        <div >
          <div className="bg-transparent border rounded-full p-4  flex items-center justify-center mx-auto mb-4">
          <h1 className="flex justify-center text-white font-bold">🔴Traditional Vendors</h1>
          </div>
          <ExpandableCardDemo />
        </div>
        <div>
        <div className="bg-[#ffffff] rounded-full p-4  flex items-center justify-center mx-auto mb-4">
          <h1 className="flex justify-center text-black font-bold">🟢 Hashbyt Solution</h1>
          </div>
          <ExpandableCardDemo1 />
        </div>
        </div>
        <div>
          <HeroParallaxDemo />
        </div>
      </div>
    </div>
  );
}
