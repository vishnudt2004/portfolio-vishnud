import { createElement, Suspense, lazy } from "react";
import { motion } from "motion/react";

import config from "./config";
import { getSectionTitleId } from "./utils/siteUtils";
import { SectionRevealMotion } from "./components/elements/Animations";
import Divider from "./components/elements/Divider";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Proficiencies from "./components/sections/Proficiencies";

const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Certifications = lazy(
  () => import("./components/sections/Certifications"),
);
const Activities = lazy(() => import("./components/sections/Activities"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const ContactForm = lazy(() => import("./components/sections/ContactForm"));

const SectionWrapper = motion.create(
  ({ children, sectionId, divide = true, lazy = false, ref: motionRef }) => {
    return (
      <>
        <section
          ref={motionRef}
          id={sectionId}
          aria-labelledby={getSectionTitleId(sectionId)}
        >
          {lazy ? (
            <Suspense fallback={<div className="min-h-dvh" />}>
              {children}
            </Suspense>
          ) : (
            children
          )}
        </section>
        {divide && <Divider />}
      </>
    );
  },
);

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

  const sections = config.ACTIVE_SECTIONS.map((s) => ({
    key: s.id,
    id: s.id,
    component: allSections[s.name],
  }));

  return sections.map(({ key, id, component }, index) => (
    <SectionRevealMotion key={key} isHero={key === "Hero"} asChild>
      <SectionWrapper
        key={key}
        sectionId={id}
        divide={index !== sections.length - 1}
        lazy={index > 1}
      >
        {createElement(component)}
      </SectionWrapper>
    </SectionRevealMotion>
  ));
};

export default AppContent;
