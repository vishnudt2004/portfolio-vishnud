import { SectionActions } from "@/components/ui/FeatureLayout";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import AchievementsSection from "@/features/achievements/AchievementsSection";

const Achievements = () => (
  <HeadingLevelProvider>
    <AchievementsSection
      title="All Achievements"
      actions={<SectionActions goBack />}
    />
  </HeadingLevelProvider>
);

export default Achievements;
