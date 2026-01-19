import { createElement } from "react";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";

import config from "@/config";
import Anchor from "@/components/elements/Anchor";
import Img from "@/components/elements/Img";
import Divider from "@/components/elements/Divider";
import SocialBtn from "@/components/elements/SocialBtn";
import Tooltip from "@/components/elements/Tooltip";
import { TwoColumnsLayout } from "@/components/elements/SectionLayouts";
import {
  LinkedinIcon,
  DuotoneComputerIcon,
  DuotoneLightbulbIcon,
  DuotonePluginIcon,
} from "@/components/elements/CustomIcons";

import personFallbackImg from "@/assets/images/placeholders/person.webp";

const AboutSection = ({
  title = "About Me",
  image,
  aboutMe,
  moreAboutMe = [],
}) => {
  return (
    <>
      <TwoColumnsLayout
        sectionId={config.IDS_MAP.ABOUT}
        sectionTitle={title}
        left={
          <Img
            src={image}
            alt="Vishnu D"
            fallbackSrc={personFallbackImg}
            className="cursor-effect-hidden aspect-square size-[200px] rounded-full object-cover shadow-[0_0_0_5px_color-mix(in_srgb,var(--border-color-g),transparent_70%)] grayscale-50 duration-300 hover:grayscale-0"
            caption="Vishnu D"
          />
        }
        right={<div className="fancy-bg-1 p-4">{aboutMe}</div>}
      />

      {moreAboutMe.length && <Divider />}

      {moreAboutMe.map((section, ind) => (
        <TwoColumnsLayout
          key={ind}
          sectionTitle={section.title}
          left={<div className="p-4 max-sm:p-2">{section.left}</div>}
          right={<div className="p-4 max-sm:p-2">{section.right}</div>}
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

const Highlighter = ({ type = "primary", children, ...attr }) => (
  <span
    className={`highlight-${type} rounded-sm text-sm text-nowrap ${attr?.className ? attr.className : ""}`}
  >
    {children}
  </span>
);

const Underline = ({ children }) => (
  <span className="underline underline-offset-4">{children}</span>
);

const AboutView = () => {
  const aboutMe = (
    <ContentBlock>
      <p>
        I'm Vishnu, a self-taught{" "}
        <Highlighter>Full-Stack Developer</Highlighter> focused on{" "}
        <Underline>React, Next.js, and modern web tooling</Underline>. I enjoy
        building applications and tools that are{" "}
        <Underline>clean, modular, and maintainable</Underline>, while also
        making the developer experience smoother through good documentation and
        reusable components.
      </p>

      <Anchor
        aria-label="Open resume PDF"
        href="https://vishnudt2004.github.io/vishnud-resume/vishnud-resume.pdf"
        className="self-start text-sm before:-bottom-0.5! after:-bottom-0.5! max-md:self-center"
      >
        Check out my <Highlighter className="mx-1.5">Resume</Highlighter> here.
      </Anchor>

      <ul className="flex h-full flex-wrap gap-4 p-3 max-md:self-center">
        {[
          {
            name: "Email",
            link: "mailto:vishnu.d.t.2004@gmail.com",
            icon: (
              <SiGmail
                aria-hidden
                title={null}
                color="default"
                className="scale-95"
              />
            ),
            ariaLabel: "Mail Me",
          },
          {
            name: "GitHub",
            link: "https://github.com/vishnudt2004",
            icon: <SiGithub aria-hidden title={null} className="scale-110" />,
            ariaLabel: "GitHub Profile",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vishnu-dt",
            icon: (
              <LinkedinIcon aria-hidden title={null} className="scale-120" />
            ),
            ariaLabel: "LinkedIn Profile",
          },
        ].map(({ name, link, icon, ariaLabel }) => (
          <li key={name}>
            <SocialBtn
              name={name}
              link={link}
              icon={icon}
              aria-label={`${ariaLabel} (opens in new tab)`}
            />
          </li>
        ))}
      </ul>
    </ContentBlock>
  );

  const moreAboutMe = [
    {
      title: "Journey & Focus",
      left: (
        <ContentBlock>
          <ContentSubBlock>
            <MoreAboutSubTitle>How I Got Started?</MoreAboutSubTitle>
            <p>
              I began with MERN stack basics during college and slowly expanded
              into the Next.js ecosystem. What started as curiosity turned into
              a consistent practice of building and shipping projects — from
              blogs and portfolios to my own{" "}
              <Underline>UI component system with a CLI</Underline>.
            </p>
          </ContentSubBlock>

          <ContentSubBlock>
            <MoreAboutSubTitle>How I Learned?</MoreAboutSubTitle>
            <p>
              At first, I spent a lot of time chasing tutorials. But over time,
              I realized the best way to grow was through{" "}
              <Underline>official documentation</Underline> and building things
              myself. That’s how I picked up <Underline>Next.js</Underline> and{" "}
              <Underline>TypeScript</Underline> — with fewer external resources
              and more hands-on building.
            </p>
          </ContentSubBlock>
        </ContentBlock>
      ),
      right: (
        <ContentBlock>
          <ContentSubBlock>
            <MoreAboutSubTitle>What I Focus On?</MoreAboutSubTitle>
            <ul className="flex list-disc flex-col gap-4 px-5">
              {[
                "Building clean, maintainable full-stack apps (React, Next.js, Node.js, etc.)",
                "Focusing on reusability and clear documentation in UI development.",
                "Enhancing developer experience with tools, automation, and streamlined workflows",
                "Deploying & scaling apps with modern hosting solutions",
                "Constantly exploring and adapting to new technologies",
              ].map((li, i) => (
                <li key={`li$*-${i}`}>{li}</li>
              ))}
            </ul>
          </ContentSubBlock>
        </ContentBlock>
      ),
    },
    {
      title: "Building With Purpose",
      left: (
        <ContentBlock>
          <ContentSubBlock>
            <MoreAboutSubTitle>My Philosophy</MoreAboutSubTitle>
            <p>
              I believe frontend reflects my{" "}
              <Underline>taste for clean design</Underline>, while backend
              reflects my{" "}
              <Underline>logic for solving complex problems</Underline>. I enjoy
              writing <Underline>clean, modular code</Underline> rather than
              just “workable code,” and I aim to create applications that feel
              seamless to develop and intuitive to use.
            </p>
          </ContentSubBlock>

          <ContentSubBlock>
            <MoreAboutSubTitle>Products over Projects</MoreAboutSubTitle>
            <p>
              To me, projects are for practice, but{" "}
              <Underline>products are purposeful</Underline>. A product means
              usability, solving real problems, and lasting value. That’s the
              kind of software I want to keep creating — things that live beyond
              experiments.
            </p>
            <p>
              In short, I prefer quality over quantity — a principle that
              applies to software as well. I focus on creating well-crafted,
              bug-free applications rather than just increasing the number of
              projects.
            </p>
          </ContentSubBlock>
        </ContentBlock>
      ),
      right: (
        <ContentBlock>
          <ContentSubBlock>
            <MoreAboutSubTitle>What I’m Aiming For?</MoreAboutSubTitle>
            <p>
              I’m looking for opportunities to apply my skills to real-world
              products, particularly in <Underline>front-end</Underline>,{" "}
              <Underline>back-end</Underline>,{" "}
              <Underline>full-stack development</Underline>, or open-source
              contributions. I’m excited to keep learning, collaborate with
              teams, and push projects beyond personal experiments into
              production-ready solutions.
            </p>
            <p>
              My interests aren’t just building full-stack applications — I love
              making them smoother and providing the{" "}
              <strong>best experience to users</strong>. I also enjoy creating{" "}
              <Underline>educational posts</Underline>.
            </p>
            <p>
              I’m eager to grow further in this field by joining a meaningful
              team.
            </p>
          </ContentSubBlock>

          <div className="flex justify-center gap-3 *:rounded-full *:bg-(--border-color-g)/50">
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

  return (
    <AboutSection
      image="/images/vishnud.webp"
      aboutMe={aboutMe}
      moreAboutMe={moreAboutMe}
    />
  );
};

export default AboutView;
