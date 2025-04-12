import { Fragment, createElement } from "react";
import {
  GlobeAltIcon,
  DeviceTabletIcon,
  KeyIcon,
  CpuChipIcon,
  CommandLineIcon,
  CodeBracketSquareIcon,
  BugAntIcon,
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
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetflix,
  SiFacebook,
  SiAirbnb,
} from "@icons-pack/react-simple-icons";

import config from "@config/config";
import Anchor from "@components/elements/Anchor";
import { TwoColumnsLayout } from "@components/elements/SectionLayouts";
import { VSCodeIcon as CustomVSCodeIcon } from "@components/elements/CustomIcons";

const ProficiencyCreator = ({
  skills,
  techStack = {
    techStackIcons: [{ name: "", icon: "" }],
    techStackDescription: "",
  },
}) => (
  <TwoColumnsLayout
    id={config.SECTION_IDS.PROFICIENCY}
    sectionTitle="Proficiency"
    cols={{
      col1: () => (
        <div className="fancy-bg-1 flex flex-col items-center gap-10 p-4">
          <h1 className="text-xl font-bold tracking-wider">Skill Sets</h1>
          <ul className="flex flex-wrap gap-2">
            {skills.map(({ category, skills }) => (
              <Fragment key={category}>
                <h5 className="my-3 w-full font-bold">{category}</h5>
                {skills.map(({ name, icon = undefined }) => (
                  <li
                    key={name}
                    className="highlight-secondary group relative flex! list-none items-center justify-center gap-1 rounded-xl"
                  >
                    {name}{" "}
                    {icon && (
                      <span className="transition-center absolute inset-0 -top-6 m-auto h-0 w-0 rounded-full border border-(--global-border-color) bg-white p-2 text-black opacity-0 transition-all group-hover:h-10 group-hover:w-10 group-hover:opacity-100">
                        {createElement(icon, {
                          className: "w-full h-full",
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
        <div className="flex flex-col items-center gap-10 p-1">
          <h1 className="text-xl font-bold tracking-wider">Tech Stack</h1>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {techStack.techStackIcons.map(({ name, icon }) => (
              <figure key={name} className="text-center">
                {createElement(icon, {
                  className:
                    "mb-2 h-24 w-24 rounded-full border-2 border-(--global-border-color) bg-[#fafafa] p-4 shadow-lg",
                  color: "default",
                })}
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="sm:text-[1.1rem]">
            {techStack.techStackDescription}
          </div>
        </div>
      ),
    }}
  />
);

const Highlighter = ({ type = "primary", children, ...attr }) => (
  <span
    className={`highlight-${type} mb-1 inline-flex! items-center justify-center gap-2 rounded-${type === "primary" ? "full" : "lg"} ${type === "primary" ? "px-3!" : ""} sm:text-[1rem] ${attr?.className ? attr.className : ""}`}
  >
    {children}
  </span>
);

const Proficiency = () => {
  const skills = [
    {
      category: "Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "SASS", icon: SiSass },
        {
          name: "EJS",
          icon: () => <span className="font-bold text-yellow-500">&lt;%</span>,
        }, // Closest match
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "jQuery", icon: SiJquery },
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "SQL", icon: SiMysql },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code (IDE)", icon: CustomVSCodeIcon },
        { name: "Command Line & Shell (Commands)", icon: CommandLineIcon },
      ],
    },
    {
      category: "Concepts & Methodologies",
      skills: [
        { name: "Web Design", icon: GlobeAltIcon },
        { name: "Responsive Design", icon: DeviceTabletIcon },
        { name: "API Development", icon: CodeBracketSquareIcon },
        { name: "Authentication & Authorization", icon: KeyIcon },
        { name: "Problem Solving", icon: CpuChipIcon },
        { name: "Debugging & Troubleshooting", icon: BugAntIcon },
        { name: "Object-Oriented Programming (OOP)", icon: CpuChipIcon },
        // {name: "Software Development Life Cycle (SDLC)", icon: ArrowPathRoundedSquareIcon}
        // {name: "Data Structures & Algorithms", icon: CubeIcon}
      ],
    },
    // {
    //   category: "Programming Languages",
    //   skills: ["C (Basics)", "Java (Basics)", "Python (Intermediate)"],
    // },
  ];

  const techStack = {
    techStackIcons: [
      { name: "Mongo DB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    techStackDescription: (
      <div className="flex flex-col gap-10">
        <div>
          MERN (<Highlighter>MongoDB</Highlighter>,
          <Highlighter>Express js</Highlighter>,
          <Highlighter>React js</Highlighter>,<Highlighter>Node js</Highlighter>
          ) is a powerful full-stack JavaScript technology used to build fast,
          interactive, and scalable web applications.
          <br />
          Popular Companies Using MERN:{" "}
          <Highlighter type="secondary">
            Netflix{" "}
            <SiNetflix className="inline-block h-4 w-4" color="default" />
          </Highlighter>
          ,
          <Highlighter type="secondary">
            Facebook{" "}
            <SiFacebook className="inline-block h-4 w-4" color="default" />
          </Highlighter>
          ,
          <Highlighter type="secondary">
            Airbnb <SiAirbnb className="inline-block h-4 w-4" color="default" />
          </Highlighter>
          , etc.
        </div>
        <Anchor
          href="https://www.mongodb.com/resources/languages/mern-stack"
          className="self-start text-[1rem] before:-bottom-0.5! after:-bottom-0.5!"
        >
          Read more about{" "}
          <Highlighter className="rounded-sm!">MERN</Highlighter> stack
          development.
        </Anchor>
      </div>
    ),
  };

  return <ProficiencyCreator skills={skills} techStack={techStack} />;
};

export default Proficiency;
