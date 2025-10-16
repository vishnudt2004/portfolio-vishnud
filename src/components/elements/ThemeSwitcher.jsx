import { Fragment, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import config from "@/config";
import { useTheme } from "@/contexts/ThemeContext";

import { DropdownBox, DropdownMenuItem } from "./Dropdown";

const ThemeSwitcher = () => {
  const { theme, nextTheme, cycleTheme } = useTheme();

  return (
    <button
      title={nextTheme}
      className="cursor-pointer place-items-center rounded-full bg-(--global-text-color) p-3 text-(--global-background-color) transition-transform hover:rotate-245"
      onClick={cycleTheme}
      aria-label="Toggle Dark Mode"
    >
      {theme !== "light" ? (
        <SunIcon className="h-3 w-3" />
      ) : (
        <MoonIcon className="h-3 w-3" />
      )}
    </button>
  );
};

const { INITIAL_THEMES, THEMES } = config.UI;

const ManualThemeSwitcher = ({
  initialThemes = INITIAL_THEMES,
  allThemes = THEMES,
  onChange = () => "",
}) => {
  const { theme: activeTheme, setTheme: setTheme } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const handleThemeChange = (theme) => {
    setTheme(() => theme);
    onChange();
  };

  const displayName = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <DropdownBox>
      {showAll
        ? allThemes.map(({ category, themes }) => (
            <Fragment key={category}>
              <span className="my-1 text-center text-xs italic opacity-50">
                {category}
              </span>
              {themes.map((theme) => (
                <DropdownMenuItem
                  key={theme}
                  active={activeTheme === theme}
                  onClick={() => handleThemeChange(theme)}
                >
                  {displayName(theme)}
                </DropdownMenuItem>
              ))}
            </Fragment>
          ))
        : initialThemes.map((theme) => (
            <DropdownMenuItem
              key={theme}
              active={activeTheme === theme}
              onClick={() => handleThemeChange(theme)}
            >
              {displayName(theme)}
            </DropdownMenuItem>
          ))}

      {!showAll && (
        <DropdownMenuItem onClick={() => setShowAll(true)}>
          More…
        </DropdownMenuItem>
      )}
    </DropdownBox>
  );
};

export { ThemeSwitcher, ManualThemeSwitcher };
