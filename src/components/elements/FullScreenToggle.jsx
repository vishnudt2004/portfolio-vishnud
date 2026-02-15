import { useFullscreen } from "@/hooks/useFullScreen";
import { DesktopTooltip as Tooltip } from "./Tooltip";
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
    <Tooltip content="Full screen mode" side="left" sideOffset={10}>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle fullscreen mode"
        aria-pressed={isFullscreen}
        className="inline-flex items-center justify-center rounded-full border border-(--border-color-g) bg-(--background-color-g) p-3 shadow-md transition *:size-6 hover:scale-105 focus:scale-105 focus:opacity-100 active:scale-90"
      >
        {isFullscreen ? (
          <FullscreenExitIcon style={{ "--color": "var(--text-color-g)" }} />
        ) : (
          <FullscreenEnterIcon style={{ "--color": "var(--text-color-g)" }} />
        )}
      </button>
    </Tooltip>
  );
}
