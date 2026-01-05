import { useFullscreen } from "@/hooks/useFullScreen";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";

import { DesktopTooltip as Tooltip } from "./Tooltip";

export default function FullscreenToggle() {
  const { isFullscreen, enter, exit } = useFullscreen({
    element: typeof document !== "undefined" ? document.documentElement : null,
  });

  const toggle = () => {
    if (isFullscreen) {
      exit();
    } else {
      enter();
    }
  };

  return (
    <Tooltip content="Full screen mode" side="left" sideOffset={10}>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle fullscreen mode"
        className="inline-flex cursor-pointer items-center justify-center rounded-full bg-(--global-text-color) p-3 text-(--global-background-color) opacity-85 transition hover:scale-105 hover:opacity-100 focus:outline-none"
      >
        {isFullscreen ? (
          <ArrowsPointingInIcon className="size-6" />
        ) : (
          <ArrowsPointingOutIcon className="size-6" />
        )}
      </button>
    </Tooltip>
  );
}
