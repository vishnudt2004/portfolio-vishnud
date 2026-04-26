import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "react-use";

import { UI } from "@/config";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

function ThemeProvider({ children }) {
  const {
    DEFAULT_THEME: defaultTheme,
    THEME_CLASSNAME_PREFIX: themeClassNamePrefix,
    FEATURED_THEMES: themes,
  } = UI;

  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    // Find existing theme class
    const prevClass = Array.from(root.classList).find((cls) =>
      cls.startsWith(`${themeClassNamePrefix}-`),
    );

    if (prevClass) {
      root.classList.remove(prevClass);
    }

    // Add new theme
    root.classList.add(`${themeClassNamePrefix}-${theme.replace(/ /g, "_")}`);
  }, [theme, themeClassNamePrefix, defaultTheme]);

  const nextTheme = useMemo(
    () => themes[(themes.indexOf(theme) + 1) % themes.length],
    [theme, themes],
  );

  const cycleTheme = useCallback(
    () =>
      setTheme((prev) => themes[(themes.indexOf(prev) + 1) % themes.length]),
    [themes, setTheme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, nextTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
