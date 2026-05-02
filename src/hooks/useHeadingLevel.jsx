import { useContext } from "react";

import { HeadingLevelContext } from "@/contexts/HeadingLevelContext";

export function useHeadingLevel() {
  const level = useContext(HeadingLevelContext);

  if (level === null) {
    throw new Error("useHeadingLevel must be used inside HeadingLevelProvider");
  }

  return level;
}
