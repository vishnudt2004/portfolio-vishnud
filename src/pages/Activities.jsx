import { RiArrowRightUpLine, RiLinkedinFill } from "@remixicon/react";

import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import { SectionActions } from "@/components/ui/FeatureLayout";
import ActivitiesSection from "@/features/activities/ActivitiesSection";

const Activities = () => (
  <HeadingLevelProvider>
    <ActivitiesSection
      title="All Activities"
      actions={
        <SectionActions
          primary={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
            >
              <RiLinkedinFill aria-hidden /> See more on LinkedIn
              <RiArrowRightUpLine aria-hidden />
            </a>
          }
        />
      }
    />
  </HeadingLevelProvider>
);

export default Activities;
