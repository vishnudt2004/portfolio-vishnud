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
        aria-description="Full screen mode"
        aria-label="Toggle fullscreen mode"
        aria-pressed={isFullscreen}
        className="inline-flex cursor-pointer items-center justify-center rounded-full border border-(--border-color-g) bg-(--background-color-g) p-3 shadow-md transition *:size-6 hover:scale-105 focus:scale-105 focus:opacity-100 active:scale-90"
      >
        {isFullscreen ? <ArrowsPointingInIcon /> : <ArrowsPointingOutIcon />}
      </button>
    </Tooltip>
  );
}
