import { lazy } from "react";

const AchievementsView = lazy(
  () => import("@/components/sections/Achievements"),
);

const Achievements = () => <AchievementsView all />;

export default Achievements;
