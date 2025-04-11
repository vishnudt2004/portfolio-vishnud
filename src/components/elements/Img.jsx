import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ImageSquareXMarkIcon as CustomImageSquareXMarkIcon } from "./CustomIcons";

const Img = ({ caption, src, fallback, fallbackSrc, ...attr }) => {
  const [error, setError] = useState(false);

  if (error && fallback === "default")
    return (
      <div
        {...attr}
        className={
          "grid h-50 w-50 place-items-center content-center bg-(--global-background-color) stroke-(--global-text-color)! " +
          attr?.className
        }
      >
        <CustomImageSquareXMarkIcon />
        No Image
      </div>
    );

  if (error && fallback) return fallback;

  return (
    <figure>
      <LazyLoadImage
        src={!error ? src : fallbackSrc}
        {...attr}
        onError={() => setError(true)}
      />
      {caption && (
        <figcaption className="mt-3 text-center">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Img;
