import { createElement } from "react";

import config from "@config/config";
import { MotionOnScroll, ZoomInMotion } from "@components/elements/Animations";
import { Divider } from "@components/elements/Divider";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Proficiency from "@components/sections/Proficiency";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Achievements from "@components/sections/Achievements";
import Certifications from "@components/sections/Certifications";
import Activities from "@components/sections/Activities";
import Testimonials from "@components/sections/Testimonials";
import ContactForm from "@components/sections/ContactForm";

const SectionWrapper = ({ ref: motionRef, children, divide = true }) => {
  return (
    <>
      <section ref={motionRef}>{children}</section>
      {divide && <Divider />}
    </>
  );
};

const Home = () => {
  const allSections = {
    Hero,
    About,
    Proficiency,
    Projects,
    Experience,
    Achievements,
    Certifications,
    Activities,
    Testimonials,
    ContactForm,
  };

  const sections = config.VISIBLE_SECTIONS.map((key) => ({
    key,
    component: allSections[key],
  }));

  return (
    <div>
      {sections.map(({ key, component }, index) => {
        const isHero = key === "Hero";

        const content = (
          <SectionWrapper divide={index !== sections.length - 1}>
            {createElement(component)}
          </SectionWrapper>
        );

        return isHero ? (
          <ZoomInMotion key={key}>{content}</ZoomInMotion>
        ) : (
          <MotionOnScroll
            key={key}
            initial={{ opacity: 0, filter: "blur(1px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
          >
            {content}
          </MotionOnScroll>
        );
      })}

      {/* Without motion transition */}
      {/* {sections.map(({ component }, index) => (
        <SectionWrapper
          key={"section_" + index}
          divide={index !== sections.length - 1}
        >
          {createElement(component)}
        </SectionWrapper>
      ))} */}
    </div>
  );
};

export default Home;
