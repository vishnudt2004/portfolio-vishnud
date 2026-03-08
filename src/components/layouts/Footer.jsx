import { RiCompass4Line, RiLinksLine } from "@remixicon/react";
import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiGmail,
} from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { filterActiveSections } from "@/utils/siteUtils";
import { LinkedinIcon } from "@/components/ui/Icons";

const SocialItem = ({ label, link, color, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ "--color": color }}
    className="cursor-effect-subtle group relative flex rounded-full p-1.5 text-(--text-color-g) transition-colors duration-300 *:size-6 **:first:fill-(--text-color-g) hover:bg-(--text-color-g)/15 focus-visible:bg-(--text-color-g)/15"
  >
    {icon}
    <span className="absolute -bottom-7 left-1/2 inline-flex -translate-x-1/2 items-center justify-center text-[13px] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
      {label}
    </span>
  </a>
);

const FooterLayout = ({ connections, cpyText }) => {
  return (
    <footer
      id={IDS.footer}
      className="mx-10 my-2 flex flex-col flex-wrap items-center justify-center gap-10 border-t border-(--border-color-g)/50 py-3 sm:mb-10 sm:flex-row sm:justify-between sm:px-5"
    >
      <ul className="flex h-full flex-wrap gap-2">
        {connections.map(({ label, ...rest }) => (
          <li key={label}>
            <SocialItem label={label} {...rest} />
          </li>
        ))}
      </ul>

      <p className="text-center text-xs text-(--text-secondary-color-g)">
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
      icon: <SiGithub aria-hidden title={null} className="scale-90" />,
      color: "#666", // GitHub Black
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-dt",
      icon: (
        <LinkedinIcon
          style={{
            "--color-2": "var(--bg-color-g)",
          }}
          aria-hidden
          title={null}
          className="scale-110"
        />
      ),
      color: "#0A66C2", // LinkedIn Blue
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/vishnud2004",
      icon: <SiLeetcode aria-hidden title={null} className="scale-90" />,
      color: "#FFA116", // LeetCode Orange
    },
    {
      label: "HackerRank",
      link: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      icon: <SiHackerrank aria-hidden title={null} className="scale-80" />,
      color: "#2EC866", // HackerRank Green
    },
    {
      label: "Email",
      link: "mailto:vishnu.d.t.2004@gmail.com",
      icon: <SiGmail aria-hidden title={null} className="scale-80" />,
      color: "#EA4335", // Gmail Red
    },
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

  return <FooterLayout connections={connections} cpyText={cpyText} />;
};

export default Footer;
