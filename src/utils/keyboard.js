const createKeyMap = (map) => (e) => {
  const handler = map[e.key];
  if (handler) handler(e);
};

const getFocusableItems = (
  container,
  focusableSelector = `
  a[href],
  button:not([disabled]),
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"]),
  summary
`,
) => {
  if (!container) return [];

  return Array.from(container.querySelectorAll(focusableSelector)).filter(
    (el) => el.offsetParent !== null,
  ); // visible only
};

const moveFocus = (items, direction) => {
  if (!items.length) return;

  let nextIndex;

  const currentIndex = items.indexOf(document.activeElement);

  if (direction === "start" || direction === "first") {
    nextIndex = 0;
  } else if (direction === "end" || direction === "last") {
    nextIndex = items.length - 1;
  } else if (direction === "next") {
    if (currentIndex === -1) return;
    nextIndex = (currentIndex + 1) % items.length;
  } else if (direction === "prev") {
    if (currentIndex === -1) return;
    nextIndex = (currentIndex - 1 + items.length) % items.length;
  } else if (typeof direction === "number") {
    // allow numeric relative shift
    if (currentIndex === -1) return;
    nextIndex = (currentIndex + direction + items.length) % items.length;
  }

  items[nextIndex]?.focus();
};

export { createKeyMap, getFocusableItems, moveFocus };
