import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { RiFileImageFill } from "@remixicon/react";

const DefaultFallback = ({ fallbackAlt, ...attr }) => (
  <div
    {...attr}
    role="img"
    aria-label={fallbackAlt}
    className={twMerge(
      "grid size-full place-items-center content-center gap-2 bg-(--bg-color-g) text-sm",
      attr?.className,
    )}
  >
    <RiFileImageFill size={40} aria-hidden />
    <span>No Image</span>
  </div>
);

const Img = ({
  caption,
  src,
  alt,
  fallback = "default",
  fallbackSrc,
  fallbackAlt = "Fallback Image",
  ...attr
}) => {
  const [error, setError] = useState(false);

  if (error && !fallbackSrc) {
    if (fallback === "default")
      return <DefaultFallback fallbackAlt={fallbackAlt} {...attr} />;
    else if (fallback) return fallback;
  }

  return (
    <figure>
      <img
        src={!error ? src : fallbackSrc}
        alt={!error ? alt : fallbackAlt}
        loading="lazy"
        {...attr}
        onError={() => setError(true)}
      />
      {caption && (
        <>
          <figcaption className="mt-6 text-center leading-0 tracking-wide">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default Img;
