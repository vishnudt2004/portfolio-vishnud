import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";

import config from "@config/config";
import Anchor from "@components/elements/Anchor";
import Img from "@components/elements/Img";
import { Divider } from "@components/elements/Divider";
import HoverTooltip from "@components/elements/HoverTooltip";
import { TwoColumnsLayout } from "@components/elements/SectionLayouts";
import { LinkedinIcon } from "@components/elements/CustomIcons";

const AboutCreator = ({
  title = "About Me",
  image,
  aboutMe,
  moreAboutMeTitle = "More About Me",
  moreAboutMe = [],
}) => {
  return (
    <>
      <TwoColumnsLayout
        id={config.SECTION_IDS.ABOUT}
        sectionTitle={title}
        cols={{
          col1: () => (
            <Img
              src={image}
              alt="my-image"
              fallbackSrc="/assets/images/placeholders/person.webp"
              className="aspect-square h-fit w-[200px] rounded-full object-cover shadow-lg"
              caption="Vishnu D"
            />
          ),
          col2: () => <div className="fancy-bg-1 p-4">{aboutMe}</div>,
        }}
      />

      {moreAboutMe.length && <Divider />}

      {moreAboutMe.map((section, ind) => (
        <TwoColumnsLayout
          key={ind}
          sectionTitle={ind === 0 ? moreAboutMeTitle : ""}
          cols={{
            col1: () => <div className="p-4 max-sm:p-2">{section.col1}</div>,
            col2: () => <div className="p-4 max-sm:p-2">{section.col2}</div>,
          }}
        />
      ))}
    </>
  );
};

const Highlighter = ({ type = "primary", children, ...attr }) => (
  <span
    className={`highlight-${type} rounded-sm text-sm text-nowrap ${attr?.className ? attr.className : ""}`}
  >
    {children}
  </span>
);

const Underliner = ({ children }) => (
  <span className="underline decoration-(--global-text-color) decoration-2 underline-offset-4">
    {children}
  </span>
);

const MoreAboutSubTitle = ({ children }) => (
  <h1 className="mb-4 font-bold tracking-wider underline underline-offset-4">
    {children}
  </h1>
);

const About = () => {
  const aboutMe = (
    <div className="flex flex-col gap-10">
      <span>
        I'm Vishnu, a self-taught{" "}
        <Highlighter>Full-Stack Developer</Highlighter> focused on{" "}
        <Underliner>React, Next.js, and modern web tooling</Underliner>. I enjoy
        building applications and tools that are{" "}
        <Underliner>clean, modular, and maintainable</Underliner>, while also
        making the developer experience smoother through good documentation and
        reusable components.
      </span>

      <Anchor
        href="https://vishnudt2004.github.io/vishnud-resume/vishnud-resume.pdf"
        className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
      >
        Check out my <Highlighter>Resume</Highlighter> here.
      </Anchor>

      <ul className="flex h-full flex-wrap gap-2 p-3 max-md:self-center">
        {[
          {
            name: "GitHub",
            link: "https://github.com/vishnudt2004",
            icon: <SiGithub className="scale-110" />,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vishnu-dt",
            icon: <LinkedinIcon className="scale-120" />,
          },
          {
            name: "Email",
            link: "mailto:vishnu.d.t.2004@gmail.com",
            icon: <SiGmail color="default" className="scale-95" />,
          },
        ].map(({ name, link, icon }) => (
          <li key={name} title={name}>
            <HoverTooltip label={name} className="-bottom-7">
              <a
                href={link}
                title={name}
                target="_blank"
                className="inline-flex size-11 items-center justify-center rounded-full border-1 border-(--global-border-color) bg-(--global-background-color) p-2.5 text-(--global-text-color) transition-all duration-400 hover:bg-(--global-text-color) hover:text-(--global-background-color)"
              >
                {icon}
              </a>
            </HoverTooltip>
          </li>
        ))}
      </ul>
    </div>
  );

  const moreAboutMe = [
    {
      col1: (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <MoreAboutSubTitle>How I Got Started?</MoreAboutSubTitle>
            <div>
              I began with MERN stack basics during college and slowly expanded
              into the Next.js ecosystem. What started as curiosity turned into
              a consistent practice of building and shipping projects — from
              blogs and portfolios to my own{" "}
              <Underliner>UI component system with a CLI</Underliner>.
            </div>
          </div>

          <div className="flex flex-col">
            <MoreAboutSubTitle>What I’m Aiming For?</MoreAboutSubTitle>
            <div>
              Currently, I’m looking for opportunities where I can apply my
              skills to real-world products, especially in roles that value{" "}
              <Underliner>front-end engineering</Underliner>,{" "}
              <Underliner>full-stack development</Underliner>, or{" "}
              <Underliner>open-source contributions</Underliner>. I’m excited to
              keep learning, collaborate with teams, and push my projects beyond
              “personal experiments” into production-ready solutions.
            </div>
          </div>
        </div>
      ),
      col2: (
        <div className="flex flex-col">
          <MoreAboutSubTitle>What I Focus On?</MoreAboutSubTitle>
          <ul className="flex list-disc flex-col gap-4 px-5">
            <li>
              Building clean, maintainable full-stack apps (React, Next.js,
              Node.js, etc.)
            </li>
            <li>
              Focusing on reusability and clear documentation in UI development.
            </li>
            <li>
              Enhancing developer experience with tools, automation, and
              streamlined workflows
            </li>
            <li>Deploying & scaling apps with modern hosting solutions</li>
            <li>Continuously learning and adapting to new technologies</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <AboutCreator image={"image"} aboutMe={aboutMe} moreAboutMe={moreAboutMe} />
  );
};

export default About;
