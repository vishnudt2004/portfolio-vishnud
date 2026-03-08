import { lazy } from "react";

const ActivitiesView = lazy(() => import("@/components/sections/Activities"));

const Activities = () => <ActivitiesView all />;

export default Activities;
