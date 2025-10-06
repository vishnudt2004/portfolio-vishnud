import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

import config from "@/config";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

function ThemeProvider({ children }) {
  const {
    DEFAULT_THEME: defaultTheme,
    THEME_CLASSNAME_PREFIX: themeClassNamePrefix,
    INITIAL_THEMES: themes,
    THEMES: ALL_THEMES,
  } = config.UI;
  const allThemes = ALL_THEMES.flatMap((group) => group.themes);

  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  useEffect(() => {
    // Remove all possible theme classes first
    allThemes.forEach((t) =>
      document.documentElement.classList.remove(
        `${themeClassNamePrefix}-${t.replace(" ", "_")}`,
      ),
    );

    // Add the selected theme class (except for the default)
    if (theme !== defaultTheme) {
      document.documentElement.classList.add(
        `${themeClassNamePrefix}-${theme.replace(" ", "_")}`,
      );
    }
  }, [theme, allThemes, defaultTheme, themeClassNamePrefix]);

  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];

  const cycleTheme = () =>
    setTheme((prev) => themes[(themes.indexOf(prev) + 1) % themes.length]);

  return (
    <ThemeContext.Provider
      value={{
        theme, // Current mode
        setTheme, // Set mode manually
        nextTheme, // Next mode
        cycleTheme, // Cycle through modes
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
export { useTheme };
