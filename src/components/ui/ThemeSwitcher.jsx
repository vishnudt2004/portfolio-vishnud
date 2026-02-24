import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiPaletteFill } from "@remixicon/react";

import { UI } from "@/config";
import { useTheme } from "@/contexts/ThemeContext";
import { IconBtn } from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown";

const { FEATURED_THEMES, THEMES } = UI;

const ThemeSwitcher = ({
  initialThemes = FEATURED_THEMES,
  allThemes = THEMES,
  onThemeChange,
  onOpenChange,
  containerRef,
  triggerTabIndex = 0,
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
      onOpenChange={(open) => (
        setShowAll(false), setIsOpen(open), onOpenChange?.(open)
      )}
    >
      <DropdownMenuTrigger asChild>
        <IconBtn aria-label="Change theme" tabIndex={triggerTabIndex}>
          {!isOpen ? (
            <RiPaletteFill aria-hidden />
          ) : (
            <RiCloseFill aria-hidden />
          )}
        </IconBtn>
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

export default ThemeSwitcher;
