import { useState, useEffect, useRef, useImperativeHandle } from "react";
import { useLocation } from "react-router";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  RiBriefcaseFill,
  RiCloseFill,
  RiDiscussFill,
  RiFolderReduceFill,
  RiHome5Fill,
  RiMenu4Fill,
  RiSparkling2Fill,
} from "@remixicon/react";

import { IDS } from "@/config/constants";
import { createKeyMap, getFocusableItems, moveFocus } from "@/utils/keyboard";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import { IconBtn } from "@/components/ui/Button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import FullscreenToggle from "@/components/ui/FullScreenToggle";
import { DesktopTooltip } from "@/components/ui/Tooltip";

const NavMenu = ({ id, onClick, onMenuClick, label, icon: Icon }) => (
  <button
    onClick={() => (onClick ? onClick() : onMenuClick?.(id))}
    className="focus-reset relative flex items-center gap-1.25 rounded-lg px-2 text-[14px] tracking-wide text-(--menus-color-g) duration-300 hover:bg-(--menus-color-g)/15 focus-visible:bg-(--menus-color-g)/15 focus-visible:outline-0 max-sm:w-fit max-sm:before:-bottom-2"
  >
    {Icon && <Icon aria-hidden className="size-3.25 opacity-80" />}
    {label}
  </button>
);

const NavBrand = () => {
  const navigateToSection = useNavigateToSection();
  const { pathname } = useLocation();

  const Icon = pathname === "/" ? RiSparkling2Fill : RiHome5Fill;

  const handleClick = () => navigateToSection("hero");

  return (
    <button
      type="button"
      aria-label="Go to portfolio section"
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

const NavMenuContent = ({
  id,
  isVisible,
  isOpen,
  menus,
  variant,
  layout,
  themeBtn: { containerRef, onThemeChange, onOpenChange } = {},
}) => {
  const isPrimary = variant === "primary";
  const isHorizontal = layout === "horizontal";

  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  useEffect(() => {
    setIsTooltipAllowed(isVisible);
  }, [isVisible]);

  return (
    <ul
      id={id}
      inert={!isPrimary && !isOpen ? true : undefined}
      aria-hidden={!isPrimary && !isOpen ? true : undefined}
      className={twMerge(
        "flex list-none justify-center transition-opacity duration-200 ease-in-out",
        isPrimary
          ? ""
          : isOpen
            ? "pl-2 opacity-100"
            : "pointer-events-none opacity-0",
        isHorizontal ? "flex-row items-center gap-1" : "flex-col gap-2",
      )}
    >
      {menus?.map((menu, i) => (
        <li key={`menu$*-${i}`}>{menu}</li>
      ))}

      {isPrimary && (
        <>
          <DesktopTooltip
            tip="Toggle fullscreen"
            open={isTooltipAllowed}
            sideOffset={10}
          >
            <li>
              <FullscreenToggle />
            </li>
          </DesktopTooltip>
          <DesktopTooltip
            tip="Change theme"
            open={isTooltipAllowed}
            sideOffset={10}
          >
            <li>
              <ThemeSwitcher
                containerRef={containerRef}
                onOpenChange={(isOpen) => {
                  setIsTooltipAllowed(!isOpen);
                  onOpenChange?.(isOpen);
                }}
                onThemeChange={() => {
                  setIsTooltipAllowed(false);
                  onThemeChange?.();
                }}
              />
            </li>
          </DesktopTooltip>
        </>
      )}
    </ul>
  );
};

const DesktopNav = ({ menus, ref }) => {
  const POSITION = "top-0 left-0";

  const scrollDir = useScrollDirection();
  const canHover = useMediaQuery("(hover: hover)");

  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isKeyboardInteraction, setIsKeyboardInteraction] = useState(false);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const secondaryId = "secondary-nav";

  const trapFocus = isOpen && isKeyboardInteraction;

  useEffect(() => {
    if (scrollDir === "down") setIsVisible(false);
    if (scrollDir === "up") setIsVisible(true);
  }, [scrollDir]);

  const closeNav = () => {
    setIsOpen(false);
    setIsKeyboardInteraction(false);
    setIsThemeOpen(false);
    buttonRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    closeNav,
  }));

  const getNavFocusableItems = () =>
    getFocusableItems(
      containerRef.current,
      'button:not([disabled]):not([aria-hidden="true"])',
    );

  const handleNavKeydown = createKeyMap({
    Escape: () => {
      closeNav();
      buttonRef.current?.focus();
    },

    ArrowRight: (e) => {
      const items = getNavFocusableItems();
      if (!items.length) return;
      moveFocus(items, "next");
      e.preventDefault();
    },

    ArrowLeft: (e) => {
      const items = getNavFocusableItems();
      if (!items.length) return;
      moveFocus(items, "prev");
      e.preventDefault();
    },

    Home: (e) => {
      const items = getNavFocusableItems();
      moveFocus(items, "first");
      e.preventDefault();
    },

    End: (e) => {
      const items = getNavFocusableItems();
      moveFocus(items, "last");
      e.preventDefault();
    },
  });

  const handleContainerPointerenter = () => setIsOpen(true);
  const handleContainerPointerleave = () => {
    if (isKeyboardInteraction || isThemeOpen) return;

    setIsOpen(false);
  };

  const handleToggleClick = () => setIsOpen((p) => !p);
  const handleToggleKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((p) => !p);
      setIsKeyboardInteraction((p) => !p);
    }
  };

  return (
    <>
      <FocusScope
        loop={trapFocus}
        trapped={trapFocus}
        onMountAutoFocus={(e) => e.preventDefault()}
        className={twMerge(
          "fixed z-(--z-navbar) mx-auto flex justify-center gap-2 p-3 transition-transform duration-300 *:first:shrink-0",
          POSITION,
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
        onFocusCapture={() => setIsVisible(true)}
      >
        <NavBrand />

        <nav
          ref={containerRef}
          aria-label="Primary navigation"
          className="z-(--z-navbar) inline-flex items-center gap-0.5 overflow-hidden rounded-full border border-(--border-color-g)/75 bg-(--bg-color-g) px-2 focus-within:bg-(--text-color-g)/15 focus-within:supports-[background-color:color-mix(in_srgb,red,white)]:bg-[color-mix(in_srgb,var(--text-color-g)_10%,var(--bg-color-g))]"
          onKeyDown={handleNavKeydown}
        >
          <NavMenuContent
            id="primary-nav"
            isVisible={isVisible}
            isOpen={isOpen}
            layout="horizontal"
            variant="primary"
            menus={menus?.primary}
            themeBtn={{
              containerRef,
              onOpenChange: (isOpen) => {
                setIsThemeOpen(isOpen);
                closeNav();
              },
              onThemeChange: closeNav,
            }}
          />

          <div
            className={twMerge(
              "inline-flex h-12 items-center transition-all duration-500",
              isOpen ? "sm:max-w-[500px]" : "max-w-8",
            )}
            onPointerEnter={canHover ? handleContainerPointerenter : undefined}
            onPointerLeave={canHover ? handleContainerPointerleave : undefined}
          >
            <IconBtn
              ref={buttonRef}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls={secondaryId}
              onClick={handleToggleClick}
              onKeyDown={handleToggleKeydown}
            >
              {isOpen ? (
                <RiCloseFill aria-hidden />
              ) : (
                <RiMenu4Fill aria-hidden />
              )}
            </IconBtn>

            <NavMenuContent
              id={secondaryId}
              isOpen={isOpen}
              menus={menus.secondary}
              layout="horizontal"
            />
          </div>
        </nav>
      </FocusScope>

      {isOpen && (
        <div
          aria-hidden
          role="presentation"
          className="fixed inset-0 z-(--z-overlay)"
          onClick={closeNav}
        />
      )}
    </>
  );
};

const MobileNav = ({ menus, ref }) => {
  const POSITION = "top-0 left-0";

  const [isOpen, setIsOpen] = useState(false);
  const [isKeyboardInteraction, setIsKeyboardInteraction] = useState(false);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const secondaryId = "secondary-nav";

  const trapFocus = isOpen && isKeyboardInteraction;

  const closeNav = () => {
    setIsOpen(false);
    setIsKeyboardInteraction(false);
    buttonRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    closeNav,
  }));

  const getNavFocusableItems = () =>
    getFocusableItems(
      containerRef.current,
      'button:not([disabled]):not([aria-hidden="true"])',
    );

  const handleNavKeydown = createKeyMap({
    Escape: () => {
      closeNav();
      buttonRef.current?.focus();
    },

    ArrowDown: (e) => {
      const items = getNavFocusableItems();
      if (!items.length) return;
      moveFocus(items, "next");
      e.preventDefault();
    },

    ArrowUp: (e) => {
      const items = getNavFocusableItems();
      if (!items.length) return;
      moveFocus(items, "prev");
      e.preventDefault();
    },

    Home: (e) => {
      const items = getNavFocusableItems();
      moveFocus(items, "first");
      e.preventDefault();
    },

    End: (e) => {
      const items = getNavFocusableItems();
      moveFocus(items, "last");
      e.preventDefault();
    },
  });

  const handleToggleClick = () => setIsOpen((p) => !p);
  const handleToggleKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((p) => !p);
      setIsKeyboardInteraction((p) => !p);
    }
  };

  return (
    <>
      <FocusScope
        loop={trapFocus}
        trapped={trapFocus}
        onMountAutoFocus={(e) => e.preventDefault()}
        className={twMerge(
          "fixed z-(--z-navbar) mx-auto flex justify-center gap-2 p-3 transition-transform duration-300 *:first:shrink-0",
          POSITION,
        )}
      >
        <NavBrand />

        <nav
          ref={containerRef}
          aria-label="Primary navigation"
          className={twMerge(
            "z-(--z-navbar) inline-flex flex-col gap-3 overflow-hidden rounded-3xl border border-(--border-color-g)/75 bg-(--bg-color-g) p-1.5 transition-all duration-500 focus-within:bg-(--text-color-g)/15 focus-within:supports-[background-color:color-mix(in_srgb,red,white)]:bg-[color-mix(in_srgb,var(--text-color-g)_10%,var(--bg-color-g))]",
            isOpen
              ? "max-h-[250px] max-w-[200px] items-center"
              : "max-h-12 max-w-12",
          )}
          onKeyDown={handleNavKeydown}
        >
          <div className="flex gap-2">
            <IconBtn
              ref={buttonRef}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls={secondaryId}
              onClick={handleToggleClick}
              onKeyDown={handleToggleKeydown}
              className={isOpen && "border border-(--border-color-g)"} // twMerge()
            >
              {isOpen ? (
                <RiCloseFill aria-hidden />
              ) : (
                <RiMenu4Fill aria-hidden />
              )}
            </IconBtn>
            {isOpen && (
              <NavMenuContent
                id="primary-nav"
                isOpen={isOpen}
                layout="horizontal"
                variant="primary"
                menus={menus?.primary}
                themeBtn={{
                  containerRef,
                  onThemeOpenChange: closeNav,
                  onThemeChange: closeNav,
                }}
              />
            )}
          </div>

          <hr
            aria-hidden
            role="presentation"
            className={twMerge(
              "border-px w-[90%]",
              isOpen
                ? "border-(--text-color-g)/25"
                : "border-(--border-color-g)",
            )}
          />

          <NavMenuContent
            id={secondaryId}
            isOpen={isOpen}
            menus={menus.secondary}
            layout="vertical"
          />
        </nav>
      </FocusScope>

      {isOpen && (
        <div
          aria-hidden
          role="presentation"
          className="fixed inset-0 z-(--z-overlay)"
          onClick={closeNav}
        />
      )}
    </>
  );
};

const Header = () => {
  const navigateToSection = useNavigateToSection();
  const isMobile = useMediaQuery("(max-width: 499px)");

  const navRef = useRef(null);
  const { closeNav } = navRef.current || {};

  const handleMenuClick = (id) => {
    navigateToSection(id);

    closeNav?.();
  };

  const menus = {
    secondary: [
      {
        id: IDS.about,
        label: "About",
        icon: RiBriefcaseFill,
      },
      {
        id: IDS.projects,
        label: "Projects",
        icon: RiFolderReduceFill,
      },
      {
        id: IDS.footer,
        label: "Contact",
        icon: RiDiscussFill,
      },
    ].map(({ id, label, icon }) => (
      <NavMenu
        id={id}
        label={label}
        icon={icon}
        onMenuClick={handleMenuClick}
      />
    )),
  };

  return (
    <header id={IDS.header}>
      {isMobile ? (
        <MobileNav menus={menus} ref={navRef} />
      ) : (
        <DesktopNav menus={menus} ref={navRef} />
      )}
    </header>
  );
};

export default Header;
