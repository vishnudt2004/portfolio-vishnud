import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

import config from "@config/config";
import { scrollDown } from "@utils/jsUtils";

const HeroCreator = ({ children, size = 16 }) => {
  return (
    <div
      id={config.SECTION_IDS.HERO}
      className="grid h-svh w-full place-items-center"
    >
      <div
        style={{ "--circle-size": `${size}rem` }}
        className="relative flex flex-col items-center justify-center gap-4"
      >
        <div className="absolute -z-1 grid h-(--circle-size) w-(--circle-size) place-items-center opacity-60 max-sm:[--circle-size:14rem]">
          <div className="absolute top-0 right-0 h-[calc(var(--circle-size)*0.15)] w-[calc(var(--circle-size)*0.15)] rounded-full bg-(image:--gradient-1)" />
          <div className="absolute bottom-0 left-0 h-[calc(var(--circle-size)*0.4)] w-[calc(var(--circle-size)*0.4)] rounded-full bg-(image:--gradient-1)" />
          <div className="h-[calc(var(--circle-size)*0.75)] w-[calc(var(--circle-size)*0.75)] rounded-full bg-(image:--gradient-2)" />
        </div>

        <div className="hero-main">{children}</div>
      </div>
    </div>
  );
};

const ScrollDownButton = () => {
  const handleClick = () => {
    setTimeout(() => scrollDown(), 500);
  };

  return (
    <div
      className="group max absolute inset-x-0 bottom-5 m-auto flex h-18 w-9 cursor-pointer justify-center rounded-full border border-(--global-text-color) inset-ring-3 inset-ring-(--global-border-color) transition-transform duration-400 hover:rotate-45 max-sm:h-16 max-sm:w-8"
      onClick={handleClick}
    >
      <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-(--global-text-color) transition-all duration-400 ease-in group-hover:translate-y-9.5 group-hover:-rotate-225 group-hover:delay-200 max-sm:h-6 max-sm:w-6 max-sm:group-hover:translate-y-8.5">
        <ArrowLongDownIcon className="h-7/10 w-7/10 rotate-180 text-(--global-background-color) max-sm:h-6/10 max-sm:w-6/10" />
      </div>
    </div>
  );
};

const HeroHighlighter = ({ children, className }) => (
  <span className={`highlight-primary rounded-full px-3! py-0.5 ${className}`}>
    {children}
  </span>
);

const Hero = () => (
  <>
    <HeroCreator>
      <div className="flex flex-col flex-wrap items-center justify-center gap-7 text-center tracking-wider text-(--global-text-color)">
        <h1 className="text-3xl font-bold transition-transform duration-400 hover:scale-110 hover:-rotate-4 max-sm:text-2xl">
          Hello, I&apos;m{" "}
          <HeroHighlighter className="group">~ Vishnu D</HeroHighlighter>.
        </h1>

        <p className="w-max-[700px] text-2xl max-sm:text-xl">
          I develop fully-fledged full-stack web applications.
        </p>
      </div>
    </HeroCreator>

    <ScrollDownButton />
  </>
);

export default Hero;
