import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import {
  CubeIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
  Squares2X2Icon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import config from "@/config";
import { scrollIntoSection, setHTMLOverflowY } from "@/utils/jsUtils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
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
          { name, icon: Icon, id }, // eslint-disable-line
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
                className="relative flex cursor-pointer items-center gap-1 text-[14px] tracking-[2px] text-(--menus-color-g) duration-300 group-hover:not-hover:not-focus:opacity-60 before:absolute before:-bottom-1 before:m-auto before:h-[2px] before:w-0 before:bg-(--border-color-g) before:duration-300 hover:before:w-full max-sm:w-fit max-sm:before:-bottom-2"
                onClick={() => onItemClick(id)}
              >
                {name}
                <Icon aria-hidden="true" className="size-3.5" />
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
  const scrollDir = useScrollDirection();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scrollDir === "down") setVisible(false);
    if (scrollDir === "up") setVisible(true);
  }, [scrollDir]);

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
          onItemClick={(id) => scrollIntoSection(undefined, id)}
        />
      </nav>
    </div>
  );
}

function MobileNavbar({ brand, menus }) {
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
    scrollIntoSection(undefined, id);
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
            "pointer-events-none fixed inset-x-0 z-(--z-navbar) flex h-dvh w-screen duration-100 *:pointer-events-auto",
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
            className="mt-7 ml-7 h-fit w-fit cursor-pointer rounded-full border border-(--border-color-g) bg-(--background-color-g) p-2 shadow-md"
            onClick={() => setOpen((p) => !p)}
          >
            {!open ? (
              <Squares2X2Icon aria-hidden className="size-6" />
            ) : (
              <XMarkIcon aria-hidden className="size-6" />
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

const NavBrand = ({ children }) => (
  <button
    aria-label="Go to home section"
    className="cursor-effect-hidden group relative z-0 mx-2 flex cursor-pointer overflow-hidden py-0.5 text-center text-[1.2rem] tracking-[2px] text-(--menus-color-g)"
    onClick={() => scrollIntoSection(undefined, "hero")}
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
    <SparklesIcon
      aria-hidden="true"
      className="ml-1 inline size-6 opacity-15"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 right-6 -z-1 m-auto size-[30px] rounded-full bg-(image:--gradient-1) opacity-60 duration-300 group-hover:top-full! group-hover:bottom-[unset]"
    />
  </button>
);

const { IDS_MAP } = config;

const Header = () => {
  const brand = <NavBrand>PORTFOLIO</NavBrand>;

  const menus = [
    {
      name: "About",
      icon: UserIcon,
      id: IDS_MAP.ABOUT,
    },
    {
      name: "Projects",
      icon: CubeIcon,
      id: IDS_MAP.PROJECTS,
    },
    {
      name: "Contact",
      icon: PhoneIcon,
      id: IDS_MAP.FOOTER,
    },
  ];

  return (
    <header id={IDS_MAP.HEADER}>
      <Navbar brand={brand} menus={menus} />
    </header>
  );
};

export default Header;
