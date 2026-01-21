import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiGmail,
} from "@icons-pack/react-simple-icons";

import config from "@/config";
import { scrollIntoSection } from "@/utils/jsUtils";
import SocialBtn from "@/components/elements/SocialBtn";
import { LinkedinIcon } from "@/components/elements/CustomIcons";

const { IDS_MAP, SECTIONS } = config;

const FooterSectionHeading = ({ children, icon }) => (
  <h2 className="flex items-center gap-2 text-xl font-medium">
    {children} {icon}
  </h2>
);

const FooterCreator = ({ contacts, quickLinks, cpyText }) => {
  return (
    <footer
      id={IDS_MAP.FOOTER}
      className="fancy-bg-2 relative min-h-[50vh] border-t border-(--border-color-g) p-6 text-(--text-color-g)"
    >
      <div className="mx-auto mb-[40px] grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Column */}
        <div className="flex flex-col gap-3 border-(--border-color-g) max-md:border-b md:border-r">
          <FooterSectionHeading
            icon={
              <ChatBubbleOvalLeftEllipsisIcon
                aria-hidden
                className="size-4.5"
              />
            }
          >
            Contacts
          </FooterSectionHeading>

          <ul className="flex h-full flex-wrap gap-4 p-5">
            {contacts.map(({ name, link, icon, ariaLabel }) => (
              <li key={name}>
                <SocialBtn
                  name={name}
                  link={link}
                  icon={icon}
                  aria-label={`${ariaLabel} (opens in new tab)`}
                  labelWidth="8ch"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <FooterSectionHeading
            icon={
              <ArrowRightEndOnRectangleIcon aria-hidden className="size-5" />
            }
          >
            Quick Links
          </FooterSectionHeading>
          <ul className="mt-2 w-fit columns-2 space-y-2 pt-4 pl-3">
            {quickLinks.map((qLink) => (
              <li key={qLink.id}>
                <button
                  type="button"
                  onClick={() => scrollIntoSection(undefined, qLink.id)}
                  className="cursor-pointer hover:underline"
                >
                  {qLink.name}
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
  const contacts = [
    {
      name: "GitHub",
      link: "https://github.com/vishnudt2004",
      icon: <SiGithub aria-hidden title={null} className="scale-110" />,
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-dt",
      icon: <LinkedinIcon aria-hidden title={null} className="scale-115" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/vishnud2004",
      icon: (
        <SiLeetcode
          aria-hidden
          title={null}
          color="default"
          className="scale-100"
        />
      ),
      ariaLabel: "LeetCode Profile",
    },
    {
      name: "Hacker Rank",
      link: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      icon: (
        <SiHackerrank
          aria-hidden
          title={null}
          color="default"
          className="scale-95"
        />
      ),
      ariaLabel: "HackerRank Profile",
    },
    {
      name: "Email",
      link: "mailto:vishnu.d.t.2004@gmail.com",
      icon: (
        <SiGmail
          aria-hidden
          title={null}
          color="default"
          className="scale-95"
        />
      ),
      ariaLabel: "Mail me",
    },
    // Phone: "tel:+91936350XXXX",
  ];

  const quickLinks = SECTIONS.filter((s) => s.enabled && s.id !== "hero").map(
    (s) => ({ id: s.id, name: s.name }),
  );

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
