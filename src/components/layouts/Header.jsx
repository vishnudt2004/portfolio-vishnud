import { useState, createElement, useEffect, useRef } from "react";
import {
  CubeIcon,
  ChatBubbleLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  XMarkIcon,
  Squares2X2Icon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

import config from "@config/config";
import {
  scrollIntoTop,
  scrollIntoSection,
  setHTMLOverflowY,
} from "@utils/jsUtils";
import useScrollDirection from "@hooks/useScrollDirection";
import useClickOutside from "@hooks/useClickOutside";
import {
  NavbarDropdownAnimatePresence,
  NavbarMenusMotion,
  NavbarBrandMotion,
} from "@components/elements/Animations";
import { ManualThemeSwitcher } from "@components/elements/ThemeSwitcher";

const ThemeButton = ({ onChange }) => {
  const [visible, setVisible] = useState(false);

  const clickRef = useRef(null);

  useClickOutside({
    refs: clickRef,
    callback: () => setVisible(false),
    active: visible,
  });

  const handleVisibility = () => setVisible((p) => !p);

  const handleOnChange = () => {
    setVisible(false);
    onChange();
    scrollIntoTop(); // Prevent sections from disappearing due to scroll reset on theme change.
  };

  return (
    <div ref={clickRef} className="relative">
      <button
        className="scale-90 cursor-pointer place-items-center rounded-full bg-(--global-text-color) p-3 text-(--global-background-color) transition-transform *:size-4 hover:scale-100 active:scale-90"
        onClick={handleVisibility}
      >
        {!visible ? <PaintBrushIcon /> : <XMarkIcon />}
      </button>

      <NavbarDropdownAnimatePresence dropDownVisible={visible}>
        <div className="absolute top-13 right-0 z-(--navbar-dropdown-z-index) m-auto w-35 text-sm">
          <ManualThemeSwitcher onChange={handleOnChange} />
        </div>
      </NavbarDropdownAnimatePresence>
    </div>
  );
};

const Navbar = ({
  brand,
  menus = [{ name: "", icon: { el: () => <></>, props: {} } }],
}) => {
  const scrollDir = useScrollDirection();

  const navbarMutationBreakpoint = "639px"; // tailwind-variant: --breakpoint-sm: sm - 1

  const [navbarVisible, setNavbarVisible] = useState(
    window.matchMedia(`(min-width: ${navbarMutationBreakpoint})`).matches,
  );
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia(`(max-width: ${navbarMutationBreakpoint})`).matches,
  );

  const clickRefs = useRef([]);

  useClickOutside({
    refs: clickRefs,
    callback: () => setNavbarVisible(false),
    active: [isSmallScreen, navbarVisible],
  });

  useEffect(() => {
    setNavbarVisible(!isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${navbarMutationBreakpoint})`,
    );
    const handleChange = () => setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // For large screens, toggle navbar visibility on scroll
  useEffect(() => {
    if (!isSmallScreen) {
      if (scrollDir === "down") setNavbarVisible(false);
      else if (scrollDir === "up") setNavbarVisible(true);
    }
  }, [scrollDir, isSmallScreen]);

  // For small screens, disable page scrolling when the navbar is visible
  useEffect(() => {
    setHTMLOverflowY(isSmallScreen && navbarVisible);
    return () => setHTMLOverflowY(false);
  }, [navbarVisible, isSmallScreen]);

  const toggleNavbar = () => isSmallScreen && setNavbarVisible((p) => !p);

  return (
    <section
      className={
        "pointer-events-none fixed inset-x-0 z-(--navbar-z-index) flex w-dvw transition-all duration-500 max-sm:h-dvh " +
        `${
          !isSmallScreen
            ? navbarVisible
              ? "top-0"
              : "-top-[calc(80px+1px)]"
            : navbarVisible
              ? "left-0"
              : "-left-[calc(250px+1px)]"
        } ` +
        `${navbarVisible ? "backdrop-blur-xs" : ""}`
      }
    >
      <nav
        ref={(el) => (clickRefs.current[0] = el)}
        className="pointer-events-auto flex w-full items-center justify-between border-b border-(--global-border-color) bg-(--global-background-color) px-5 py-3 max-sm:h-full max-sm:w-[250px] max-sm:flex-col max-sm:items-center max-sm:justify-start max-sm:gap-10 max-sm:border-r max-sm:border-b-0 max-sm:py-10"
      >
        <NavbarBrandMotion
          screen={isSmallScreen ? "small" : "large"}
          navbarVisible={navbarVisible}
        >
          <div className="brand">{brand}</div>
        </NavbarBrandMotion>

        <ul className="flex gap-5 max-sm:flex-col max-sm:gap-8">
          {menus.map(({ name, icon: { el, props }, id }, index) => (
            <NavbarMenusMotion
              key={id}
              screen={isSmallScreen ? "small" : "large"}
              navbarVisible={navbarVisible}
              delay={index * 0.2}
            >
              <li>
                <a
                  href="#"
                  className="group relative flex h-full cursor-pointer items-center gap-0.5 text-[14px] tracking-[2px] text-(--global-menus-color) before:absolute before:inset-x-0 before:bottom-1 before:m-auto before:h-[2px] before:w-0 before:rounded-[5px_5px_0_0] before:bg-(--global-menus-color) before:transition-all before:duration-500 hover:before:w-full max-sm:w-fit max-sm:before:-bottom-2"
                  onClick={(e) => {
                    scrollIntoSection(e, config.SECTION_IDS[id.toUpperCase()]);
                    toggleNavbar();
                  }}
                >
                  {name}{" "}
                  {createElement(el, {
                    ...props,
                    className: `${props?.className ? props?.className : ""} opacity-0 transition-all duration-500 group-hover:opacity-100`,
                  })}
                </a>
              </li>
            </NavbarMenusMotion>
          ))}

          <li>
            <ThemeButton onChange={toggleNavbar} />
          </li>
        </ul>
      </nav>

      <button
        ref={(el) => (clickRefs.current[1] = el)}
        className="pointer-events-auto mt-7 ml-7 hidden h-fit w-fit cursor-pointer rounded-full border border-(--global-border-color) bg-(--global-background-color) p-2 shadow-md transition-all max-sm:inline-block"
        onClick={toggleNavbar}
      >
        {!navbarVisible ? (
          <Squares2X2Icon className="h-6 w-6" />
        ) : (
          <XMarkIcon className="h-6 w-6" />
        )}
      </button>
    </section>
  );
};

const NavBrand = ({ children, ...attr }) => (
  <div
    className="group relative z-0 mx-2 cursor-pointer overflow-hidden text-center text-[1.2rem] tracking-[3px] text-(--global-menus-color)"
    {...attr}
  >
    <div>
      {children.split("").map((char, index) => (
        <span
          key={`${char}${index}`}
          className="group-hover:animate-textAnimation1 inline-block"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {char}
        </span>
      ))}
    </div>
    <div className="absolute top-0 right-0 bottom-0 left-0 -z-1 m-auto h-[30px] w-[30px] rounded-full bg-(image:--gradient-1) opacity-60 transition-all duration-400 group-hover:top-full! group-hover:bottom-[unset]" />
  </div>
);

const Header = () => {
  const brand = (
    <NavBrand onClick={(e) => scrollIntoSection(e, "hero")}>PORTFOLIO</NavBrand>
  );

  const menus = [
    {
      name: "About",
      icon: { el: UserIcon, props: { className: "size-4.5" } },
      id: "ABOUT",
    },
    {
      name: "Projects",
      icon: { el: CubeIcon, props: { className: "size-4.5 scale-90" } },
      id: "PROJECTS",
    },
    {
      name: "Contact",
      icon: {
        el: ChatBubbleLeftIcon,
        props: { className: "size-4.5 scale-90" },
      },
      id: "FOOTER",
    },
  ];

  return (
    <header id={config.SECTION_IDS.HEADER}>
      <Navbar brand={brand} menus={menus} />
    </header>
  );
};

export default Header;
