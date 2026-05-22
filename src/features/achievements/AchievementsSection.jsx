import { IDS } from "@/config/constants";
import FeatureLayout from "@/components/ui/FeatureLayout";
import AchievementCard from "./AchievementCard";
import { achievements } from "./achievements.data";

const AchievementsSection = ({
  title = "Achievements",
  featuredCount,
  actions,
}) => (
  <FeatureLayout
    ids={{ sectionId: IDS.achievements, gridId: "achievements-grid" }}
    title={title}
    featuredCount={featuredCount}
    actions={actions}
    cardComponent={AchievementCard}
    data={achievements}
  />
);

export default AchievementsSection;
