import { createElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  RiAddLine,
  RiBugFill,
  RiCss3Fill,
  RiFileCodeFill,
  RiGlobalFill,
  RiPagesFill,
  RiShieldKeyholeFill,
  RiSubtractLine,
  RiTabletFill,
  RiTerminalBoxFill,
} from "@remixicon/react";
import {
  SiHtml5,
  SiCss,
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
  SiVite,
} from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import HeadingScope from "@/components/helpers/HeadingScope";
import Anchor from "@/components/ui/Anchor";
import Button from "@/components/ui/Button";
import { SectionTitle, TwoColumnsLayout } from "@/components/ui/SectionLayouts";
import { VSCodeIcon, MotionIcon, NextAuthSmIcon } from "@/components/ui/Icons";
import Heading from "@/components/ui/Heading";

const SubTitle = ({ children, tip }) => (
  <div className="flex flex-col items-center justify-center text-center text-xl font-medium">
    <Heading>{children}</Heading>
    {tip && <p className="text-sm text-(--text-color-g)/80">{tip}</p>}
  </div>
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
      sectionTitle={
        <SectionTitle sectionId={IDS.proficiencies}>Proficiencies</SectionTitle>
      }
      left={
        <HeadingScope>
          <div className="fancy-bg-1 flex flex-col items-center gap-10 p-4">
            <SubTitle tip="Skill icons appear on interaction">
              Skill Sets
            </SubTitle>
            <HeadingScope>
              <ul
                id="skills-list"
                className="group/list flex flex-wrap gap-y-2"
              >
                {skills.map(({ group, skills, collapsedSkills }) => (
                  <li
                    key={group}
                    className="flex flex-col gap-y-1 group-focus-within/list:not-focus-within:[&>h4]:opacity-50 group-hover/list:not-hover:not-focus-within:[&>h4]:opacity-50"
                  >
                    <Heading
                      id={normGrpId(group)}
                      className="my-3 font-semibold"
                    >
                      {group}
                    </Heading>
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
                        <li
                          aria-hidden
                          className="h-5 text-(--text-color-g)/50"
                        >
                          ...
                        </li>
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </HeadingScope>
            <Button
              aria-expanded={isSkillsExpanded}
              aria-controls="skills-list"
              className="p-2 py-1"
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
        </HeadingScope>
      }
      right={
        <HeadingScope>
          <div className="flex flex-col items-center gap-5 p-1">
            <SubTitle>Tech Stack</SubTitle>
            <ul className="group mt-10 flex flex-wrap items-center justify-center gap-2.5 max-sm:scale-90">
              {techStack.techStackIcons.map(({ name, icon }) => (
                <li
                  key={`$i*-${name}`}
                  className="inline-flex flex-col items-center gap-1 rounded-full"
                >
                  {createElement(icon, {
                    "aria-hidden": true,
                    className:
                      "size-15 rounded-full border-1 border-(--border-color-g)/50 bg-white/25 p-4",
                    color: "default",
                    title: null,
                  })}
                  <span className="text-sm">{name}</span>
                </li>
              ))}
            </ul>
            <div className="text-(--text-secondary-color-g)">
              {techStack.techStackDescription}
            </div>
          </div>
        </HeadingScope>
      }
    />
  );
};

const S = (props) => (
  <strong className="font-semibold text-(--text-color-g)" {...props} />
);

const skills = [
  {
    group: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Framer Motion", icon: MotionIcon },
      { name: "SASS", icon: SiSass },
      { name: "Vite", icon: SiVite },
    ],
    collapsedSkills: [
      { name: "MDX", icon: SiMdx },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "JQuery", icon: SiJquery },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Styled JSX", icon: RiCss3Fill },
      {
        name: "EJS",
        icon: () => (
          <span className="font-semibold text-yellow-500">&lt;%</span>
        ),
      },
    ],
  },

  {
    group: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NextAuth.js", icon: NextAuthSmIcon },
      { name: "Zod", icon: SiZod },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
    collapsedSkills: [],
  },

  {
    group: "Tools & Deployment",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VSCodeIcon },
      { name: "NPM/PNPM", icon: SiPnpm },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
    ],
    collapsedSkills: [{ name: "Render", icon: SiRender }],
  },

  {
    group: "Core Concepts",
    skills: [
      { name: "Responsive Design", icon: RiTabletFill },
      { name: "REST API Design & Integration", icon: RiGlobalFill },
      { name: "Authentication & Authorization", icon: RiShieldKeyholeFill },
      { name: "Deployment", icon: RiPagesFill },
      { name: "Debugging", icon: RiBugFill },
      { name: "Command Line Tools", icon: RiTerminalBoxFill },
    ],
    collapsedSkills: [
      { name: "CSS-in-JS", icon: RiCss3Fill },
      { name: "OOP Principles", icon: RiFileCodeFill },
    ],
  },
];

const techStack = {
  techStackIcons: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
  ],
  techStackDescription: (
    <div className="flex flex-col gap-4 p-2 sm:p-4">
      <div className="flex flex-col gap-3">
        <p>
          My main stack is <S>React</S> and <S>Next.js</S> on the frontend,
          paired with <S>Node.js</S>, <S>Express</S>, and <S>MongoDB</S> on the
          backend — the full <S>MERN stack</S>. I also use <S>TypeScript</S> for
          type safety, <S>TailwindCSS</S> for styling, and <S>Prisma</S> when
          working with relational databases.
        </p>

        <p>
          This stack lets me build complete, end-to-end applications — from UI
          and state management to REST APIs, data modeling, and deployment — and
          I explore additional tools as projects demand.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          {
            href: "https://nextjs.org/",
            label: (
              <>
                Learn more about <strong>Next.js</strong>.
              </>
            ),
          },
          {
            href: "https://www.geeksforgeeks.org/mern/understand-mern-stack/",
            label: (
              <>
                Learn more about <strong>MERN Stack</strong>.
              </>
            ),
          },
        ].map((link, i) => (
          <Anchor
            key={i}
            href={link.href}
            className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
          >
            {link.label}
          </Anchor>
        ))}
      </div>
    </div>
  ),
};

const ProficienciesView = () => (
  <ProficienciesSection skills={skills} techStack={techStack} />
);

export default ProficienciesView;
