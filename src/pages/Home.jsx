import { createElement } from "react";

import config from "@config/config";
import {
  MotionOnScroll,
  ThemeModeAnimatePresence,
  ZoomInMotion,
} from "@components/elements/Animations";
import { Divider } from "@components/elements/Divider";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Proficiency from "@components/sections/Proficiency";
import Projects from "@components/sections/Projects";
import Experience from "@components/sections/Experience";
import Achievements from "@components/sections/Achievements";
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
  const totalSections = {
    Hero,
    About,
    Proficiency,
    Projects,
    Experience,
    Achievements,
    Activities,
    Testimonials,
    ContactForm,
  };

  const sections = config.VISIBLE_SECTIONS.map((key) => ({
    key,
    component: totalSections[key],
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
          <ThemeModeAnimatePresence key={key}>
            <ZoomInMotion>{content}</ZoomInMotion>
          </ThemeModeAnimatePresence>
        ) : (
          <MotionOnScroll
            key={key}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
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
