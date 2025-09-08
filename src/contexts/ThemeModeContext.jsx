import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

import config, { derivedConfig } from "@config/config";

const ThemeModeContext = createContext({
  themeMode: "light",
  setThemeMode: () => {},
});

function ThemeModeProvider({ children }) {
  const {
    DEFAULT_THEME_MODE: defaultThemeMode,
    THEME_MODE_CLASS_NAME_PREFIX: themeModeClassNamePrefix,
  } = config.UI;
  const { ACTIVE_THEME_MODES_ARRAY: themeModes } = derivedConfig;
  const allThemeModes = config.UI.THEME_MODES.flatMap((group) => group.themes);

  const [themeMode, setThemeMode] = useLocalStorage(
    "themeMode",
    defaultThemeMode,
  );

  useEffect(() => {
    // Remove all possible theme classes first
    allThemeModes.forEach((mode) =>
      document.documentElement.classList.remove(
        `${themeModeClassNamePrefix}-${mode.replace(" ", "_")}`,
      ),
    );

    // Add the selected theme class (except for the default)
    if (themeMode !== defaultThemeMode) {
      document.documentElement.classList.add(
        `${themeModeClassNamePrefix}-${themeMode.replace(" ", "_")}`,
      );
    }
  }, [themeMode, allThemeModes, defaultThemeMode, themeModeClassNamePrefix]);

  const nextThemeMode =
    themeModes[(themeModes.indexOf(themeMode) + 1) % themeModes.length];

  const cycleThemeMode = () =>
    setThemeMode(
      (prev) => themeModes[(themeModes.indexOf(prev) + 1) % themeModes.length],
    );

  return (
    <ThemeModeContext.Provider
      value={{
        themeMode, // Current mode
        setThemeMode, // Set mode manually
        nextThemeMode, // Next mode
        cycleThemeMode, // Cycle through modes
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
}

const useThemeMode = () => useContext(ThemeModeContext);

export default ThemeModeProvider;
export { useThemeMode };
