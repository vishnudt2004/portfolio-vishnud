import { useEffect, useRef, useState } from "react";

import { UI } from "@/config";
import { useTheme } from "@/hooks/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem as DMI,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const { FEATURED_THEMES, THEMES } = UI;

const DropdownMenuItem = ({ children, active, ...props }) => (
  <DMI
    className={
      active &&
      "bg-(--accent-color-g)/25 first:mb-1 last:mt-1 [&:not(:first-child):not(:last-child)]:my-1 " +
        "hover:bg-(--accent-color-g)/25 focus-visible:bg-(--accent-color-g)/25" // overrides
    }
    disabled={active}
    {...props}
  >
    {children}
  </DMI>
);

const ThemeSwitcher = ({
  featuredThemes = FEATURED_THEMES,
  allThemes = THEMES,
  onThemeChange,
  onOpenChange,
  containerRef, // use useState hook, not useRef
  trigger,
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
        setShowAll(false),
        setIsOpen(open),
        onOpenChange?.(open)
      )}
    >
      <DropdownMenuTrigger asChild>{trigger({ isOpen })}</DropdownMenuTrigger>

      <DropdownMenuContent
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
            {featuredThemes.map((theme) => (
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
