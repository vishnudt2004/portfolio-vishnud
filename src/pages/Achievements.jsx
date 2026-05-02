import { IDS } from "@/config/constants";

import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";

import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import HeadingScope from "@/components/helpers/HeadingScope";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import AchievementItem from "@/features/achievements/AchievementItem";
import { achievements } from "@/features/achievements/achievements.data";

const AchievementsSection = ({ achievements }) => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.achievements}>All Achievements</SectionTitle>
    }
  >
    <HeadingScope>
      <LoadMoreGrid gridId="achievements-grid" items={achievements}>
        {(visibleItems) =>
          visibleItems.map((achievement) => (
            <AchievementItem key={achievement.id} {...achievement} />
          ))
        }
      </LoadMoreGrid>
    </HeadingScope>

    <SectionBtns />
  </SimpleLayout>
);

const AchievementsView = () => (
  <HeadingLevelProvider>
    <AchievementsSection achievements={achievements} />
  </HeadingLevelProvider>
);

export default AchievementsView;
