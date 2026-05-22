import { Link } from "react-router";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiLinkedinFill,
} from "@remixicon/react";

import { SectionActions } from "@/components/ui/FeatureLayout";
import ActivitiesSection from "@/features/activities/ActivitiesSection";

const Activities = () => (
  <ActivitiesSection
    featuredCount={3}
    actions={
      <SectionActions
        primary={
          <Link to="/activities">
            View all activities
            <RiArrowRightLine aria-hidden />
          </Link>
        }
        secondary={
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
);

export default Activities;
