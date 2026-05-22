import { RiFullscreenExitFill, RiFullscreenFill } from "@remixicon/react";

import { useFullscreen } from "@/hooks/useFullScreen";
import { IconBtn } from "./Button";

const FullscreenToggle = () => {
  const { isFullscreen, enter, exit } = useFullscreen();

  const toggle = () => {
    if (isFullscreen) exit();
    else enter();
  };

  return (
    <IconBtn
      aria-label="Toggle fullscreen mode"
      aria-pressed={isFullscreen}
      onClick={toggle}
      className="focus-reset *:scale-x-90 *:text-(--menus-color-g) focus-visible:outline-none"
    >
      {isFullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
    </IconBtn>
  );
};

export default FullscreenToggle;
