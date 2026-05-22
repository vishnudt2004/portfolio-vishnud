import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { RiFileDamageFill } from "@remixicon/react";

const ImgFallback = ({
  children = (
    <>
      <RiFileDamageFill aria-hidden size={40} />
      <span>Image failed to load</span>
    </>
  ),
  className,
  ...attr
}) => (
  <div
    className={twMerge(
      "grid size-50 place-items-center content-center gap-3 text-sm",
      className,
    )}
    {...attr}
  >
    {children}
  </div>
);

const Img = ({ caption, fallback = <ImgFallback />, ...props }) => {
  const [error, setError] = useState(false);

  if (error) return fallback;

  const media = (
    <img loading="lazy" onError={() => setError(true)} {...props} />
  );

  if (!caption) return media;

  return (
    <figure>
      {media}
      {caption && (
        <figcaption className="mt-6 text-center leading-0 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Img;
export { ImgFallback };
