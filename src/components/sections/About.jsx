import { createElement } from "react";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";

import config from "@/config";
import Anchor from "@/components/elements/Anchor";
import Img from "@/components/elements/Img";
import { Divider } from "@/components/elements/Divider";
import Tooltip from "@/components/elements/Tooltip";
import { TwoColumnsLayout } from "@/components/elements/SectionLayouts";
import {
  LinkedinIcon,
  DuotoneComputerIcon,
  DuotoneLightbulbIcon,
  DuotonePluginIcon,
} from "@/components/elements/CustomIcons";

import profileImg from "@/assets/images/profile-image/vishnud.jpg";

const AboutSection = ({
  title = "About Me",
  image,
  aboutMe,
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
              alt="Vishnu D"
              fallbackSrc="/assets/images/placeholders/person.webp"
              className="aspect-square size-[200px] rounded-full object-cover shadow-[0_0_0_5px_color-mix(in_srgb,var(--global-border-color),transparent_70%)] grayscale-50 transition-all duration-300 hover:grayscale-0"
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
          sectionTitle={section.title}
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

const Underline = ({ children }) => (
  <span className="underline decoration-2 underline-offset-4">{children}</span>
);

const MoreAboutSubTitle = ({ children }) => (
  <h1 className="mb-4 font-bold tracking-wider text-(--global-text-color) underline underline-offset-4">
    {children}
  </h1>
);

const AboutView = () => {
  const aboutMe = (
    <div className="flex flex-col gap-10 text-(--global-secondary-text-color)">
      <span className="text-(--global-secondary-text-color)">
        I'm Vishnu, a self-taught{" "}
        <Highlighter>Full-Stack Developer</Highlighter> focused on{" "}
        <Underline>React, Next.js, and modern web tooling</Underline>. I enjoy
        building applications and tools that are{" "}
        <Underline>clean, modular, and maintainable</Underline>, while also
        making the developer experience smoother through good documentation and
        reusable components.
      </span>

      <Anchor
        href="https://vishnudt2004.github.io/vishnud-resume/vishnud-resume.pdf"
        className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
      >
        Check out my <Highlighter className="mx-1.5">Resume</Highlighter> here.
      </Anchor>

      <ul className="flex h-full flex-wrap gap-2 p-3 max-md:self-center">
        {[
          {
            name: "GitHub",
            link: "https://github.com/vishnudt2004",
            icon: <SiGithub title={null} className="scale-110" />,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vishnu-dt",
            icon: <LinkedinIcon title={null} className="scale-120" />,
          },
          {
            name: "Email",
            link: "mailto:vishnu.d.t.2004@gmail.com",
            icon: <SiGmail title={null} color="default" className="scale-95" />,
          },
        ].map(({ name, link, icon }) => (
          <li key={name}>
            <Tooltip content={name}>
              <a
                href={link}
                target="_blank"
                className="inline-flex size-11 items-center justify-center rounded-full border-1 border-(--global-border-color) bg-(--global-background-color) p-2.5 text-(--global-text-color) transition-all duration-400 hover:bg-(--global-text-color) hover:text-(--global-background-color)"
              >
                {icon}
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );

  const moreAboutMe = [
    {
      title: "Journey & Focus",
      col1: (
        <div className="flex flex-col gap-10 text-(--global-secondary-text-color)">
          <div className="flex flex-col">
            <MoreAboutSubTitle>How I Got Started?</MoreAboutSubTitle>
            <div>
              I began with MERN stack basics during college and slowly expanded
              into the Next.js ecosystem. What started as curiosity turned into
              a consistent practice of building and shipping projects — from
              blogs and portfolios to my own{" "}
              <Underline>UI component system with a CLI</Underline>.
            </div>
          </div>

          <div className="flex flex-col">
            <MoreAboutSubTitle>How I Learned?</MoreAboutSubTitle>
            <div>
              At first, I spent a lot of time chasing tutorials. But over time,
              I realized the best way to grow was through{" "}
              <Underline>official documentation</Underline> and building things
              myself. That’s how I picked up <Underline>Next.js</Underline> and{" "}
              <Underline>TypeScript</Underline> — with fewer external resources
              and more hands-on building.
            </div>
          </div>
        </div>
      ),
      col2: (
        <div className="flex flex-col text-(--global-secondary-text-color)">
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
            <li>Constantly exploring and adapting to new technologies</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Building With Purpose",
      col1: (
        <div className="flex flex-col gap-10 text-(--global-secondary-text-color)">
          <div className="flex flex-col">
            <MoreAboutSubTitle>My Philosophy</MoreAboutSubTitle>
            <div>
              I believe frontend reflects my{" "}
              <Underline>taste for clean design</Underline>, while backend
              reflects my{" "}
              <Underline>logic for solving complex problems</Underline>. I enjoy
              writing <Underline>clean, modular code</Underline> rather than
              just “workable code,” and I aim to create applications that feel
              seamless to develop and intuitive to use.
            </div>
          </div>

          <div className="flex flex-col">
            <MoreAboutSubTitle>Products over Projects</MoreAboutSubTitle>
            <div>
              To me, projects are for practice, but{" "}
              <Underline>products are purposeful</Underline>. A product means
              usability, solving real problems, and lasting value. That’s the
              kind of software I want to keep creating — things that live beyond
              experiments.
              <br />
              <br />
              In short, I prefer quality over quantity — a principle that
              applies to software as well. I focus on creating well-crafted,
              bug-free applications rather than just increasing the number of
              projects.
            </div>
          </div>
        </div>
      ),
      col2: (
        <div className="flex flex-col gap-10 text-(--global-secondary-text-color)">
          <div className="flex flex-col">
            <MoreAboutSubTitle>What I’m Aiming For?</MoreAboutSubTitle>
            <div>
              I’m looking for opportunities to apply my skills to real-world
              products, particularly in <Underline>front-end</Underline>,{" "}
              <Underline>back-end</Underline>,{" "}
              <Underline>full-stack development</Underline>, or open-source
              contributions. I’m excited to keep learning, collaborate with
              teams, and push projects beyond personal experiments into
              production-ready solutions.
              <br />
              <br />
              <span>
                My interests aren’t just building full-stack applications — I
                love making them smoother and providing the{" "}
                <b>best experience to users</b>. I also enjoy creating{" "}
                <Underline>educational posts</Underline>.
              </span>
              <br />
              <br />
              <span>
                I’m eager to grow further in this field by joining a meaningful
                team.
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3 *:rounded-full *:bg-(--global-border-color)/50">
            {[
              {
                tip: "UI/UX • Result • Quality",
                icon: DuotoneComputerIcon,
              },
              {
                tip: "Ideas • Innovation • Solutions",
                icon: DuotoneLightbulbIcon,
              },
              {
                tip: "Integrate • Collaborate • Build",
                icon: DuotonePluginIcon,
              },
            ].map(({ tip, icon }, i) => (
              <Tooltip key={i} content={tip}>
                {createElement(icon, {
                  className:
                    "size-22 p-6 [--color-1:var(--global-text-color)]! [--color-2:var(--accent-color-1)]! max-sm:size-20 hover:animate-fadeIn transition hover:-translate-y-1",
                })}
              </Tooltip>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <AboutSection
      image={profileImg}
      aboutMe={aboutMe}
      moreAboutMe={moreAboutMe}
    />
  );
};

export default AboutView;
