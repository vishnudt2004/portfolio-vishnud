import { useCallback, useEffect, useState } from "react";

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    // Safari
    // @ts-expect-error
    document.webkitFullscreenElement ||
    null
  );
}

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enter = useCallback(() => {
    const el = document.documentElement;

    if (el.requestFullscreen) el.requestFullscreen();
    // Safari
    // @ts-expect-error
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  }, []);

  const exit = useCallback(() => {
    if (document.exitFullscreen) document.exitFullscreen();
    // Safari
    // @ts-expect-error
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }, []);

  const toggle = useCallback(() => {
    if (getFullscreenElement()) exit();
    else enter();
  }, [enter, exit]);

  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(Boolean(getFullscreenElement()));
    };

    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);

    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  return { isFullscreen, enter, exit, toggle };
}
