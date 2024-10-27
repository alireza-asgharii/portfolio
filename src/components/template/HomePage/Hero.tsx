import { GridBackground } from "@/components/ui/GridBackground";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackground>
        <div className="flex justify-center z-10 my-10">
          <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            <h2 className="uppercase tracking-widest text-xs text-blue-100 text-center max-w-80">
              Dynamic Web Magic with Next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User Experiences"
            />
            <p className="mt-6 font-light text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Alireza, a Next.js Developer based in Iran.
            </p>

            <MagicButton outherClassName="mt-10" title="ُShow my work" />
          </div>
        </div>
      </GridBackground>
    </div>
  );
};

export default Hero;
