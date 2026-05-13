import { Fragment, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import {
  RiBriefcaseFill,
  RiCalendarEventFill,
  RiChat3Fill,
  RiCloseFill,
  RiCodeSSlashFill,
  RiFolderReduceFill,
  RiHome5Fill,
  RiMenu4Fill,
  RiSparkling2Fill,
  RiTrophyFill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/Dropdown";
import { IDS } from "@/config/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import { IconBtn } from "@/components/ui/Button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import FullscreenToggle from "@/components/ui/FullScreenToggle";

const NavBrand = () => {
  const navigateToSection = useNavigateToSection();
  const { pathname } = useLocation();

  const Icon = pathname === "/" ? RiSparkling2Fill : RiHome5Fill;

  const handleClick = () => navigateToSection("hero");

  return (
    <button
      type="button"
      aria-label="Go to Home section"
      onClick={handleClick}
      className={twMerge(
        "focus-reset group relative z-0 flex size-12 items-center overflow-hidden rounded-full border border-(--border-color-g)/75 bg-(--bg-color-g) transition-all duration-300 ease-in-out focus-visible:outline-0 focus-visible:supports-[background-color:color-mix(in_srgb,red,white)]:bg-[color-mix(in_srgb,var(--text-color-g)_10%,var(--bg-color-g))]",
        "hover:w-[148px] focus-visible:w-[148px]",
      )}
    >
      <span className="pointer-events-none absolute left-4 -translate-x-2 tracking-wider whitespace-nowrap text-(--menus-color-g) opacity-0 duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        PORTFOLIO
      </span>

      <div className="ml-auto flex size-12 items-center justify-center">
        <Icon
          aria-hidden
          className="size-4.5 text-(--text-color-g) duration-300 group-hover:rotate-10 group-hover:text-(--menus-color-g) group-focus-visible:rotate-12 group-focus-visible:text-(--menus-color-g)"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-1 m-auto size-6.5 rounded-full bg-(image:--gradient-1) opacity-60"
      />
    </button>
  );
};

const PrimaryMenus = () => (
  <div className="flex items-center gap-0.5">
    <FullscreenToggle />
    <ThemeSwitcher />
  </div>
);

const SecondaryMenus = ({ isOpen, items, onOpenChange }) => {
  return (
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <IconBtn aria-label="Open navigation menu">
          {isOpen ? <RiCloseFill aria-hidden /> : <RiMenu4Fill aria-hidden />}
        </IconBtn>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={8}>
        {items.map(({ label, icon: Icon, id, href, onClick }, i) => {
          const isLink = Boolean(href);
          const isSeparatorBefore = i > 0 && isLink && !items[i - 1].href;

          return (
            <Fragment key={`menu-item-${id}`}>
              {isSeparatorBefore && <DropdownMenuSeparator />}

              <DropdownMenuItem
                asChild={isLink}
                onClick={!isLink ? () => onClick?.(id) : undefined}
                // active={}
              >
                {isLink ? (
                  <a href={href} className="flex items-center gap-2">
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="size-3.25 shrink-0 opacity-80"
                      />
                    )}
                    {label}
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="size-3.25 shrink-0 opacity-80"
                      />
                    )}
                    {label}
                  </div>
                )}
              </DropdownMenuItem>
            </Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Nav = ({ items }) => {
  const scrollDir = useScrollDirection();

  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isVisible = isFocused || isDropdownOpen || scrollDir !== "down";

  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 z-(--z-navbar) flex gap-2 p-3 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
    >
      <NavBrand />

      <nav
        aria-label="Primary navigation"
        className="inline-flex items-center gap-1 overflow-hidden rounded-full border border-(--border-color-g)/75 bg-(--bg-color-g) px-1 focus-within:bg-[color-mix(in_srgb,var(--text-color-g)_10%,var(--bg-color-g))]"
      >
        <PrimaryMenus />

        <SecondaryMenus
          items={items}
          isOpen={isDropdownOpen}
          onOpenChange={setIsDropdownOpen}
        />
      </nav>
    </div>
  );
};

const Header = () => {
  const navigateToSection = useNavigateToSection();

  const items = useMemo(
    () => [
      {
        id: IDS.about,
        label: "About Me",
        icon: RiBriefcaseFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        id: IDS.proficiencies,
        label: "Proficiencies",
        icon: RiCodeSSlashFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        id: IDS.projects,
        label: "Projects",
        icon: RiFolderReduceFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        id: IDS.achievements,
        label: "Achievements",
        icon: RiTrophyFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        id: IDS.certifications,
        label: "Certifications",
        icon: RiVerifiedBadgeFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        id: IDS.activities,
        label: "Activities",
        icon: RiCalendarEventFill,
        onClick: (id) => navigateToSection(id),
      },
      {
        label: "Mail me",
        icon: RiChat3Fill,
        href: "mailto:vishnu.d.t.2004@gmail.com",
      },
    ],
    [navigateToSection],
  );

  return (
    <header id={IDS.header}>
      <Nav items={items} />
    </header>
  );
};

export default Header;
