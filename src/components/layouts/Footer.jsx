import { createElement } from "react";
import {
  ArrowRightEndOnRectangleIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { SiGithub, SiLeetcode } from "@icons-pack/react-simple-icons";

import config from "@config/config";
import { scrollIntoSection } from "@utils/jsUtils";
import { LinkedinIcon as CustomLinkedinIcon } from "@components/elements/CustomIcons";

const FooterCreator = ({ contacts, quickLinks, cpyText }) => {
  const footerProps = {
    contactsIcon: {
      email: EnvelopeIcon,
      linkedin: CustomLinkedinIcon,
      github: SiGithub,
      leetcode: SiLeetcode,
      phone: PhoneIcon,
    },
  };

  return (
    <footer
      id={config.SECTION_IDS.FOOTER}
      className="fancy-bg-2 relative min-h-[50vh] border-t border-(--global-border-color) bg-(--global-background-color) p-6 text-(--glbal-text-color)"
    >
      <div className="mx-auto mb-[40px] grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col gap-3 border-(--global-border-color) max-md:border-b md:border-r">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            Contacts <PhoneIcon className="h-5 w-5" />
          </h2>
          <ul className="flex h-full flex-wrap gap-4 p-5">
            {Object.entries(contacts).map(([type, link], ind) => (
              <li key={ind} title={type}>
                <a
                  href={link}
                  title={type}
                  target="_blank"
                  className="inline-block rounded-full border border-(--global-secondary-text-color) bg-(--global-background-color) p-2 text-(--global-secondary-text-color) transition-all duration-400 hover:bg-(--global-secondary-text-color) hover:text-(--global-background-color)"
                >
                  {footerProps.contactsIcon[type.toLowerCase()] &&
                    createElement(
                      footerProps.contactsIcon[type.toLowerCase()],
                      {
                        className: "w-7 h-7",
                        color: "default",
                      },
                    )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            Quick Links <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
          </h2>
          <ul className="mt-2 space-y-2 pt-4 pl-3">
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
      <p className="absolute inset-x-0 bottom-0 bg-(--global-border-color) p-2 text-center text-sm text-(--global-text-color)">
        {cpyText}
      </p>
    </footer>
  );
};

const Footer = () => {
  const contacts = {
    GitHub: "https://github.com/vishnudt2004",
    LinkedIn: "https://www.linkedin.com/in/vishnu-d-28b7a52b1/",
    LeetCode: "https://leetcode.com/vishnud2004/",
    Email: "mailto:vishnu.d.t.2004@gmail.com",
    // Phone: "tel:+91936350XXXX",
  };

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
