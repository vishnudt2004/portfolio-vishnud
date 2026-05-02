import { lazy, Suspense } from "react";

import { IDS } from "@/config/constants";
import { sectionTitleId } from "@/utils/siteUtils";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import Loader from "@/components/ui/Loader";
import Hero from "./sections/Hero";

const BelowFold = lazy(() => import("./BelowFold"));

const Home = () => (
  <HeadingLevelProvider>
    <section id={IDS.hero} aria-labelledby={sectionTitleId(IDS.hero)}>
      <Hero />
    </section>

    <Suspense fallback={<Loader />}>
      <BelowFold />
    </Suspense>
  </HeadingLevelProvider>
);

export default Home;
