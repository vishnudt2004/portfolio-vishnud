import config from "@config/config";
import Anchor from "@components/elements/Anchor";
import Img from "@components/elements/Img";
import { Divider } from "@components/elements/Divider";
import {
  SimpleLayout,
  TwoColumnsLayout,
} from "@components/elements/SectionLayouts";

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
              className="aspect-square h-fit w-[350px] rounded-full object-cover shadow-lg max-sm:w-[250px]"
              caption="Vishnu D"
            />
          ),
          col2: () => (
            <div className="fancy-bg-1 p-4 sm:text-[1.1rem]">{aboutMe}</div>
          ),
        }}
      />

      {moreAboutMe.length && <Divider />}

      {moreAboutMe.map((aboutMe, ind) => (
        <SimpleLayout
          key={ind}
          sectionTitle={ind === 0 && moreAboutMeTitle}
          main={<div className="sm:text-[1.1rem]">{aboutMe}</div>}
        />
      ))}
    </>
  );
};

const Highlighter = ({ type = "primary", children, ...attr }) => (
  <span
    className={`highlight-${type} rounded-sm text-nowrap max-sm:text-[0.9rem] sm:text-[1rem] ${attr?.className ? attr.className : ""}`}
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
  <h1 className="my-3 font-bold tracking-wider underline underline-offset-4">
    {children}
  </h1>
);

const About = () => {
  const aboutMe = (
    <div className="flex flex-col gap-10">
      <span>
        I'm Vishnu, a self-taught{" "}
        <Highlighter>MERN Stack developer</Highlighter> passionate about
        building <Underliner>scalable applications</Underliner> and solving
        problems efficiently. Skilled in writing{" "}
        <Underliner>clean, modular code</Underliner>,{" "}
        <Underliner>debugging</Underliner>, and quickly adapting to new
        technologies. Focused on performance optimization, well-structured
        codebases, and modern development practices to deliver maintainable
        solutions.
      </span>

      <Anchor
        href="https://vishnudt2004.github.io/vishnud-resume/Vishnu%20D%20-%20Resume.pdf"
        className="self-start before:-bottom-0.5! after:-bottom-0.5! max-md:self-center max-sm:text-sm"
      >
        Check out my <Highlighter>Resume</Highlighter> here.
      </Anchor>
    </div>
  );

  const moreAboutMe = [
    <div className="flex flex-col gap-4">
      <MoreAboutSubTitle>How I Got Started?</MoreAboutSubTitle>
      <div>
        My interest in computer science began during my HSC days. As a college
        student, I started learning programming, which eventually led me to dive
        into <Underliner>web development</Underliner>. Over time, I’ve built
        projects, explored modern web technologies, and continuously refined my
        skills. I'm currently seeking <Underliner>opportunities</Underliner>
        —whether an <Underliner>internship</Underliner> or a{" "}
        <Underliner>remote job</Underliner>—to gain{" "}
        <Underliner>industry experience</Underliner> and grow further. I'm also
        eager to contribute to <Underliner>open-source projects</Underliner> and
        learn from experienced <Underliner>developers</Underliner> to sharpen my{" "}
        <Underliner>expertise</Underliner>.
      </div>

      <MoreAboutSubTitle>What I can do?</MoreAboutSubTitle>
      <ul className="grid list-disc grid-cols-1 gap-4 px-5 font-bold md:grid-cols-2">
        <li>
          Build Scalable & Mobile-Friendly Web Applications{" "}
          <span className="font-normal">(Static & Dynamic)</span>
        </li>
        <li>
          Develop Mini Projects{" "}
          <span className="font-normal">for students and personal use</span>
        </li>
        <li>Redesign & Modernize Older Websites</li>
        <li>
          Write Basic Automation Scripts{" "}
          <span className="font-normal">to simplify repetitive tasks</span>
        </li>
        <li>Deploy & Maintain Web Applications</li>
      </ul>

      <MoreAboutSubTitle>What I Have Learned?</MoreAboutSubTitle>
      <div>
        Beyond development, I have experience in writing{" "}
        <Underliner>automation scripts</Underliner> to streamline tasks and
        improve efficiency. I also focus on crafting user and developer-friendly{" "}
        <Underliner>documentation</Underliner> to enhance project
        maintainability. Additionally, I continuously refine my{" "}
        <Underliner>AI prompting skills</Underliner> and stay eager to explore
        and implement <Underliner>emerging technologies</Underliner> to expand
        my expertise. I constantly seek to enhance my problem-solving skills and
        stay updated with industry trends.
      </div>
    </div>,
  ];

  return (
    <AboutCreator image={"image"} aboutMe={aboutMe} moreAboutMe={moreAboutMe} />
  );
};

export default About;
