import {
  ArrowRightEndOnRectangleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiGmail,
} from "@icons-pack/react-simple-icons";

import config from "@/config";
import { scrollIntoSection } from "@/utils/jsUtils";
import Tooltip from "@/components/elements/Tooltip";
import { LinkedinIcon } from "@/components/elements/CustomIcons";

const { LAYOUT_IDS, FOOTER_QUICK_LINKS } = config;

const FooterSectionHeading = ({ children, icon }) => (
  <span className="flex items-center gap-2 text-xl font-medium">
    {children} {icon}
  </span>
);

const FooterCreator = ({ contacts, quickLinks, cpyText }) => {
  return (
    <footer
      id={LAYOUT_IDS.FOOTER}
      className="fancy-bg-2 relative min-h-[50vh] border-t border-(--global-border-color) p-6 text-(--global-text-color)"
    >
      <div className="mx-auto mb-[40px] grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Column */}
        <div className="flex flex-col gap-3 border-(--global-border-color) max-md:border-b md:border-r">
          <FooterSectionHeading icon={<PhoneIcon className="size-4.5" />}>
            Contacts
          </FooterSectionHeading>

          <ul className="flex h-full flex-wrap gap-2 p-5">
            {contacts.map(({ name, link, icon, ariaLabel }) => (
              <li key={name}>
                <Tooltip content={name}>
                  <a
                    href={link}
                    target="_blank"
                    className="inline-flex size-12 items-center justify-center rounded-full border border-(--global-border-color) bg-(--global-background-color) p-2.5 text-(--global-text-color) transition-all duration-400 hover:bg-(--global-text-color) hover:text-(--global-background-color)"
                    aria-label={ariaLabel}
                  >
                    {icon}
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <FooterSectionHeading
            icon={<ArrowRightEndOnRectangleIcon className="size-5" />}
          >
            Quick Links
          </FooterSectionHeading>
          <ul className="mt-2 w-fit columns-2 space-y-2 pt-4 pl-3">
            {quickLinks.map((qLink) => (
              <li key={qLink.id}>
                <button
                  className="cursor-pointer hover:underline"
                  onClick={(e) => scrollIntoSection(e, qLink.id)}
                >
                  {qLink.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="absolute inset-x-0 bottom-0 bg-(--global-border-color)/25 p-2 text-center text-xs text-(--global-text-color)">
        {cpyText}
      </p>
    </footer>
  );
};

const Footer = () => {
  const contacts = [
    {
      name: "GitHub",
      link: "https://github.com/vishnudt2004",
      icon: <SiGithub title={null} className="scale-110" />,
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-dt",
      icon: <LinkedinIcon title={null} className="scale-115" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/vishnud2004",
      icon: <SiLeetcode title={null} color="default" className="scale-100" />,
      ariaLabel: "LeetCode Profile",
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      icon: <SiHackerrank title={null} color="default" className="scale-95" />,
      ariaLabel: "HackerRank Profile",
    },
    {
      name: "Email",
      link: "mailto:vishnu.d.t.2004@gmail.com",
      icon: <SiGmail title={null} color="default" className="scale-95" />,
      ariaLabel: "Mail me",
    },
    // Phone: "tel:+91936350XXXX",
  ];

  const quickLinks = FOOTER_QUICK_LINKS;

  const cpyText = (
    <>&copy; {new Date().getFullYear()} Vishnu D. All Rights Reserved.</>
  );

  return (
    <FooterCreator
      contacts={contacts}
      quickLinks={quickLinks}
      cpyText={cpyText}
    />
  );
};

export default Footer;
