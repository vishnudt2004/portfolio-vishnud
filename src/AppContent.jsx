import { createElement, Suspense, lazy } from "react";

import config from "./config";
import { SectionRevealMotion } from "@/components/elements/Animations";
import { Divider } from "@/components/elements/Divider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Proficiencies from "@/components/sections/Proficiencies";

const Projects = lazy(() => import("@/components/sections/Projects"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Achievements = lazy(() => import("@/components/sections/Achievements"));
const Certifications = lazy(
  () => import("@/components/sections/Certifications"),
);
const Activities = lazy(() => import("@/components/sections/Activities"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const ContactForm = lazy(() => import("@/components/sections/ContactForm"));

const SectionWrapper = ({
  ref: motionRef,
  children,
  divide = true,
  lazy = false,
}) => {
  return (
    <>
      <section ref={motionRef}>
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
      <SectionWrapper
        key={key}
        divide={index !== sections.length - 1}
        lazy={index > 1}
      >
        {createElement(component)}
      </SectionWrapper>
    </SectionRevealMotion>
  ));
};

export default AppContent;
