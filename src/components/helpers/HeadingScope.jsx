import { HeadingLevelContext } from "@/contexts/HeadingLevelContext";
import { useHeadingLevel } from "@/hooks/useHeadingLevel";

const HeadingScope = ({ children }) => {
  const parentLevel = useHeadingLevel();
  const nextLevel = parentLevel + 1;

  return (
    <HeadingLevelContext.Provider value={nextLevel}>
      {children}
    </HeadingLevelContext.Provider>
  );
};

export default HeadingScope;
