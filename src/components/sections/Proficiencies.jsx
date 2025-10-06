import { Fragment, createElement } from "react";
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
    id={config.SECTION_IDS.PROFICIENCIES}
    sectionTitle="Proficiencies"
    cols={{
      col1: () => (
        <div className="fancy-bg-1 flex flex-col items-center gap-10 p-4">
          <h1 className="flex items-center justify-center gap-2 text-center text-xl font-bold tracking-wider">
            Skill Sets
            <Tooltip content="Hover on a skill to see its icon">
              <InformationCircleIcon className="size-5 cursor-help text-sm" />
            </Tooltip>
          </h1>

          <ul className="flex flex-wrap gap-x-1 gap-y-2">
            {skills.map(({ category, skills }) => (
              <Fragment key={category}>
                <h5 className="my-3 w-full font-bold">{category}</h5>
                {skills.map(({ name, icon = undefined }) => (
                  <li
                    key={name}
                    className="highlight-secondary group relative flex! list-none items-center justify-center rounded-full text-sm"
                  >
                    {name}{" "}
                    {icon && (
                      <span className="transition-center absolute inset-0 -top-10 m-auto size-0 rounded-full border border-(--global-border-color) bg-white p-2 text-black opacity-0 transition-all group-hover:size-10 group-hover:opacity-100">
                        {createElement(icon, {
                          className: "size-full",
                          color: "default",
                        })}
                      </span>
                    )}
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
      ),
      col2: () => (
        <div className="flex flex-col items-center gap-5 p-1">
          <h1 className="mb-5 flex items-center justify-center gap-2 text-center text-xl font-bold tracking-wider">
            Tech Stack
            <Tooltip content="Hover on icon to see name">
              <InformationCircleIcon className="size-5 cursor-help text-sm" />
            </Tooltip>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 max-sm:scale-90">
            {techStack.techStackIcons.map(({ name, icon }) => (
              <Tooltip key={name} content={name} sideOffset={-6}>
                {createElement(icon, {
                  className:
                    "mb-2 size-15 rounded-full border-1 border-(--global-border-color)/50 bg-[#fafafa] p-4",
                  color: "default",
                  title: null,
                })}
              </Tooltip>
            ))}
          </div>
          <div>{techStack.techStackDescription}</div>
        </div>
      ),
    }}
  />
);

const ProficienciesView = () => {
  const skills = [
    {
      category: "Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript (intermediate)", icon: SiTypescript },
        { name: "SASS", icon: SiSass },
        {
          name: "EJS",
          icon: () => <span className="font-bold text-yellow-500">&lt;%</span>,
        },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "jQuery", icon: SiJquery },
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma (beginner)", icon: SiPrisma },
        { name: "Redux", icon: SiRedux },
        { name: "MDX", icon: SiMdx },
        { name: "Framer Motion", icon: MotionIcon },
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
        <div>
          My main stack revolves around <b className="tracking-wider">React</b>{" "}
          and <b className="tracking-wider">Next.js</b> for building modern,
          performant UIs, supported by <b className="tracking-wider">Node.js</b>{" "}
          (with <b className="tracking-wider">Express</b>) and{" "}
          <b className="tracking-wider">MongoDB</b> on the backend. I also
          explore tools and frameworks that improve <u>developer experience</u>,
          like <b className="tracking-wider">TypeScript</b>,{" "}
          <b className="tracking-wider">Prisma</b>, and{" "}
          <b className="tracking-wider">TailwindCSS</b>.
        </div>
        <Anchor
          href="https://nextjs.org/"
          className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
        >
          Read more about <b className="mx-1">Next.js</b> development.
        </Anchor>
      </div>
    ),
  };

  return <ProficienciesSection skills={skills} techStack={techStack} />;
};

export default ProficienciesView;
