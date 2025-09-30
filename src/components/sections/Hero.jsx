import { createElement } from "react";
import { SiNextdotjs, SiReact } from "@icons-pack/react-simple-icons";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

import config from "@config/config";
import { scrollDown } from "@utils/jsUtils";
import Tooltip from "@components/elements/Tooltip";
import { DownCircleIcon } from "@components/elements/CustomIcons";

const HeroCreator = ({ children, size = 16, techstackIcons }) => {
  return (
    <div
      id={config.SECTION_IDS.HERO}
      className="fancy-bg-1 flex h-svh flex-col items-center justify-center gap-20 pt-15"
    >
      <div
        style={{ "--circle-size": `${size}rem` }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="absolute -z-1 grid size-(--circle-size) place-items-center rounded-full bg-(--accent-color-1)/14 opacity-70 outline-20 outline-(--accent-color-1)/5 max-sm:[--circle-size:14rem]">
          <div className="absolute top-0 right-0 size-[calc(var(--circle-size)*0.15)] rounded-full bg-(image:--gradient-1)" />
          <div className="absolute bottom-0 left-0 size-[calc(var(--circle-size)*0.4)] rounded-full bg-(image:--gradient-1)" />
          <div className="size-[calc(var(--circle-size)*0.75)] rounded-full bg-(image:--gradient-2)" />
        </div>

        <div className="hero-main">{children}</div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {techstackIcons.map(({ name, icon }) => (
          <Tooltip key={name} content={name}>
            {createElement(icon, {
              className:
                "size-12 rounded-full bg-white p-2 border border-(--global-border-color)/50",
              color: "default",
              title: null,
            })}
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

const ScrollDownButton = () => {
  const handleClick = () => {
    scrollDown();
  };

  return (
    <div className="absolute bottom-0 flex h-20 w-full justify-center">
      <DownCircleIcon
        className="size-8 cursor-pointer fill-none stroke-(--global-text-color) opacity-70 transition-opacity hover:opacity-100"
        onClick={handleClick}
      />
    </div>
  );
};

const HeroHighlighter = ({ children, className }) => (
  <span
    className={`highlight-primary rounded-full px-3! py-0.5 italic ${className}`}
  >
    {children}
  </span>
);

const Hero = () => (
  <>
    <HeroCreator
      techstackIcons={[
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
      ]}
    >
      <div className="flex flex-col flex-wrap items-center justify-center gap-7 text-center tracking-wider text-(--global-text-color)">
        <h1 className="flex gap-3 text-2xl">
          <span className="inline-block transition-transform duration-400 hover:scale-105 hover:-rotate-2">
            <span className="font-semibold">Hello, I&apos;m</span>
            <HeroHighlighter className="ml-1">~ Vishnu D</HeroHighlighter>.
          </span>{" "}
          <Tooltip
            content={
              <>
                Say Hello!
                <HandRaisedIcon className="ml-1.5 inline size-4 -translate-0.5 -rotate-20" />
              </>
            }
            side="top"
            sideOffset={8}
          >
            <a
              href="mailto:vishnu.d.t.2004@gmail.com"
              className="hover:*:animate-fadeIn inline-grid place-items-center rounded-full border-2 p-1.5"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="size-4.5" />
            </a>
          </Tooltip>
        </h1>

        <p className="max-w-[700px] px-3 text-[18px]">
          I build modern web applications with clean, maintainable code and
          seamless user experiences.
        </p>
      </div>
    </HeroCreator>

    <ScrollDownButton />
  </>
);

export default Hero;
