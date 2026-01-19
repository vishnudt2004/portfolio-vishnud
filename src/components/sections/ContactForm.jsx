// Module reserved for future use.
const DISABLED = true;

import { twMerge } from "tailwind-merge";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import config from "@/config";
import { SimpleLayout } from "@/components/elements/SectionLayouts";

const Input = ({
  as = "input",
  id,
  label,
  icon: Icon, // eslint-disable-line no-unused-vars
  className,
  ...props
}) => {
  const Component = as;

  return (
    <div className="group relative w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <Component
        id={id}
        className={twMerge(
          "focus-reset w-full rounded-xl border border-(--border-color-g)/25 bg-(--input-color) p-3 placeholder:tracking-wider focus:outline-2 focus:outline-offset-1 focus:outline-(--text-color-g) focus-visible:bg-(--background-color-g)",
          className,
        )}
        {...props}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 m-2 p-2 group-focus-within:bg-(--background-color-g)"
      >
        <Icon className="size-4 text-(--text-color-g)/80 group-focus-within:text-(--text-color-g)" />
      </span>
    </div>
  );
};

const ContactForm = () => {
  return (
    <SimpleLayout
      sectionId={config.IDS_MAP.CONTACTFORM}
      sectionTitle="Contact Me"
    >
      <form noValidate={DISABLED}>
        <fieldset
          disabled={DISABLED}
          className="m-auto mt-10 flex max-w-lg flex-col items-center gap-5 text-sm"
        >
          <legend className="sr-only">Contact form</legend>
          <Input
            type="text"
            id="name"
            name="name"
            label="Your Name"
            placeholder="Your Name"
            icon={UserIcon}
            autoComplete="name"
          />
          <Input
            type="email"
            id="email"
            name="email"
            label="Your Email"
            placeholder="Your Email"
            icon={EnvelopeIcon}
            autoComplete="email"
          />
          <Input
            type="text"
            id="subject"
            name="subject"
            label="Subject"
            placeholder="Subject"
            icon={TagIcon}
            autoComplete="off"
          />
          <Input
            as="textarea"
            id="message"
            name="message"
            label="Your Message"
            placeholder="Your Message"
            icon={ChatBubbleLeftIcon}
            className="max-h-40 min-h-20"
          />

          <button
            type="submit"
            disabled={DISABLED}
            className="*: mt-4 flex w-fit max-w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-(--text-color-g)/80 px-4 py-1.5 text-(--background-color-g) transition hover:bg-(--text-color-g) focus:bg-(--text-color-g) active:scale-90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-(--text-color-g)/80 disabled:active:scale-100"
          >
            Send{" "}
            <PaperAirplaneIcon
              aria-hidden
              className="h-4 w-4 -translate-y-0.5 -rotate-35"
            />
          </button>
        </fieldset>
      </form>
    </SimpleLayout>
  );
};

export default ContactForm;
