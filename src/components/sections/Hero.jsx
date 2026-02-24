import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import { RiChatSmile2Fill } from "@remixicon/react";
import { SiNextdotjs, SiReact } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { scrollToSection } from "@/utils/jsUtils";
import { sectionTitleId } from "@/utils/siteUtils";
import { Tip } from "@/components/ui/Tooltip";
import { HeroBgOverlayMotion } from "@/components/ui/Animations";
import { DownCircleIcon, HandIcon } from "@/components/ui/CustomIcons";

const ScrollDownButton = () => {
  return (
    <button
      aria-label="Scroll down"
      className="absolute bottom-12 flex size-8 w-fit justify-center rounded-full opacity-70 transition hover:translate-y-1 hover:opacity-100 focus:opacity-100"
      onClick={() => scrollToSection("about")}
    >
      <DownCircleIcon
        aria-hidden
        className="size-full fill-none stroke-(--text-color-g)"
      />
    </button>
  );
};

const HeroHighlighter = ({ children, className }) => (
  <span
    className={twMerge(
      "highlight-primary rounded-full px-3 py-0.5 tracking-normal italic",
      className,
    )}
  >
    {children}
  </span>
);

const BgOverlay = ({ size }) => (
  <HeroBgOverlayMotion>
    <div
      aria-hidden
      role="presentation"
      style={{ "--circle-size": `${size}rem` }}
      className="absolute -z-1 grid size-(--circle-size) place-items-center rounded-full bg-(--accent-color-g)/14 opacity-70 outline-20 outline-(--accent-color-g)/5 transition-[scale,opacity] duration-300 group-focus-within:scale-105 group-focus-within:opacity-80! group-hover:scale-105 group-hover:opacity-80! max-sm:[--circle-size:14rem]"
    >
      <div className="absolute top-0 right-0 size-[calc(var(--circle-size)*0.15)] rounded-full bg-(image:--gradient-1)" />
      <div className="absolute bottom-0 left-0 z-0 size-[calc(var(--circle-size)*0.4)] rounded-full bg-(image:--gradient-1)" />
      <div className="-z-1 size-[calc(var(--circle-size)*0.75)] rounded-full bg-(image:--gradient-2) delay-100 duration-500 group-focus-within:scale-95 group-hover:scale-95" />
    </div>
  </HeroBgOverlayMotion>
);

const HeroStatus = ({ status: { color, msg } }) => {
  const colors = {
    red: "from-red-500 to-red-800",
    green: "from-green-500 to-green-800",
    blue: "from-blue-500 to-blue-800",
  };

  return msg ? (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-2 rounded-full bg-(--bg-color-g)/75 px-2 py-1 text-xs"
    >
      <span
        aria-hidden
        className={`size-2 rounded-full bg-linear-30 ${colors[color]}`}
      />
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
      <RiChatSmile2Fill aria-hidden className="size-4.5" />
    </a>

    <span
      aria-hidden
      className="absolute -top-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-(--bg-color-g)/25 px-1 text-xs text-nowrap opacity-0 duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
    >
      <span>Say Hi!</span>
      <HandIcon className="inline size-3.5 fill-(--text-color-g)" />
    </span>
  </div>
);

const HeroIdentity = ({ greeting, name, role, email }) => (
  <div>
    <div className="flex items-center justify-center gap-2">
      <h1
        id={sectionTitleId(IDS.hero)}
        className="text-xl duration-300 hover:tracking-wide max-[320px]:text-[18px] sm:text-2xl"
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

      <HeroCta email={email} />
    </div>

    <span className="mt-5 block bg-(--bg-color-g)/25 px-2 py-0.5 text-sm font-semibold tracking-wide">
      {role}
    </span>
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
    <div className="relative flex h-svh flex-col items-center justify-center gap-20 pt-15">
      <div
        aria-hidden
        className="fancy-bg-1 absolute inset-10 -z-1 sm:inset-14 sm:top-17"
      />

      <div className="group relative flex flex-col items-center justify-center">
        <BgOverlay size={bgOverlaySize} />

        <div className="hero-main">
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 text-center text-(--text-color-g) sm:gap-8">
            <HeroIdentity {...identity} />

            <p className="max-w-[600px] bg-(--bg-color-g)/25 px-3 py-0.5">
              {tagline}
            </p>

            <HeroStatus status={status} />
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-2">
        {techIcons.map(({ name, icon }) => (
          <Tip key={name} tip={name}>
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
          </Tip>
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
      role: (
        <>
          Frontend / Full-stack Developer{" "}
          <span className="whitespace-nowrap">
            • React, Next.js & TypeScript
          </span>
        </>
      ),
      email: "vishnu.d.t.2004@gmail.com",
    }}
    tagline="I build clean, maintainable web applications with a strong focus on UI consistency, developer experience, and real-world usability."
    techIcons={[
      { name: "React.js", icon: SiReact },
      {
        name: "Next.js",
        icon: NextjsIcon,
      },
    ]}
    status={{
      color: "green",
      msg: "Open to Opportunities",
    }}
  />
);

export default HeroView;
