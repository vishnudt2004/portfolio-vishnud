import { createElement } from "react";

import config from "./config";
import { SectionRevealMotion } from "@/components/elements/Animations";
import { Divider } from "@/components/elements/Divider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Proficiencies from "@/components/sections/Proficiencies";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Activities from "@/components/sections/Activities";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

const SectionWrapper = ({ ref: motionRef, children, divide = true }) => {
  return (
    <>
      <section ref={motionRef}>{children}</section>
      {divide && <Divider />}
    </>
  );
};

const AppContent = () => {
  const allSections = {
    Hero,
    About,
    Proficiencies,
    Projects,
    Experience,
    Achievements,
    Certifications,
    Activities,
    Testimonials,
    ContactForm,
  };

  const sections = config.ENABLED_SECTIONS.map((key) => ({
    key,
    component: allSections[key],
  }));

  return sections.map(({ key, component }, index) => (
    <SectionRevealMotion key={key} isHero={key === "Hero"}>
      <SectionWrapper key={key} divide={index !== sections.length - 1}>
        {createElement(component)}
      </SectionWrapper>
    </SectionRevealMotion>
  ));
};

export default AppContent;
