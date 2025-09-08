import { Fragment, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import config from "@config/config";
import { useThemeMode } from "@contexts/ThemeModeContext";

import { DropdownBox, DropdownMenuItem } from "./Dropdown";
import { TextDivider } from "./Divider";

const ThemeSwitcher = () => {
  const { themeMode, nextThemeMode, cycleThemeMode } = useThemeMode();

  return (
    <button
      title={nextThemeMode}
      className="cursor-pointer place-items-center rounded-full bg-(--global-text-color) p-3 text-(--global-background-color) transition-transform hover:rotate-245"
      onClick={cycleThemeMode}
    >
      {themeMode !== "light" ? (
        <SunIcon className="h-3 w-3" />
      ) : (
        <MoonIcon className="h-3 w-3" />
      )}
    </button>
  );
};

const ManualThemeSwitcher = ({
  initialThemes = config.UI.ACTIVE_THEME_MODES,
  themes = config.UI.THEME_MODES,
  onChange = () => "",
}) => {
  const { themeMode: activeTheme, setThemeMode: setTheme } = useThemeMode();
  const [showAll, setShowAll] = useState(false);

  const handleThemeChange = (theme) => {
    setTheme(() => theme);
    onChange();
  };

  const displayName = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const activeThemes = showAll ? themes : initialThemes;

  return (
    <DropdownBox>
      {activeThemes.map(({ category, themes }) => (
        <Fragment key={category}>
          <TextDivider>
            <span>{category}</span>
          </TextDivider>

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
