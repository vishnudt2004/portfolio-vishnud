import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import {
  GlobeAltIcon,
  DeviceTabletIcon,
  KeyIcon,
  CpuChipIcon,
  CommandLineIcon,
  CodeBracketSquareIcon,
  BugAntIcon,
  InformationCircleIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  WindowIcon,
} from "@heroicons/react/24/solid";
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
} from "@icons-pack/react-simple-icons";

import config from "@/config";
import Anchor from "@/components/elements/Anchor";
import { TwoColumnsLayout } from "@/components/elements/SectionLayouts";
import Tooltip from "@/components/elements/Tooltip";
import { VSCodeIcon, MotionIcon } from "@/components/elements/CustomIcons";

const ProficienciesSection = ({
  skills,
  techStack = {
    techStackIcons: [{ name: "", icon: "" }],
    techStackDescription: "",
  },
}) => (
  <TwoColumnsLayout
    sectionId={config.IDS_MAP.PROFICIENCIES}
    sectionTitle="Proficiencies"
    left={
      <div className="fancy-bg-1 flex flex-col items-center gap-10 p-4">
        <h3 className="flex items-center justify-center gap-2 text-center text-xl font-semibold tracking-wider">
          Skill Sets
          <Tooltip content="Skill icons appear on interaction">
            <button
              type="button"
              aria-label="Section information"
              className="cursor-effect-subtle cursor-help rounded-full text-sm"
            >
              <InformationCircleIcon aria-hidden="true" className="size-5" />
            </button>
          </Tooltip>
        </h3>

        <ul className="group/list flex flex-wrap gap-y-2">
          {skills.map(({ category, skills }) => (
            <li
              key={category}
              className="flex flex-col gap-y-1 group-focus-within/list:not-focus-within:[&>h4]:opacity-50 group-hover/list:not-hover:not-focus-within:[&>h4]:opacity-50"
            >
              <h4 id={`cat-${category}`} className="my-3 font-semibold">
                {category}
              </h4>

              <ul
                aria-labelledby={`cat-${category}`}
                className="flex flex-wrap gap-x-1 gap-y-2"
              >
                {skills.map(({ name, icon = undefined }) => (
                  <li
                    key={name}
                    tabIndex={0}
                    className={twMerge(
                      "focus-reset cursor-effect-subtle highlight-secondary group/item relative flex! list-none items-center justify-center rounded-full text-sm group-focus-within/list:not-focus:opacity-75 group-hover/list:not-hover:not-focus:opacity-75 focus-visible:outline-none",
                    )}
                  >
                    {name}{" "}
                    {icon && (
                      <span
                        aria-hidden
                        className="absolute inset-0 -top-17 m-auto size-0 origin-center overflow-hidden rounded-full border border-(--border-color-g) bg-white text-black opacity-100 duration-150 group-hover/item:size-10 group-hover/item:p-2 group-hover/item:opacity-100 group-focus-visible/item:size-10 group-focus-visible/item:p-2 group-focus-visible/item:opacity-100"
                      >
                        {createElement(icon, {
                          className: "size-full",
                          color: "default",
                        })}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    }
    right={
      <div className="flex flex-col items-center gap-5 p-1">
        <h3 className="mb-5 flex items-center justify-center gap-2 text-center text-xl font-semibold tracking-wider">
          Tech Stack
          <Tooltip content="Icon names appear on interaction">
            <button
              type="button"
              aria-label="Section information"
              className="cursor-effect-subtle cursor-help rounded-full text-sm"
            >
              <InformationCircleIcon aria-hidden="true" className="size-5" />
            </button>
          </Tooltip>
        </h3>
        <div className="group flex flex-wrap items-center justify-center gap-2 max-sm:scale-90">
          {techStack.techStackIcons.map(({ name, icon }) => (
            <Tooltip key={name} content={name}>
              <button
                type="button"
                aria-label={name}
                className="focus-reset cursor-effect-subtle inline-flex rounded-full transition-opacity group-hover:not-hover:not-focus:opacity-60 hover:bg-white/25 focus:bg-white/25 focus-visible:outline-none"
              >
                {createElement(icon, {
                  "aria-hidden": true,
                  className:
                    "size-15 rounded-full border-1 border-(--border-color-g)/50 bg-white/15 p-4 ",
                  color: "default",
                  title: null,
                })}
              </button>
            </Tooltip>
          ))}
        </div>
        <div className="text-(--text-secondary-color-g)">
          {techStack.techStackDescription}
        </div>
      </div>
    }
  />
);

const S = (props) => (
  <strong className="font-semibold text-(--text-color-g)" {...props} />
);

const ProficienciesView = () => {
  const skills = [
    {
      category: "Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "SASS", icon: SiSass },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "jQuery", icon: SiJquery },
        {
          name: "EJS",
          icon: () => (
            <span className="font-semibold text-yellow-500">&lt;%</span>
          ),
        },
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Redux", icon: SiRedux },
        { name: "Framer Motion", icon: MotionIcon },
        { name: "MDX", icon: SiMdx },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: VSCodeIcon },
        { name: "NPM/PNPM", icon: SiPnpm },
        { name: "CLI Usage", icon: CommandLineIcon },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
      ],
    },
    {
      category: "Concepts & Methodologies",
      skills: [
        { name: "Web Design", icon: WindowIcon },
        { name: "Responsive Design", icon: DeviceTabletIcon },
        { name: "API Development", icon: CodeBracketSquareIcon },
        { name: "Deployment", icon: GlobeAltIcon },
        { name: "3rd-party API Integration", icon: PuzzlePieceIcon },
        { name: "CSS-in-JS", icon: PaintBrushIcon },
        { name: "Authentication", icon: KeyIcon },
        { name: "Problem Solving", icon: CpuChipIcon },
        { name: "Debugging", icon: BugAntIcon },
        { name: "OOP", icon: CpuChipIcon },
        // {name: "SDLC", icon: ArrowPathRoundedSquareIcon}
        // {name: "DSA", icon: CubeIcon}
      ],
    },
    // {
    //   category: "Programming Languages",
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

  return <ProficienciesSection skills={skills} techStack={techStack} />;
};

export default ProficienciesView;
