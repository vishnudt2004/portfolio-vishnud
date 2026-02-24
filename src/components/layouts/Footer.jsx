import { twMerge } from "tailwind-merge";
import { RiCompass4Line, RiLinksLine } from "@remixicon/react";
import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiGmail,
} from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { filterActiveSections } from "@/utils/siteUtils";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import SocialBtn from "@/components/ui/SocialBtn";
import { LinkedinIcon } from "@/components/ui/CustomIcons";

const FooterSectionHeading = ({ children, icon }) => (
  <h2 className="flex items-center gap-2 text-xl font-medium">
    {children} {icon}
  </h2>
);

const FooterLayout = ({ connections, quickLinks, cpyText }) => {
  const navigateToSection = useNavigateToSection();

  return (
    <footer
      id={IDS.footer}
      className="fancy-bg-2 relative min-h-[50vh] border-t border-(--border-color-g) p-6 text-(--text-color-g)"
    >
      <div className="mx-auto mb-[40px] grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Column */}
        <div className="flex flex-col gap-3 border-(--border-color-g) max-md:border-b md:border-r">
          <FooterSectionHeading
            icon={<RiLinksLine aria-hidden className="size-5.5" />}
          >
            Connect
          </FooterSectionHeading>

          <ul className="flex h-full flex-wrap gap-4 p-5">
            {connections.map(({ label, link, icon }) => (
              <li key={label}>
                <SocialBtn
                  label={label}
                  link={link}
                  icon={icon}
                  labelWidth="8ch"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <FooterSectionHeading
            icon={<RiCompass4Line aria-hidden className="size-5.5" />}
          >
            Quick Links
          </FooterSectionHeading>
          <ul
            className={twMerge(
              "mt-2 w-fit columns-2 space-y-2 pt-4 pl-3",
              quickLinks.length > 6 && "lg:columns-3",
            )}
          >
            {quickLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className="rounded-sm leading-4 hover:underline focus-visible:px-1 focus-visible:underline"
                  onClick={() => navigateToSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="absolute inset-x-0 bottom-0 bg-(--border-color-g)/25 p-2 text-center text-xs text-(--text-color-g)">
        {cpyText}
      </p>
    </footer>
  );
};

const Footer = () => {
  const connections = [
    {
      label: "GitHub",
      link: "https://github.com/vishnudt2004",
      icon: <SiGithub aria-hidden title={null} className="scale-110" />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-dt",
      icon: <LinkedinIcon aria-hidden title={null} className="scale-115" />,
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/vishnud2004",
      icon: (
        <SiLeetcode
          aria-hidden
          title={null}
          color="default"
          className="scale-100"
        />
      ),
    },
    {
      label: "Hacker Rank",
      link: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      icon: (
        <SiHackerrank
          aria-hidden
          title={null}
          color="default"
          className="scale-95"
        />
      ),
    },
    {
      label: "Email",
      link: "mailto:vishnu.d.t.2004@gmail.com",
      icon: (
        <SiGmail
          aria-hidden
          title={null}
          color="default"
          className="scale-95"
        />
      ),
    },
    // Phone: "tel:+91936350XXXX",
  ];

  const quickLinks = filterActiveSections([
    { id: "about", label: "About" },
    { id: "proficiencies", label: "Proficiencies" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "activities", label: "Activities" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact-form", label: "Contact Form" },
  ]);

  const cpyText = (
    <>&copy; {new Date().getFullYear()} Vishnu D. All Rights Reserved.</>
  );

  return (
    <FooterLayout
      connections={connections}
      quickLinks={quickLinks}
      cpyText={cpyText}
    />
  );
};

export default Footer;
