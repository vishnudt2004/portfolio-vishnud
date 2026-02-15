import { Link } from "react-router";
import { RiHome5Fill } from "@remixicon/react";

import Button from "@/components/elements/Button";

const NotFound = () => {
  const id = "notfound-heading";

  return (
    <section
      aria-labelledby={id}
      className="relative flex h-[80vh] flex-col items-center justify-center gap-25"
    >
      <div
        aria-hidden
        className="fancy-bg-1 absolute inset-10 -z-1 sm:inset-14 sm:top-20"
      />

      <div className="relative flex flex-col items-center justify-center gap-2">
        <h1 id={id} className="font-medium tracking-wide *:mx-1">
          404 <span>|</span> Page Not Found
        </h1>

        <p className="sr-only">
          The page you are looking for does not exist. You can go back to the
          homepage.
        </p>

        <div
          aria-hidden
          className="xs:text-9xl absolute rounded-full text-8xl font-semibold tracking-widest text-nowrap text-(--text-color-g)/5 *:inline-block"
        >
          <span>4</span>
          <span>O</span>
          <span>4</span>
        </div>
      </div>

      <Button
        asChild
        icon={<RiHome5Fill aria-hidden className="size-4.5" />}
        className="gap-1.5"
      >
        <Link to="/">Back to Homepage</Link>
      </Button>
    </section>
  );
};

export default NotFound;
