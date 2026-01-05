import { useCallback, useEffect, useState } from "react";

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    // @ts-expect-error Safari
    document.webkitFullscreenElement ||
    // @ts-expect-error Firefox
    document.mozFullScreenElement ||
    // @ts-expect-error IE/Edge legacy
    document.msFullscreenElement ||
    null
  );
}

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enter = useCallback(() => {
    const el = document.documentElement;

    if (el.requestFullscreen) el.requestFullscreen();
    // @ts-expect-error Safari
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    // @ts-expect-error Firefox
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    // @ts-expect-error IE/Edge legacy
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  }, []);

  const exit = useCallback(() => {
    if (document.exitFullscreen) document.exitFullscreen();
    // @ts-expect-error Safari
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    // @ts-expect-error Firefox
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    // @ts-expect-error IE/Edge legacy
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }, []);

  const toggle = useCallback(() => {
    if (getFullscreenElement()) exit();
    else enter();
  }, [enter, exit]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(getFullscreenElement()));

    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    document.addEventListener("mozfullscreenchange", onChange);
    document.addEventListener("MSFullscreenChange", onChange);

    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
      document.removeEventListener("mozfullscreenchange", onChange);
      document.removeEventListener("MSFullscreenChange", onChange);
    };
  }, []);

  return { isFullscreen, enter, exit, toggle };
}
