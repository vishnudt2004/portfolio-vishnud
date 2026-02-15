// Module reserved for future use.
const DISABLED = true;

import { twMerge } from "tailwind-merge";
import {
  RiEditBoxFill,
  RiMailFill,
  RiPriceTag3Fill,
  RiSendPlaneFill,
  RiUser3Fill,
} from "@remixicon/react";

import { IDS } from "@/config/constants";
import Button from "@/elements/Button";
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
    <SimpleLayout sectionId={IDS.contactForm} sectionTitle="Contact Me">
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
            icon={RiUser3Fill}
            autoComplete="name"
          />
          <Input
            type="email"
            id="email"
            name="email"
            label="Your Email"
            placeholder="Your Email"
            icon={RiMailFill}
            autoComplete="email"
          />
          <Input
            type="text"
            id="subject"
            name="subject"
            label="Subject"
            placeholder="Subject"
            icon={RiPriceTag3Fill}
            autoComplete="off"
          />
          <Input
            as="textarea"
            id="message"
            name="message"
            label="Your Message"
            placeholder="Your Message"
            icon={RiEditBoxFill}
            className="max-h-40 min-h-20"
          />

          <Button
            type="submit"
            disabled={DISABLED}
            className="mt-4 px-4 py-1.5"
          >
            Send <RiSendPlaneFill aria-hidden className="size-4" />
          </Button>
        </fieldset>
      </form>
    </SimpleLayout>
  );
};

export default ContactForm;
