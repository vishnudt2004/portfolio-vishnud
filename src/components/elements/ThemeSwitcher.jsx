import { useEffect, useRef, useState } from "react";
import { PaintBrushIcon, XMarkIcon } from "@heroicons/react/24/solid";

import config from "@/config";
import { useTheme } from "@/contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown";

const { INITIAL_THEMES, THEMES } = config.UI;

const ManualThemeSwitcher = ({
  initialThemes = INITIAL_THEMES,
  allThemes = THEMES,
  onThemeChange,
  onOpenChange,
  containerRef,
}) => {
  const { theme: activeTheme, setTheme: setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const firstItemRef = useRef(null);

  useEffect(() => {
    if (!showAll) return;
    if (document.activeElement === firstItemRef.current) return;
    firstItemRef.current?.focus();
  }, [showAll]);

  const handleThemeChange = (theme) => {
    setTheme(() => theme);
    onThemeChange && onThemeChange();
  };

  const handleShowMore = (e) => {
    e.preventDefault();
    setShowAll(true);
  };

  const displayName = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={() => (
        setShowAll(false), setIsOpen((p) => !p), onOpenChange && onOpenChange()
      )}
    >
      <DropdownMenuTrigger asChild>
        <button
          className="transition-scale scale-90 cursor-pointer place-items-center rounded-full bg-(--text-color-g) p-3 text-(--background-color-g) *:size-4 hover:scale-100 active:scale-90"
          aria-label="Change theme"
        >
          {!isOpen ? (
            <PaintBrushIcon aria-hidden="true" />
          ) : (
            <XMarkIcon aria-hidden="true" />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={5}
        isOpen={isOpen}
        containerRef={containerRef}
        onEscapeKeyDown={(e) => e.stopPropagation()}
      >
        {showAll ? (
          allThemes.map(({ category, themes }, index) => (
            <DropdownMenuGroup key={category}>
              <DropdownMenuLabel>{category}</DropdownMenuLabel>

              {themes.map((theme, i) => (
                <DropdownMenuItem
                  key={theme}
                  ref={index === 0 && i === 0 ? firstItemRef : undefined}
                  active={activeTheme === theme}
                  onSelect={() => handleThemeChange(theme)}
                >
                  {displayName(theme)}
                </DropdownMenuItem>
              ))}

              {index !== allThemes.length - 1 && <DropdownMenuSeparator />}
            </DropdownMenuGroup>
          ))
        ) : (
          <>
            {initialThemes.map((theme) => (
              <DropdownMenuItem
                key={theme}
                active={activeTheme === theme}
                onSelect={() => handleThemeChange(theme)}
              >
                {displayName(theme)}
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={handleShowMore}>More…</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ManualThemeSwitcher;
