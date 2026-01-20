import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { twMerge } from "tailwind-merge";

import { ImageSquareXMarkIcon } from "./CustomIcons";

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
      return (
        <div
          {...attr}
          role="img"
          aria-label={fallbackAlt}
          className={twMerge(
            "grid size-50 place-items-center content-center bg-(--background-color-g) stroke-(--text-color-g)!",
            attr?.className,
          )}
        >
          <ImageSquareXMarkIcon aria-hidden />
          No Image
        </div>
      );
    else if (fallback) return fallback;
  }

  return (
    <figure>
      <LazyLoadImage
        src={!error ? src : fallbackSrc}
        alt={!error ? alt : fallbackAlt}
        {...attr}
        onError={() => setError(true)}
      />
      {caption && (
        <>
          <figcaption className="mt-6 text-center leading-0">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default Img;
