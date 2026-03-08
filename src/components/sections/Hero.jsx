import { twMerge } from "tailwind-merge";
import { RiArticleFill } from "@remixicon/react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { scrollToSection } from "@/utils/jsUtils";
import { sectionTitleId } from "@/utils/siteUtils";
import Button from "../ui/Button";
import { HeroRevealMotion } from "@/components/ui/Animations";
import ThemeVisual from "@/components/ui/ThemeVisual";
import { DownCircleIcon, HandIcon } from "@/components/ui/Icons";

const ScrollDownBtn = () => {
  return (
    <button
      aria-label="Scroll to About section"
      className="absolute bottom-10 left-1/2 flex size-8 w-fit -translate-x-1/2 justify-center rounded-full bg-(--bg-color-g) opacity-70 transition hover:translate-y-1 hover:opacity-100 focus-visible:opacity-100"
      onClick={() => scrollToSection("about")}
    >
      <DownCircleIcon
        aria-hidden
        style={{ "--color": "var(--text-color-g)" }}
        className="size-full fill-none"
      />
    </button>
  );
};

const HeroStatus = ({ status: { color, msg } }) => {
  const colors = {
    red: "from-red-500 to-red-700",
    green: "from-green-500 to-green-700",
    blue: "from-blue-500 to-blue-700",
  };

  return msg ? (
    <div
      aria-label="Availability status"
      className="flex w-fit items-center gap-2 rounded-full bg-(--text-color-g)/8 px-2 py-0.5 text-xs sm:text-sm"
    >
      <span
        aria-hidden
        className={`size-2 rounded-full bg-linear-30 ${colors[color]}`}
      />
      <span>{msg}</span>
    </div>
  ) : null;
};

const HeroContent = ({
  greeting,
  name,
  role,
  email,
  tagline,
  resume,
  status,
}) => (
  <div className="flex w-dvw flex-col justify-center gap-6 max-lg:items-center max-lg:text-center">
    <h1 id={sectionTitleId(IDS.hero)} className="text-3xl sm:text-4xl">
      {greeting}{" "}
      <span className="whitespace-nowrap text-(--accent-color-g)">{name}</span>.
    </h1>

    <p className="font-medium tracking-wide text-balance">{role}</p>

    <p className="text-[15px] max-lg:max-w-150 sm:text-base">{tagline}</p>

    <HeroStatus status={status} />

    <div className="mt-5 flex flex-wrap gap-3 *:px-4 *:text-sm *:leading-5 max-lg:justify-center">
      {[
        {
          label: "View Resume",
          color: undefined,
          icon: <RiArticleFill aria-hidden className="order-1 size-4" />,
          cn: "",
          href: resume,
          "aria-label": "Open resume PDF",
        },
        {
          label: "Say Hello!",
          color: "var(--accent-color-g)",
          icon: (
            <HandIcon
              aria-hidden
              className="order-1 inline size-4 fill-white"
            />
          ),
          cn: "text-white",
          href: `mailto:${email}`,
          "aria-label": "Send me an email",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ].map(({ label, color, icon, href, cn, ...rest }) => (
        <Button
          key={label.replaceAll(" ", "-")}
          asChild
          color={color}
          icon={icon}
          className={`gap-3 max-sm:w-44 ${cn}`}
        >
          <a href={href} {...rest}>
            {label}
          </a>
        </Button>
      ))}
    </div>
  </div>
);

const HeroVisual = () => (
  <ul className="group/ul relative grid aspect-square w-full min-w-[450px] grid-cols-3 grid-rows-3 place-items-center divide-x divide-y divide-solid divide-(--border-color-g) p-4 transition-colors">
    {[
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ].map((t, i) => (
      <li
        key={t.name}
        className="grid h-full w-full place-items-center nth-[3n]:border-r-0 nth-last-[-n+3]:border-b-0"
      >
        <HeroRevealMotion delay={(i + 1) * 0.15}>
          <div
            style={{
              "--color": t.color,
            }}
            className={twMerge(
              "flex size-24 flex-col items-center justify-center gap-2 tracking-wide transition-colors duration-300",
              "group-not-hover/ul:bg-(--color,var(--text-color-g))/5 group-not-hover/ul:text-(--color)",
              "hover:bg-(--color,var(--accent-color-g))/5 hover:text-(--color)",
              "group relative overflow-hidden",
            )}
          >
            <t.icon aria-hidden />
            <span>{t.name}</span>
            <span className="pointer-events-none absolute -inset-1/2 -translate-x-full rotate-15 bg-gradient-to-r from-transparent via-(--text-color-g)/30 to-transparent group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700" />
          </div>
        </HeroRevealMotion>
      </li>
    ))}
  </ul>
);

const HeroLayout = ({ identity }) => {
  return (
    <div className="mx-auto flex min-h-dvh w-full flex-row px-10">
      <div className="fancy-bg-1 absolute inset-0 -z-1 [--color:var(--text-color-g)]/25 [--gap:50px]" />
      <ThemeVisual />

      <HeroRevealMotion>
        <div className="flex max-w-full justify-center lg:w-1/2">
          <HeroContent {...identity} />
        </div>
      </HeroRevealMotion>

      <div className="hidden w-1/2 place-items-center p-7 lg:grid">
        <HeroVisual />
      </div>

      <ScrollDownBtn />
    </div>
  );
};

const HeroView = () => (
  <HeroLayout
    identity={{
      greeting: "Hello, I’m",
      name: "Vishnu D",
      role: "Frontend / Full-Stack Developer • React, Next.js & TypeScript",
      tagline:
        "I build clean, maintainable web applications with a strong focus on UI consistency, developer experience, and real-world usability.",
      status: { color: "green", msg: "Open to Opportunities" },
      email: "vishnu.d.t.2004@gmail.com",
      resume:
        "https://vishnudt2004.github.io/vishnud-resume/vishnud-resume-fullstack.pdf",
    }}
  />
);

export default HeroView;
