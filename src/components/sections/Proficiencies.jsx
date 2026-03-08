import { createElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  RiAddLine,
  RiBugFill,
  RiCss3Fill,
  RiFileCodeFill,
  RiGlobalFill,
  RiInformationFill,
  RiPagesFill,
  RiShieldKeyholeFill,
  RiSubtractLine,
  RiTabletFill,
  RiTerminalBoxFill,
} from "@remixicon/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiRender,
  SiRedux,
  SiMdx,
  SiPnpm,
  SiZod,
  SiStyledcomponents,
} from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import Anchor from "@/components/ui/Anchor";
import Button from "@/components/ui/Button";
import { TwoColumnsLayout } from "@/components/ui/SectionLayouts";
import { Tip } from "@/components/ui/Tooltip";
import {
  VSCodeIcon,
  MotionIcon,
  NextAuthSmIcon,
} from "@/components/ui/Icons";

const TipBtn = ({ tip, ...attr }) => (
  <Tip tip={tip}>
    <button
      type="button"
      aria-label="Section information"
      className="cursor-help! rounded-full text-sm"
      {...attr}
    >
      <RiInformationFill aria-hidden className="size-5" />
    </button>
  </Tip>
);

const SkillEntry = ({ children: name, icon }) => (
  <li
    tabIndex={0}
    className={twMerge(
      "focus-reset cursor-effect-subtle highlight-secondary group/item relative flex! list-none items-center justify-center rounded-full text-sm group-focus-within/list:not-focus:opacity-75 group-hover/list:not-hover:not-focus:opacity-75 focus-visible:outline-none",
    )}
  >
    {name}{" "}
    {icon && (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -top-17 m-auto size-0 origin-center overflow-hidden rounded-full border-(--border-color-g) bg-white text-black opacity-100 duration-150 group-hover/item:size-10 group-hover/item:border group-hover/item:p-2 group-hover/item:opacity-100 group-focus-visible/item:size-10 group-focus-visible/item:border group-focus-visible/item:p-2 group-focus-visible/item:opacity-100"
      >
        {createElement(icon, {
          className: "size-full",
          color: "default",
        })}
      </span>
    )}
  </li>
);

const ProficienciesSection = ({
  skills,
  techStack = {
    techStackIcons: [{ name: "", icon: "" }],
    techStackDescription: "",
  },
}) => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

  const normGrpId = (str) => str.toLowerCase().replaceAll(" ", "-");

  return (
    <TwoColumnsLayout
      sectionId={IDS.proficiencies}
      sectionTitle="Proficiencies"
      left={
        <div className="fancy-bg-1 flex flex-col items-center gap-10 p-4">
          <h3 className="flex items-center justify-center gap-2 text-center text-xl font-semibold tracking-wider">
            Skill Sets
            <TipBtn tip="Skill icons appear on interaction" />
          </h3>

          <ul id="skills-list" className="group/list flex flex-wrap gap-y-2">
            {skills.map(({ group, skills, collapsedSkills }) => (
              <li
                key={group}
                className="flex flex-col gap-y-1 group-focus-within/list:not-focus-within:[&>h4]:opacity-50 group-hover/list:not-hover:not-focus-within:[&>h4]:opacity-50"
              >
                <h4 id={normGrpId(group)} className="my-3 font-semibold">
                  {group}
                </h4>

                <ul
                  aria-labelledby={normGrpId(group)}
                  className="flex flex-wrap gap-x-1 gap-y-2"
                >
                  {skills.map(({ name, icon = undefined }) => (
                    <SkillEntry key={name} icon={icon}>
                      {name}
                    </SkillEntry>
                  ))}

                  {isSkillsExpanded ? (
                    collapsedSkills.map(({ name, icon = undefined }) => (
                      <SkillEntry key={name} icon={icon}>
                        {name}
                      </SkillEntry>
                    ))
                  ) : (
                    <li aria-hidden className="h-5 text-(--text-color-g)/50">
                      ...
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
          <Button
            aria-expanded={isSkillsExpanded}
            aria-controls="skills-list"
            className="p-1.5 py-0.5"
            onClick={() => setIsSkillsExpanded((p) => !p)}
            icon={
              <span aria-hidden className="inline-flex *:size-3.75">
                {isSkillsExpanded ? <RiSubtractLine /> : <RiAddLine />}
              </span>
            }
          >
            <span>View {isSkillsExpanded ? "fewer" : "all"} skills</span>
          </Button>
        </div>
      }
      right={
        <div className="flex flex-col items-center gap-5 p-1">
          <h3 className="mb-5 flex items-center justify-center gap-2 text-center text-xl font-semibold tracking-wider">
            Tech Stack
            <TipBtn tip="Icon names appear on interaction" />
          </h3>
          <div className="group flex flex-wrap items-center justify-center gap-2 max-sm:scale-90">
            {techStack.techStackIcons.map(({ name, icon }) => (
              <Tip key={name} tip={name}>
                <button
                  type="button"
                  aria-label={name}
                  className="focus-reset cursor-effect-subtle inline-flex cursor-default! rounded-full transition-opacity group-hover:not-hover:not-focus:opacity-60 hover:bg-white/25 focus:bg-white/25 focus-visible:outline-none"
                >
                  {createElement(icon, {
                    "aria-hidden": true,
                    className:
                      "size-15 rounded-full border-1 border-(--border-color-g)/50 bg-white/15 p-4 ",
                    color: "default",
                    title: null,
                  })}
                </button>
              </Tip>
            ))}
          </div>
          <div className="text-(--text-secondary-color-g)">
            {techStack.techStackDescription}
          </div>
        </div>
      }
    />
  );
};

const S = (props) => (
  <strong className="font-semibold text-(--text-color-g)" {...props} />
);

const skills = [
  {
    group: "Development",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "NextAuth.js", icon: NextAuthSmIcon },
      { name: "Zod", icon: SiZod },
    ],
    collapsedSkills: [
      { name: "Redux", icon: SiRedux },
      { name: "Framer Motion", icon: MotionIcon },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      {
        name: "EJS",
        icon: () => (
          <span className="font-semibold text-yellow-500">&lt;%</span>
        ),
      },
      { name: "SASS", icon: SiSass },
      { name: "MDX", icon: SiMdx },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Styled JSX", icon: RiCss3Fill },
    ],
  },
  {
    group: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VSCodeIcon },
      { name: "NPM/PNPM", icon: SiPnpm },
      { name: "CLI Usage", icon: RiTerminalBoxFill },
      { name: "Vercel", icon: SiVercel },
    ],
    collapsedSkills: [
      { name: "Postman", icon: SiPostman },
      { name: "Render", icon: SiRender },
    ],
  },
  {
    group: "Concepts & Methodologies",
    skills: [
      { name: "Responsive Design", icon: RiTabletFill },
      { name: "REST API Design & Integration", icon: RiGlobalFill },
      { name: "Authentication & Authorization", icon: RiShieldKeyholeFill },
      { name: "Deployment", icon: RiPagesFill },
      { name: "Debugging", icon: RiBugFill },
    ],
    collapsedSkills: [
      { name: "CSS-in-JS", icon: RiCss3Fill },
      { name: "OOP Principles", icon: RiFileCodeFill },
    ],
    // {name: "SDLC", icon: ArrowPathRoundedSquareIcon,}
    // {name: "DSA", icon: CubeIcon,}
  },
  // {
  //   group: "Programming Languages",
  //   skills: ["Python (Intermediate)"],
  // },
];

const techStack = {
  techStackIcons: [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
  ],
  techStackDescription: (
    <div className="flex flex-col gap-10 p-2 sm:p-4">
      <div className="flex flex-col gap-3">
        <p>
          My main stack revolves around <S>React</S> and <S>Next.js</S> for
          building modern, performant UIs, supported by <S>Node.js</S> (with{" "}
          <S>Express</S>) and <S>MongoDB</S> on the backend. I also explore
          tools and frameworks that improve{" "}
          <span className="underline underline-offset-2">
            developer experience
          </span>
          , like <S>TypeScript</S>, <S>Prisma</S>, and <S>TailwindCSS</S>.
        </p>

        <p>
          This stack allows me to build end-to-end applications — from UI and
          state management to APIs, data modeling, and deployment.
        </p>
      </div>

      <Anchor
        href="https://nextjs.org/"
        className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
      >
        <span>
          {/* prevents flex-related text wrapping issue */}
          Read more about <strong>Next.js</strong> development.
        </span>
      </Anchor>
    </div>
  ),
};

const ProficienciesView = () => (
  <ProficienciesSection skills={skills} techStack={techStack} />
);

export default ProficienciesView;
