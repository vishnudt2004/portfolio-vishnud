import { useFullscreen } from "@/hooks/useFullScreen";
import { IconBtn } from "./Button";
import { FullscreenEnterIcon, FullscreenExitIcon } from "./CustomIcons";

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
    <IconBtn
      aria-label="Toggle fullscreen mode"
      aria-pressed={isFullscreen}
      onClick={toggle}
    >
      {isFullscreen ? (
        <FullscreenExitIcon style={{ "--color": "var(--menus-color-g)" }} />
      ) : (
        <FullscreenEnterIcon style={{ "--color": "var(--menus-color-g)" }} />
      )}
    </IconBtn>
  );
}
