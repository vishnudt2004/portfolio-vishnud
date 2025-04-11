import { createContext, useContext, useEffect } from "react";

import config, { derivedConfig } from "@config/config";
import useLocalStorage from "@hooks/useLocalStorage";

const ThemeModeContext = createContext({
  themeMode: "light",
  setThemeMode: () => {},
});

function ThemeModeProvider({ children }) {
  const {
    DEFAULT_THEME_MODE: defaultThemeMode,
    THEME_MODE_CLASS_NAME_PREFIX: themeModeClassNamePrefix,
  } = config.UI;
  const { THEME_MODES_ARRAY: themeModes } = derivedConfig;

  const [themeMode, setThemeMode] = useLocalStorage(
    "themeMode",
    defaultThemeMode,
  );

  useEffect(() => {
    // Remove all possible theme classes first
    themeModes.forEach((mode) =>
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
  }, [themeMode, themeModes, defaultThemeMode, themeModeClassNamePrefix]);

  const nextThemeMode =
    themeModes[(themeModes.indexOf(themeMode) + 1) % themeModes.length];

  const cycleThemeMode = () =>
    setThemeMode(
      themeModes[(themeModes.indexOf(themeMode) + 1) % themeModes.length],
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
