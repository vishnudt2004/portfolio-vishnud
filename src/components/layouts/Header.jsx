import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import {
  RiApps2Fill,
  RiBriefcaseFill,
  RiChat1Fill,
  RiFolderReduceFill,
  RiHome5Fill,
  RiSparkling2Fill,
} from "@remixicon/react";

import { IDS } from "@/config/constants";
import { setHTMLOverflowY } from "@/utils/jsUtils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import {
  NavbarMenusMotion,
  NavbarBrandMotion,
} from "@/components/elements/Animations";
import ManualThemeSwitcher from "@/components/elements/ThemeSwitcher";
import { FocusScope } from "@radix-ui/react-focus-scope";

function NavMenus({
  menus,
  onItemClick,
  visible,
  isSm,
  containerRef,
  onOpenChange,
  onThemeChange,
}) {
  return (
    <ul className="group flex gap-8 max-sm:flex-col sm:items-center">
      {menus.map(
        (
          { label, icon: Icon, id }, // eslint-disable-line
          index,
        ) => (
          <NavbarMenusMotion
            key={id}
            screen={isSm ? "small" : "large"}
            navbarVisible={visible}
            delay={index * 0.2}
          >
            <li>
              <button
                type="button"
                className="relative flex items-center gap-1.25 text-[14px] tracking-widest text-(--menus-color-g) duration-300 group-focus-within:not-hover:not-focus:opacity-60 group-hover:not-hover:not-focus:opacity-60 before:absolute before:-bottom-1 before:m-auto before:h-[2px] before:w-0 before:bg-(--border-color-g) before:duration-300 hover:before:w-full max-sm:w-fit max-sm:before:-bottom-2"
                onClick={() => onItemClick(id)}
              >
                {label}
                <Icon aria-hidden className="size-3.5 opacity-90" />
              </button>
            </li>
          </NavbarMenusMotion>
        ),
      )}

      <li>
        <ManualThemeSwitcher
          containerRef={containerRef}
          onOpenChange={onOpenChange}
          onThemeChange={onThemeChange}
        />
      </li>
    </ul>
  );
}

function DesktopNavbar({ brand, menus }) {
  const navigateToSection = useNavigateToSection();
  const scrollDir = useScrollDirection();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scrollDir === "down") setVisible(false);
    if (scrollDir === "up") setVisible(true);
  }, [scrollDir]);

  const handleMenuClick = (id) => navigateToSection(id);

  return (
    <div
      className={twMerge(
        "fixed inset-x-0 top-0 z-(--z-navbar) duration-200",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav
        aria-label="Primary navigation"
        className="flex items-center justify-between border-b border-(--border-color-g)/25 bg-(--background-color-g) px-5 py-3"
        onFocusCapture={() => setVisible(true)}
      >
        <div>{brand}</div>

        <NavMenus
          menus={menus}
          visible={visible}
          onItemClick={handleMenuClick}
        />
      </nav>
    </div>
  );
}

function MobileNavbar({ brand, menus }) {
  const navigateToSection = useNavigateToSection();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  // Scroll lock
  useEffect(() => {
    setHTMLOverflowY(open);
    return () => setHTMLOverflowY(false);
  }, [open]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current.focus();
    }
  };

  const handleMenuClick = (id) => {
    navigateToSection(id);
    setOpen(false);
  };

  return (
    <>
      <FocusScope
        trapped={open}
        loop={open}
        onMountAutoFocus={(e) => e.preventDefault()}
      >
        <div
          className={twMerge(
            "pointer-events-none fixed inset-x-0 top-0 z-(--z-navbar) flex h-dvh w-screen duration-100 *:pointer-events-auto",
            open ? "left-0" : "-left-[calc(250px+1px)]",
          )}
          onKeyDown={handleOnKeyDown}
        >
          <nav
            ref={containerRef}
            id="nav-menus"
            aria-label="Primary navigation"
            inert={!open}
            className="flex h-full w-[250px] flex-col items-center justify-start gap-10 border-r border-(--border-color-g) bg-(--background-color-g) px-5 py-10"
          >
            <NavbarBrandMotion screen="small" navbarVisible={open}>
              <div className="brand">{brand}</div>
            </NavbarBrandMotion>

            <NavMenus
              containerRef={containerRef.current}
              menus={menus}
              onItemClick={handleMenuClick}
              visible={open}
              onThemeChange={() => setOpen(false)}
              isSm
            />
          </nav>

          <button
            ref={btnRef}
            aria-label="Toggle Navigation Menu"
            aria-controls="nav-menus"
            aria-expanded={open}
            aria-haspopup="navigation"
            className="mt-7 ml-7 h-fit w-fit rounded-full border border-(--border-color-g) bg-(--background-color-g) p-2 shadow-md"
            onClick={() => setOpen((p) => !p)}
          >
            {!open ? (
              <RiApps2Fill aria-hidden className="size-6" />
            ) : (
              <RiCloseFill aria-hidden className="size-6" />
            )}
          </button>
        </div>
      </FocusScope>

      {open && (
        <div
          aria-hidden
          className="fixed inset-0 z-(--z-overlay) bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export function Navbar({ brand, menus }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = () => setIsMobile(mq.matches);

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? (
    <MobileNavbar brand={brand} menus={menus} />
  ) : (
    <DesktopNavbar brand={brand} menus={menus} />
  );
}

const NavBrand = ({ children }) => {
  const navigateToSection = useNavigateToSection();
  const { pathname } = useLocation();

  const Icon = pathname === "/" ? RiSparkling2Fill : RiHome5Fill;

  const handleClick = () => navigateToSection("hero");

  return (
    <button
      aria-label="Go to home section"
      className="cursor-effect-hidden group relative z-0 mx-2 flex items-center overflow-hidden py-0.5 text-center text-[1.2rem] tracking-[2px] text-(--menus-color-g) focus:leading-0"
      onClick={handleClick}
    >
      <div>
        {children.split("").map((char, index) => (
          <span
            key={`${char}${index}`}
            className="group-hover:animate-textAnimation1 group-focus-within:animate-textAnimation1 inline-block"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
      <Icon aria-hidden className="ml-1 inline size-5 opacity-15" />
      <div
        aria-hidden
        className="absolute inset-0 right-6 -z-1 m-auto size-[30px] rounded-full bg-(image:--gradient-1) opacity-60 duration-300 group-focus-within:top-full group-focus-within:bottom-[unset] group-hover:top-full group-hover:bottom-[unset]"
      />
    </button>
  );
};

const Header = () => {
  const brand = <NavBrand>PORTFOLIO</NavBrand>;

  const menus = [
    {
      label: "About",
      icon: RiBriefcaseFill,
      id: IDS.about,
    },
    {
      label: "Projects",
      icon: RiFolderReduceFill,
      id: IDS.projects,
    },
    {
      label: "Contact",
      icon: RiChat1Fill,
      id: IDS.footer,
    },
  ];

  return (
    <header id={IDS.header}>
      <Navbar brand={brand} menus={menus} />
    </header>
  );
};

export default Header;
