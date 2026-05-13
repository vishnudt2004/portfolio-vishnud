import { RiFullscreenExitFill, RiFullscreenFill } from "@remixicon/react";

import { useFullscreen } from "@/hooks/useFullScreen";
import { IconBtn } from "./Button";

export default function FullscreenToggle() {
  const { isFullscreen, enter, exit } = useFullscreen();

  const toggle = () => {
    if (isFullscreen) {
      exit();
    } else {
      enter();
    }
  };

  return (
    <IconBtn
      aria-label="Toggle fullscreen mode"
      aria-pressed={isFullscreen}
      onClick={toggle}
      className="*:scale-x-90 *:text-(--menus-color-g)"
    >
      {isFullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
    </IconBtn>
  );
}
