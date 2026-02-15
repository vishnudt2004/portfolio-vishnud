import { useEffect } from "react";

export default function FocusFixer() {
  useEffect(() => {
    const focusableSelector = 'a[href="#"]';

    document.querySelectorAll(focusableSelector).forEach((el) => {
      el.tabIndex = -1;
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // If the node itself matches
            const newFocusable = node.matches(focusableSelector)
              ? [node]
              : node.querySelectorAll(focusableSelector);
            newFocusable.forEach((el) => (el.tabIndex = -1));
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
