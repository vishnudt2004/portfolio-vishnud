import { createContext } from "react";

const HeadingLevelContext = createContext(1);

function HeadingLevelProvider({ children }) {
  return (
    <HeadingLevelContext.Provider value={1}>
      {children}
    </HeadingLevelContext.Provider>
  );
}

export default HeadingLevelProvider;
export { HeadingLevelContext };
