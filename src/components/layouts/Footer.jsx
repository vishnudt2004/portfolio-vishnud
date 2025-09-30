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

import config from "@config/config";
import { scrollIntoSection } from "@utils/jsUtils";
import Tooltip from "@components/elements/Tooltip";
import { LinkedinIcon } from "@components/elements/CustomIcons";

const FooterCreator = ({ contacts, quickLinks, cpyText }) => {
  return (
    <footer
      id={config.SECTION_IDS.FOOTER}
      className="fancy-bg-2 relative min-h-[50vh] border-t border-(--global-border-color) p-6 text-(--global-text-color)"
    >
      <div className="mx-auto mb-[40px] grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col gap-3 border-(--global-border-color) max-md:border-b md:border-r">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            Contacts <PhoneIcon className="size-4.5" />
          </h2>
          <ul className="flex h-full flex-wrap gap-2 p-5">
            {contacts.map(({ name, link, icon }) => (
              <li key={name}>
                <Tooltip content={name}>
                  <a
                    href={link}
                    target="_blank"
                    className="inline-flex size-12 items-center justify-center rounded-full border border-(--global-border-color) bg-(--global-background-color) p-2.5 text-(--global-text-color) transition-all duration-400 hover:bg-(--global-text-color) hover:text-(--global-background-color)"
                  >
                    {icon}
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            Quick Links <ArrowRightEndOnRectangleIcon className="size-5" />
          </h2>
          <ul className="mt-2 w-fit columns-2 space-y-2 pt-4 pl-3">
            {quickLinks.map((qLink) => (
              <li key={qLink}>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={(e) => scrollIntoSection(e, qLink)}
                >
                  {qLink.charAt(0).toUpperCase() + qLink.substring(1)}
                </a>
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
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-dt",
      icon: <LinkedinIcon title={null} className="scale-115" />,
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/vishnud2004",
      icon: <SiLeetcode title={null} color="default" className="scale-100" />,
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      icon: <SiHackerrank title={null} color="default" className="scale-95" />,
    },
    {
      name: "Email",
      link: "mailto:vishnu.d.t.2004@gmail.com",
      icon: <SiGmail title={null} color="default" className="scale-95" />,
    },
    // Phone: "tel:+91936350XXXX",
  ];

  const quickLinks = config.FOOTER_QUICK_LINKS;

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
