import { Link } from "react-router";
import { RiArrowRightLine } from "@remixicon/react";

import { SectionActions } from "@/components/ui/FeatureLayout";
import AchievementsSection from "@/features/achievements/AchievementsSection";

const Achievements = () => (
  <AchievementsSection
    featuredCount={3}
    actions={
      <SectionActions
        primary={
          <Link to="/achievements">
            View all achievements
            <RiArrowRightLine aria-hidden />
          </Link>
        }
      />
    }
  />
);

export default Achievements;
