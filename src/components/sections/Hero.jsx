import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

import config from "@config/config";
import { scrollDown } from "@utils/jsUtils";

const HeroCreator = ({ children }) => (
  <div
    id={config.SECTION_IDS.HERO}
    className="grid h-svh w-full place-items-center"
  >
    <div className="relative flex flex-col items-center justify-center gap-4">
      <div className="absolute -z-1 grid h-64 w-64 place-items-center opacity-60">
        <div className="absolute top-0 right-0 h-10 w-10 rounded-full bg-(image:--gradient-1)" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-(image:--gradient-1)" />
        <div className="h-48 w-48 rounded-full bg-(image:--gradient-2)" />
      </div>

      <div className="hero-main">{children}</div>
    </div>
  </div>
);

const ScrollDownButton = () => (
  <div
    className="group absolute inset-x-0 bottom-5 m-auto flex h-18 w-9 cursor-pointer justify-center rounded-full border border-(--global-text-color) inset-ring-3 inset-ring-(--global-border-color) transition-transform duration-400 hover:rotate-45"
    onClick={() => scrollDown()}
  >
    <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-(--global-text-color) transition-all duration-400 ease-in group-hover:translate-y-9.5 group-hover:-rotate-225 group-hover:delay-200">
      <ArrowLongDownIcon className="h-7/10 w-7/10 rotate-180 text-(--global-background-color)" />
    </div>
  </div>
);

const HeroHighlighter = ({ children }) => (
  <span className="highlight-primary px-3! py-0.5">{children}</span>
);

const Hero = () => {
  return (
    <>
      <HeroCreator>
        <div className="flex flex-col flex-wrap items-center justify-center gap-7 text-center tracking-wider text-(--global-text-color)">
          <h1 className="text-3xl font-bold transition-transform duration-400 hover:scale-110 hover:-rotate-4">
            Hello, I&apos;m <HeroHighlighter>Vishnu D</HeroHighlighter>.
          </h1>

          <p className="w-max-[700px] text-[1.4rem]">
            I develop fully-fledged full-stack web applications.
          </p>
        </div>
      </HeroCreator>

      <ScrollDownButton />
    </>
  );
};

export default Hero;
