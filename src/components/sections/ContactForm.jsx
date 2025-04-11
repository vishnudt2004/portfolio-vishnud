// Module reserved for future use.

import { createElement } from "react";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import config from "@config/config";
import { SimpleLayout } from "@components/elements/SectionLayouts";

const Input = ({ type, icon, ...attr }) => (
  <div className="group relative w-full">
    {type !== "textarea" ? (
      <input
        type={type}
        placeholder="Placeholder"
        className="w-full border border-(--global-border-color) bg-(--input-color) p-3 placeholder:tracking-wider focus:bg-(--global-background-color) focus:ring-2 focus:ring-(--global-secondary-text-color) focus:transition-all focus:outline-none"
        {...attr}
      />
    ) : (
      <textarea
        type="text"
        placeholder="Your Message"
        className="max-h-40 min-h-20 w-full border border-(--global-border-color) bg-(--input-color) p-3 placeholder:tracking-wider focus:bg-(--global-background-color) focus:ring-2 focus:ring-(--global-secondary-text-color) focus:transition-all focus:outline-none"
      />
    )}

    <span className="pointer-events-none absolute top-0 right-0 m-2 p-2 group-focus-within:bg-(--global-background-color)">
      {createElement(icon, {
        className: "h-5 w-5 text-(--global-secondary-text-color)",
      })}
    </span>
  </div>
);

const ContactForm = () => {
  return (
    <SimpleLayout
      id={config.SECTION_IDS.CONTACT_FORM}
      sectionTitle="Contact Me"
    >
      <form
        action="#"
        className="m-auto mt-10 flex max-w-lg flex-col items-center gap-5 text-sm"
      >
        <Input type="text" placeholder="Your Name" icon={UserIcon} />
        <Input type="email" placeholder="Your Email" icon={EnvelopeIcon} />
        <Input type="text" placeholder="Subject" icon={TagIcon} />
        <Input
          type="textarea"
          placeholder="Your Message"
          icon={ChatBubbleLeftIcon}
        />

        <button
          type="submit"
          className="mt-4 flex w-50 max-w-full cursor-pointer items-center justify-center gap-4 rounded-sm bg-(--global-secondary-text-color) px-3 py-2 text-(--global-background-color)"
        >
          Send{" "}
          <PaperAirplaneIcon className="h-4 w-4 -translate-y-0.5 -rotate-35" />
        </button>
      </form>
    </SimpleLayout>
  );
};

export default ContactForm;
