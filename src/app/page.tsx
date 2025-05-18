import { CanvasRevealEffectDemo } from "@/components/CanvasCard";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { CoverDemo } from "@/components/Cover";
import { LampDemo } from "@/components/Lamp";
import AnimatedLogoTitleBar from "@/components/Titlebar";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
      <LampDemo/>
      </div>
      <div className="-mt-110">
      <CoverDemo/>
      </div>
      
      <div>
      <CanvasRevealEffectDemo/>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/Underline_03.png"
          alt="Cover"
          width={600}
          height={600}
          />
    </div>
    <div>
    <HeroScrollDemo/>
    </div>

    <div>
    <AnimatedLogoTitleBar/>
    </div>



    </div>
  );
}
