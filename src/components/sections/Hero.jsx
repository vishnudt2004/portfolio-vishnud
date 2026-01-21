import { createElement } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { SiNextdotjs, SiReact } from "@icons-pack/react-simple-icons";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

import config from "@/config";
import { scrollIntoSection } from "@/utils/jsUtils";
import { getSectionTitleId } from "@/utils/siteUtils";
import Tooltip from "@/components/elements/Tooltip";
import { HeroBgOverlayMotion } from "@/components/elements/Animations";
import { DownCircleIcon } from "@/components/elements/CustomIcons";

const ScrollDownButton = () => {
  return (
    <button
      aria-label="Scroll down"
      className="absolute bottom-12 flex size-8 w-fit cursor-pointer justify-center rounded-full opacity-70 transition hover:translate-y-1 hover:opacity-100 focus:opacity-100"
      onClick={() => scrollIntoSection(undefined, "about")}
    >
      <DownCircleIcon
        aria-hidden="true"
        className="size-full fill-none stroke-(--text-color-g)"
      />
    </button>
  );
};

const HeroHighlighter = ({ children, className }) => (
  <span
    className={twMerge(
      "highlight-primary rounded-full px-3 py-0.5 italic",
      className,
    )}
  >
    {children}
  </span>
);

const BgOverlay = motion.create(({ size, ref: motionRef }) => (
  <div
    ref={motionRef}
    aria-hidden="true"
    role="presentation"
    style={{ "--circle-size": `${size}rem` }}
    className="absolute -z-1 grid size-(--circle-size) place-items-center rounded-full bg-(--accent-color-g)/14 opacity-70 outline-20 outline-(--accent-color-g)/5 transition-[scale,opacity] duration-300 group-focus-within:scale-105 group-focus-within:opacity-80! group-hover:scale-105 group-hover:opacity-80! max-sm:[--circle-size:14rem]"
  >
    <div className="absolute top-0 right-0 size-[calc(var(--circle-size)*0.15)] rounded-full bg-(image:--gradient-1)" />
    <div className="absolute bottom-0 left-0 z-0 size-[calc(var(--circle-size)*0.4)] rounded-full bg-(image:--gradient-1)" />
    <div className="-z-1 size-[calc(var(--circle-size)*0.75)] rounded-full bg-(image:--gradient-2) delay-100 duration-500 group-focus-within:scale-95 group-hover:scale-95" />
  </div>
));

const HeroStatus = ({ status: { color, msg } }) => {
  return msg ? (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-2 rounded-full bg-(--background-color-g)/75 px-3 py-1 text-xs"
    >
      <span aria-hidden="true" className={`size-2 rounded-full ${color}`} />
      <span>{msg}</span>
    </div>
  ) : null;
};

const HeroCta = ({ email }) => (
  <div className="relative flex gap-2">
    <a
      href={`mailto:${email}`}
      aria-label="Send me an email"
      className="hover:*:first:animate-fadeIn relative inline-grid place-items-center rounded-full border-2 p-1.5 opacity-85 duration-300 group-focus-within:scale-110 group-focus-within:opacity-100 group-hover:scale-110 group-hover:opacity-100"
    >
      <ChatBubbleOvalLeftEllipsisIcon aria-hidden="true" className="size-4.5" />
    </a>
    <span
      aria-hidden="true"
      className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 text-xs text-nowrap opacity-0 duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
    >
      <span>Say Hi!</span>
      <HandRaisedIcon className="inline size-3.5 -translate-0.5 -rotate-20" />
    </span>
  </div>
);

const HeroIdentity = ({ greeting, name, role, email }) => (
  <div className="flex items-start">
    <div>
      <h1
        id={getSectionTitleId(config.IDS_MAP.HERO)}
        className="text-xl duration-300 hover:tracking-wider max-[320px]:text-[18px] sm:text-2xl"
      >
        {greeting}{" "}
        <HeroHighlighter>
          <span aria-hidden>~</span> {name}
        </HeroHighlighter>
        <span
          aria-hidden
          className="mr-1.5 ml-0.5 inline-block size-1 rounded bg-(--text-color-g)"
        />
      </h1>

      <span className="mt-3 ml-8 block bg-(--background-color-g)/25 text-sm font-semibold tracking-widest">
        {role}
      </span>
    </div>

    <HeroCta email={email} />
  </div>
);

const HeroSection = ({
  identity,
  tagline,
  techIcons,
  bgOverlaySize = 16,
  status,
}) => {
  return (
    <div className="fancy-bg-1 flex h-svh flex-col items-center justify-center gap-20 pt-15">
      <div className="group relative flex flex-col items-center justify-center">
        <HeroBgOverlayMotion asChild>
          <BgOverlay size={bgOverlaySize} />
        </HeroBgOverlayMotion>

        <div className="hero-main">
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-center tracking-wider text-(--text-color-g)">
            <HeroIdentity {...identity} />

            <p className="max-w-[700px] px-3">{tagline}</p>

            <HeroStatus status={status} />
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-2">
        {techIcons.map(({ name, icon }) => (
          <Tooltip key={name} content={name}>
            <li
              aria-label={name}
              className="inline-block size-12 rounded-full border border-(--border-color-g)/50 bg-white/10 p-2 backdrop-blur-xl"
            >
              {createElement(icon, {
                "aria-hidden": true,
                className: "size-full",
                color: "default",
                title: null, // Hide default tooltip
              })}
            </li>
          </Tooltip>
        ))}
      </ul>

      <ScrollDownButton />
    </div>
  );
};

const NextjsIcon = (props) => (
  <span aria-hidden="true" className="relative inline-block size-full">
    <SiNextdotjs {...props} />
    <span className="absolute inset-0 -z-1 m-auto size-[90%] rounded-full bg-white" />
  </span>
);

const HeroView = () => (
  <HeroSection
    identity={{
      greeting: "Hello, I’m",
      name: "Vishnu D",
      role: "Full-stack Developer",
      email: "vishnu.d.t.2004@gmail.com",
    }}
    tagline="I build modern web applications with a focus on clean architecture and thoughtful user experience."
    techIcons={[
      { name: "React.js", icon: SiReact },
      {
        name: "Next.js",
        icon: NextjsIcon,
      },
    ]}
    status={{ color: "bg-green-500", msg: "Open to Collaborations" }}
  />
);

export default HeroView;
