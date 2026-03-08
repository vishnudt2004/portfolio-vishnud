import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import Anchor from "@/components/ui/Anchor";
import Img from "@/components/ui/Img";
import Divider from "@/components/ui/Divider";
import SocialBtn from "@/components/ui/SocialBtn";
import Tooltip from "@/components/ui/Tooltip";
import { TwoColumnsLayout } from "@/components/ui/SectionLayouts";
import {
  LinkedinIcon,
  DuotoneComputerIcon,
  DuotoneLightbulbIcon,
  DuotonePluginIcon,
} from "@/components/ui/Icons";

import personFallbackImg from "@/assets/images/placeholders/person.webp";

const ColContainer = ({ children, className }) => (
  <div className={twMerge("p-4 max-sm:p-2", className)}>{children}</div>
);

const AboutSection = ({
  title = "About Me",
  image,
  aboutMe,
  moreAboutMe = [],
}) => {
  return (
    <>
      <TwoColumnsLayout
        sectionId={IDS.about}
        sectionTitle={title}
        left={
          <Img
            src={image}
            alt="Vishnu D"
            fallbackSrc={personFallbackImg}
            className="cursor-effect-hidden aspect-square size-50 rounded-full object-cover ring-5 ring-(--border-color-g)/30 grayscale-5 duration-300 hover:ring-(--border-color-g) hover:grayscale-0"
            caption="Vishnu D"
          />
        }
        right={<div className="fancy-bg-1 p-4">{aboutMe}</div>}
      />

      {moreAboutMe.length && <Divider />}

      {moreAboutMe.map((section, ind) => (
        <TwoColumnsLayout
          key={`maCol$*-${ind}`}
          sectionTitle={section.title}
          left={<ColContainer>{section.left}</ColContainer>}
          right={<ColContainer>{section.right}</ColContainer>}
        />
      ))}
    </>
  );
};

const ContentBlock = ({ children }) => (
  <div className="flex flex-col gap-10 text-(--text-secondary-color-g)">
    {children}
  </div>
);

const ContentSubBlock = ({ children }) => (
  <div className="flex flex-col gap-4">{children}</div>
);

const MoreAboutSubTitle = ({ children }) => (
  <h3 className="font-semibold tracking-wider text-(--text-color-g)">
    {children}
  </h3>
);

const Highlighter = ({ variant = "primary", children, ...attr }) => (
  <span
    className={`highlight-${variant} rounded-full text-sm leading-4.25 text-nowrap ${attr?.className ? attr.className : ""}`}
  >
    {children}
  </span>
);

const Underline = ({ children }) => (
  <span className="underline underline-offset-4">{children}</span>
);

const aboutMe = (
  <ContentBlock>
    <p>
      I’m Vishnu, a <Highlighter>Full-Stack Developer</Highlighter> focused on
      building <Underline>clean, modular, and maintainable</Underline> web
      applications with <Underline>React, Next.js, and TypeScript</Underline>. I
      care deeply about developer experience — from reusable UI components and
      clear documentation to thoughtful project structure — and I build systems
      that scale without becoming difficult to maintain.
    </p>

    <Anchor
      aria-label="Open resume PDF"
      href="https://vishnudt2004.github.io/vishnud-resume/vishnud-resume-fullstack.pdf"
      className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
    >
      Check out my <Highlighter className="mx-1.5">Resume</Highlighter> here.
    </Anchor>

    <ul className="flex h-full flex-wrap gap-4 p-3 max-md:self-center">
      {[
        {
          label: "Email",
          link: "mailto:vishnu.d.t.2004@gmail.com",
          icon: (
            <SiGmail
              aria-hidden
              title={null}
              color="default"
              className="scale-85"
            />
          ),
        },
        {
          label: "GitHub",
          link: "https://github.com/vishnudt2004",
          icon: <SiGithub aria-hidden title={null} className="scale-100" />,
        },
        {
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/vishnu-dt",
          icon: <LinkedinIcon aria-hidden title={null} className="scale-120" />,
        },
      ].map(({ label, link, icon }) => (
        <li key={label}>
          <SocialBtn label={label} link={link} icon={icon} />
        </li>
      ))}
    </ul>
  </ContentBlock>
);

const moreAboutMe = [
  {
    title: "Focus & Progression",
    left: (
      <ContentBlock>
        <ContentSubBlock>
          <MoreAboutSubTitle>How I Work</MoreAboutSubTitle>
          <p>
            I work primarily within the{" "}
            <Underline>React and Next.js ecosystem</Underline>, building
            full-stack applications with an emphasis on{" "}
            <Underline>clean architecture</Underline>,{" "}
            <Underline>maintainability</Underline>, and{" "}
            <Underline>long-term usability</Underline>. My experience spans
            blogs, portfolios, and a custom{" "}
            <Underline>UI component system distributed via a CLI</Underline>,
            built with real-world reuse and documentation in mind.
          </p>
        </ContentSubBlock>

        <ContentSubBlock>
          <MoreAboutSubTitle>How I Build</MoreAboutSubTitle>
          <p>
            I rely heavily on <Underline>official documentation</Underline> and
            hands-on experimentation rather than tutorial-driven development.
            This approach helped me develop a deeper understanding of{" "}
            <Underline>Next.js</Underline> and <Underline>TypeScript</Underline>
            , allowing me to design solutions intentionally instead of copying
            patterns blindly.
          </p>
        </ContentSubBlock>
      </ContentBlock>
    ),
    right: (
      <ContentBlock>
        <ContentSubBlock>
          <MoreAboutSubTitle>What I Focus On</MoreAboutSubTitle>
          <ul className="flex list-disc flex-col gap-4 px-5">
            {[
              "Building clean, modular, and maintainable applications using React, Next.js, and Node.js",
              "Designing reusable UI components with clear structure and documentation",
              "Improving developer experience through tooling, automation, and thoughtful workflows",
              "Deploying applications with attention to performance, configuration, and production stability",
              "Refining existing solutions instead of shipping unfinished or disposable code",
            ].map((li, i) => (
              <li key={`li-focus-${i}`}>{li}</li>
            ))}
          </ul>
        </ContentSubBlock>
      </ContentBlock>
    ),
  },
  {
    title: "Building With Intent",
    left: (
      <ContentBlock>
        <ContentSubBlock>
          <MoreAboutSubTitle>Engineering Mindset</MoreAboutSubTitle>
          <p>
            I treat frontend and backend as equally important parts of a system.
            On the frontend, I care about{" "}
            <Underline>clarity, consistency, and usability</Underline>. On the
            backend, I focus on{" "}
            <Underline>logical structure and problem-solving</Underline>. I aim
            to write <Underline>clean, modular code</Underline> that remains
            understandable and adaptable over time.
          </p>
        </ContentSubBlock>

        <ContentSubBlock>
          <MoreAboutSubTitle>Products over Experiments</MoreAboutSubTitle>
          <p>
            I approach projects with a product mindset — considering usability,
            edge cases, and long-term maintenance rather than treating them as
            one-off experiments. I value{" "}
            <Underline>quality over quantity</Underline> and prefer improving
            existing work instead of rapidly producing shallow demos.
          </p>
        </ContentSubBlock>
      </ContentBlock>
    ),
    right: (
      <ContentBlock>
        <ContentSubBlock>
          <MoreAboutSubTitle>What I’m Looking For</MoreAboutSubTitle>
          <p>
            I’m seeking opportunities to contribute to{" "}
            <Underline>real-world products</Underline>, particularly in{" "}
            <Underline>frontend</Underline> or <Underline>full-stack</Underline>{" "}
            roles, where clean code, usability, and developer experience are
            valued. I’m especially interested in environments that encourage
            thoughtful engineering and continuous improvement.
          </p>
          <p>
            Beyond building features, I enjoy refining workflows, improving UI
            consistency, and sharing knowledge through{" "}
            <Underline>clear documentation</Underline> and{" "}
            <Underline>educational writing</Underline>.
          </p>
        </ContentSubBlock>

        <div className="flex justify-center gap-3 *:rounded-full *:bg-(--border-color-g)/50">
          {[
            {
              tip: "Clarity • Quality • Usability",
              icon: DuotoneComputerIcon,
            },
            {
              tip: "Problem Solving • Intent • Craft",
              icon: DuotoneLightbulbIcon,
            },
            {
              tip: "Collaboration • Integration • Growth",
              icon: DuotonePluginIcon,
            },
          ].map(({ tip, icon }, i) => (
            <Tooltip key={i} content={tip}>
              <span aria-hidden>
                {createElement(icon, {
                  className:
                    "size-22 p-6 [--color-1:var(--text-color-g)]! [--color-2:var(--accent-color-g)]! max-sm:size-20 hover:animate-fadeIn transition hover:-translate-y-1",
                })}
              </span>
            </Tooltip>
          ))}
        </div>
      </ContentBlock>
    ),
  },
];

const AboutView = () => (
  <AboutSection
    image="/images/vishnud.webp"
    aboutMe={aboutMe}
    moreAboutMe={moreAboutMe}
  />
);

export default AboutView;
