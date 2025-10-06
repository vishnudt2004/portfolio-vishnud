import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import { SiNextdotjs, SiReact } from "@icons-pack/react-simple-icons";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

import config from "@/config";
import { scrollIntoSection } from "@/utils/jsUtils";
import Tooltip from "@/components/elements/Tooltip";
import {
  HeroFgMotion,
  HeroBgOverlayMotion,
} from "@/components/elements/Animations";
import { DownCircleIcon } from "@/components/elements/CustomIcons";

const ScrollDownButton = () => {
  const handleClick = () => {
    scrollIntoSection(undefined, "about");
  };

  return (
    <div className="absolute bottom-0 flex h-20 w-full justify-center">
      <DownCircleIcon
        className="size-8 cursor-pointer fill-none stroke-(--global-text-color) opacity-70 transition-all hover:translate-y-1 hover:opacity-100"
        onClick={handleClick}
      />
    </div>
  );
};

const HeroHighlighter = ({ children, className }) => (
  <span
    className={twMerge(
      "highlight-primary rounded-full px-3! py-0.5 italic",
      className,
    )}
  >
    {children}
  </span>
);

const BgOverlay = ({ size, ref: motionRef }) => (
  <div
    ref={motionRef}
    style={{ "--circle-size": `${size}rem` }}
    className="absolute -z-1 grid size-(--circle-size) place-items-center rounded-full bg-(--accent-color-1)/14 opacity-70 outline-20 outline-(--accent-color-1)/5 transition-[scale,_opacity] duration-300 group-hover:scale-105 group-hover:opacity-80! max-sm:[--circle-size:14rem]"
  >
    <div className="absolute top-0 right-0 size-[calc(var(--circle-size)*0.15)] rounded-full bg-(image:--gradient-1)" />
    <div className="absolute bottom-0 left-0 z-0 size-[calc(var(--circle-size)*0.4)] rounded-full bg-(image:--gradient-1)" />
    <div className="-z-1 size-[calc(var(--circle-size)*0.75)] rounded-full bg-(image:--gradient-2) duration-500 group-hover:scale-95 group-hover:delay-100" />
  </div>
);

const HeroSection = ({
  greeting,
  name,
  tagline,
  email,
  techIcons,
  bgOverlaySize = 16,
}) => {
  return (
    <div
      id={config.SECTION_IDS.HERO}
      className="fancy-bg-1 flex h-svh flex-col items-center justify-center gap-20 pt-15"
    >
      <div className="group relative flex flex-col items-center justify-center">
        <HeroBgOverlayMotion>
          <BgOverlay size={bgOverlaySize} />
        </HeroBgOverlayMotion>

        <div className="hero-main">
          <HeroFgMotion>
            <div className="flex flex-col flex-wrap items-center justify-center gap-7 text-center tracking-wider text-(--global-text-color)">
              <h1 className="flex gap-3 text-2xl">
                <span className="inline-block transition-transform duration-400 hover:scale-105 hover:-rotate-2">
                  <span className="font-semibold">{greeting}</span>
                  <HeroHighlighter className="ml-1">~ {name}</HeroHighlighter>.
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
                    href={`mailto:${email}`}
                    className="hover:*:animate-fadeIn inline-grid place-items-center rounded-full border-2 p-1.5"
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="size-4.5" />
                  </a>
                </Tooltip>
              </h1>

              <p className="max-w-[700px] px-3 text-[18px]">{tagline}</p>
            </div>
          </HeroFgMotion>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {techIcons.map(({ name, icon }) => (
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

      <ScrollDownButton />
    </div>
  );
};

const HeroView = () => (
  <HeroSection
    greeting="Hello, I'm"
    name="Vishnu D"
    tagline="I build modern web applications with clean, maintainable code and seamless user experiences."
    email="vishnu.d.t.2004@gmail.com"
    techIcons={[
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ]}
  />
);

export default HeroView;
