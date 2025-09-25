import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { twMerge } from "tailwind-merge";

import { ImageSquareXMarkIcon } from "./CustomIcons";

const Img = ({ caption, src, fallback = "default", fallbackSrc, ...attr }) => {
  const [error, setError] = useState(false);

  if (error && !fallbackSrc) {
    if (fallback === "default")
      return (
        <div
          {...attr}
          className={twMerge(
            "grid size-50 place-items-center content-center bg-(--global-background-color) stroke-(--global-text-color)!",
            attr?.className,
          )}
        >
          <ImageSquareXMarkIcon />
          No Image
        </div>
      );
    else if (fallback) return fallback;
  }

  return (
    <figure>
      <LazyLoadImage
        src={!error ? src : fallbackSrc}
        {...attr}
        onError={() => setError(true)}
      />
      {caption && (
        <>
          <br />
          <figcaption className="mt-1 text-center leading-0">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default Img;
