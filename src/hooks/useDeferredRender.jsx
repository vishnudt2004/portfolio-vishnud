// Defer non-critical rendering until browser idle time to reduce impact on initial FCP/LCP measurement.

import { useEffect, useState } from "react";

export const useDeferredRender = (timeout = 1500) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const defer = () => setIsDeferred(true);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(defer, { timeout });

      return () => cancelIdleCallback(id);
    }

    const fallback = setTimeout(defer, 1);

    return () => clearTimeout(fallback);
  }, [timeout]);

  return isDeferred;
};
